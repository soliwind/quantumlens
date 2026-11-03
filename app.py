"""QuantumLens: an educational 3D molecular-orbital visualizer.

Run with: streamlit run app.py

Scientific scope:
- Geometry: RDKit ETKDG, followed by MMFF/UFF optimization where available.
- Orbital energies and coefficients: RDKit YAeHMOP Extended Hückel Theory (EHT).
- AO-to-grid rendering: normalized, STO-inspired *approximate* real-space basis functions.
  These are not the exact YAeHMOP atomic orbitals, so this is a qualitative educational
  visualization, not a substitute for a quantum-chemistry package's electron density.

AO mapping is intentionally limited to a tested subset of main-group elements because
RDKit's public EHT result object does not provide a documented AO metadata table. The
per-atom order (s, px, py, pz for supported p-block atoms; 1s for H) is assumed. The AO
count is checked against the EHT matrix dimension, but that check does not independently
prove the ordering, so 3D shapes are qualitative rather than quantitative wavefunctions.
"""

from __future__ import annotations

import hashlib
import math
from typing import Any

import numpy as np
import plotly.graph_objects as go
import streamlit as st
from scipy.linalg import eigh

from rdkit import Chem, rdBase
from rdkit.Chem import AllChem, rdEHTTools, rdMolDescriptors


APP_TITLE = "QuantumLens"
DEFAULT_SMILES = "c1ccccc1"
SUPPORTED_ELEMENTS = {"H", "B", "C", "N", "O", "F", "Si", "P", "S", "Cl", "Br", "I"}
MAX_ATOMS_WITH_H = 60
DEFAULT_PADDING_ANGSTROM = 3.0

# Approximate STO exponents for qualitative rendering only. Entries are
# (principal quantum number n, zeta_s, zeta_p). Heavy main-group values are
# chosen for plausible radial decay, not claimed to match RDKit's internal AO set.
# RDKit's Python EHTResults API does not expose exact AO metadata or exponents.
AO_PARAMETERS = {
    "H":  (1, 1.300, 1.300),
    "B":  (2, 1.300, 1.300),
    "C":  (2, 1.625, 1.625),
    "N":  (2, 1.950, 1.950),
    "O":  (2, 2.275, 2.275),
    "F":  (2, 2.425, 2.425),
    "Si": (3, 1.383, 1.383),
    "P":  (3, 1.600, 1.600),
    "S":  (3, 2.122, 1.827),
    "Cl": (3, 2.183, 1.733),
    "Br": (4, 2.588, 2.131),
    "I":  (5, 2.679, 2.322),
}

ATOM_COLORS = {
    "H": "#F8FAFC",
    "B": "#F59E0B",
    "C": "#4B5563",
    "N": "#2563EB",
    "O": "#EF4444",
    "F": "#10B981",
}
ATOM_SIZES = {"H": 5, "B": 9, "C": 9, "N": 9, "O": 9, "F": 9}


# -----------------------------------------------------------------------------
# Step 1: Geometry generation
# -----------------------------------------------------------------------------
def generate_geometry(smiles: str, optimize: bool = True) -> dict[str, Any]:
    """Parse a SMILES, add explicit H atoms, embed 3D coordinates and optimize if possible."""
    smiles = (smiles or "").strip()
    if not smiles:
        raise ValueError("SMILES가 비어 있습니다. 분자 SMILES를 입력해 주세요.")

    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        raise ValueError("SMILES를 해석하지 못했습니다. 괄호·고리 번호·원자가를 확인해 주세요.")

    # Fail early for unsupported atoms before entering the EHT implementation.
    elements = sorted({atom.GetSymbol() for atom in mol.GetAtoms()})
    unsupported = [symbol for symbol in elements if symbol not in SUPPORTED_ELEMENTS]
    if unsupported:
        supported = ", ".join(sorted(SUPPORTED_ELEMENTS))
        raise ValueError(
            "현재 버전은 AO 함수 매핑을 검증한 H, B, C, N, O, F 원소만 지원합니다. "
            f"입력에 지원하지 않는 원소가 있습니다: {', '.join(unsupported)}. "
            f"지원 원소: {supported}. 잘못된 AO 매핑으로 그림을 만들지 않도록 계산을 중단했습니다."
        )

    mol = Chem.AddHs(mol)
    if mol.GetNumAtoms() > MAX_ATOMS_WITH_H:
        raise ValueError(
            f"수소를 포함한 원자 수가 {MAX_ATOMS_WITH_H}개를 초과합니다 "
            f"({mol.GetNumAtoms()}개). 현재 데모는 더 작은 분자에 맞춰져 있습니다."
        )

    params = AllChem.ETKDGv3()
    params.randomSeed = 0xF00D
    params.maxIterations = 1000
    embed_status = AllChem.EmbedMolecule(mol, params)
    if embed_status != 0:
        raise ValueError("ETKDG 3D 좌표 생성을 실패했습니다. 다른 SMILES를 시도해 주세요.")

    warnings: list[str] = []
    if optimize:
        try:
            if AllChem.MMFFHasAllMoleculeParams(mol):
                status = AllChem.MMFFOptimizeMolecule(mol, maxIters=500)
                if status != 0:
                    warnings.append("MMFF 구조 최적화가 최대 반복 횟수 내에 완전히 수렴하지 않았습니다.")
            elif AllChem.UFFHasAllMoleculeParams(mol):
                status = AllChem.UFFOptimizeMolecule(mol, maxIters=500)
                if status != 0:
                    warnings.append("UFF 구조 최적화가 최대 반복 횟수 내에 완전히 수렴하지 않았습니다.")
            else:
                warnings.append("이 분자에 사용할 MMFF/UFF 매개변수가 없어 ETKDG 좌표를 사용합니다.")
        except Exception as exc:  # molecule-specific force-field edge cases
            warnings.append(f"기하 최적화를 생략했습니다: {exc}")

    conformer = mol.GetConformer()
    positions = np.asarray(conformer.GetPositions(), dtype=np.float64)
    symbols = tuple(atom.GetSymbol() for atom in mol.GetAtoms())
    bonds = tuple(
        (int(bond.GetBeginAtomIdx()), int(bond.GetEndAtomIdx()), int(round(bond.GetBondTypeAsDouble())))
        for bond in mol.GetBonds()
    )
    formula = rdMolDescriptors.CalcMolFormula(mol)

    return {
        "mol": mol,
        "positions": positions,
        "symbols": symbols,
        "bonds": bonds,
        "formula": formula,
        "warnings": tuple(warnings),
    }


# -----------------------------------------------------------------------------
# Step 2: EHT matrices and MO coefficients
# -----------------------------------------------------------------------------
def _ao_basis_for_molecule(mol: Chem.Mol) -> list[dict[str, Any]]:
    """Describe an assumed valence AO order for the supported main-group elements.

    Assumed per-atom order: H: 1s; other supported atoms: ns, npx, npy, npz.
    rdEHTTools has no documented public AO metadata table. We verify the total AO count,
    but ordering remains an explicit assumption rather than something count validation proves.
    """
    ao_specs: list[dict[str, Any]] = []
    for atom in mol.GetAtoms():
        symbol = atom.GetSymbol()
        atom_idx = atom.GetIdx()
        n, zeta_s, zeta_p = AO_PARAMETERS[symbol]
        if symbol == "H":
            ao_specs.append(
                {"atom_idx": atom_idx, "kind": "s", "n": 1, "zeta": zeta_s, "label": f"{atom_idx + 1}:{symbol} 1s"}
            )
        else:
            for kind, orbital_name, zeta in (
                ("s", f"{n}s", zeta_s),
                ("px", f"{n}px", zeta_p),
                ("py", f"{n}py", zeta_p),
                ("pz", f"{n}pz", zeta_p),
            ):
                ao_specs.append(
                    {
                        "atom_idx": atom_idx,
                        "kind": kind,
                        "n": n,
                        "zeta": zeta,
                        "label": f"{atom_idx + 1}:{symbol} {orbital_name}",
                    }
                )
    return ao_specs


def _restore_symmetric_matrix(matrix: np.ndarray, name: str) -> np.ndarray:
    """Restore a symmetric matrix if RDKit exposed only its upper triangle."""
    matrix = np.asarray(matrix, dtype=np.float64)
    if matrix.ndim != 2 or matrix.shape[0] != matrix.shape[1]:
        raise ValueError(f"RDKit의 {name} 행렬 크기가 올바르지 않습니다.")

    scale = max(1.0, float(np.linalg.norm(matrix, ord="fro")))
    if np.allclose(matrix, matrix.T, rtol=1e-10, atol=1e-12):
        return 0.5 * (matrix + matrix.T)

    upper_offdiag_norm = float(np.linalg.norm(np.triu(matrix, 1), ord="fro"))
    lower_offdiag_norm = float(np.linalg.norm(np.tril(matrix, -1), ord="fro"))
    tolerance = 1e-12 * scale

    if lower_offdiag_norm <= tolerance and upper_offdiag_norm > tolerance:
        upper = np.triu(matrix)
        return upper + np.triu(matrix, 1).T
    if upper_offdiag_norm <= tolerance and lower_offdiag_norm > tolerance:
        lower = np.tril(matrix)
        return lower + np.tril(matrix, -1).T

    # If both triangles contain values but differ beyond round-off, do not silently
    # choose one triangle: average them and later validate eigenvalues against RDKit.
    return 0.5 * (matrix + matrix.T)


def calculate_mo_coefficients(mol: Chem.Mol) -> dict[str, Any]:
    """Run RDKit EHT and recover normalized AO coefficients from H C = S C E."""
    success, eht_result = rdEHTTools.RunMol(mol, -1, True)
    if not success:
        raise ValueError("RDKit Extended Hückel Theory(EHT) 계산이 실패했습니다.")

    n_orbitals = int(eht_result.numOrbitals)
    num_electrons = int(eht_result.numElectrons)
    ao_specs = _ao_basis_for_molecule(mol)
    if len(ao_specs) != n_orbitals:
        raise ValueError(
            "AO 기저 함수 개수가 RDKit EHT 결과와 일치하지 않습니다 "
            f"(예상 {len(ao_specs)}개, EHT {n_orbitals}개). "
            "원소별 기저 순서를 확신할 수 없으므로 오비탈 시각화를 중단했습니다."
        )

    try:
        hamiltonian = _restore_symmetric_matrix(eht_result.GetHamiltonian(), "Hamiltonian")
        overlap = _restore_symmetric_matrix(eht_result.GetOverlapMatrix(), "overlap")
        eht_energies = np.asarray(eht_result.GetOrbitalEnergies(), dtype=np.float64).reshape(-1)
    except Exception as exc:
        raise ValueError(
            "EHT 행렬을 읽을 수 없습니다. RunMol(..., keepOverlapAndHamiltonianMatrices=True) "
            f"호출이 필요한 RDKit 버전인지 확인해 주세요. 원인: {exc}"
        ) from exc

    if hamiltonian.shape != (n_orbitals, n_orbitals) or overlap.shape != (n_orbitals, n_orbitals):
        raise ValueError("EHT 행렬과 오비탈 개수의 차원이 일치하지 않습니다.")
    if eht_energies.size != n_orbitals:
        raise ValueError("RDKit EHT 에너지 벡터의 길이가 오비탈 개수와 일치하지 않습니다.")

    # SciPy solves the generalized Hermitian eigenvalue problem H C = S C E.
    try:
        energies, coefficients = eigh(hamiltonian, overlap, check_finite=True, lower=True)
    except Exception as exc:
        raise ValueError(f"EHT 일반화 고유값 문제를 풀지 못했습니다: {exc}") from exc

    order = np.argsort(energies)
    energies = energies[order]
    coefficients = coefficients[:, order]
    ref_energies = np.sort(eht_energies)
    if not np.allclose(energies, ref_energies, rtol=2e-5, atol=2e-3):
        max_delta = float(np.max(np.abs(energies - ref_energies)))
        raise ValueError(
            "복원한 EHT 행렬의 고유값이 RDKit이 보고한 MO 에너지와 일치하지 않습니다 "
            f"(최대 차이 {max_delta:.4g} eV). 이 RDKit 버전의 행렬 저장 규약을 확인해야 합니다."
        )

    return {
        "energies": energies,
        "coefficients": coefficients,
        "num_electrons": num_electrons,
        "fermi_energy": float(eht_result.fermiEnergy),
        "total_energy": float(eht_result.totalEnergy),
        "ao_specs": ao_specs,
    }


@st.cache_data(show_spinner=False, max_entries=8)
def analyze_smiles_cached(smiles: str, optimize_geometry: bool) -> dict[str, Any]:
    """Cached end-to-end molecule analysis. Return serializable data, not an RDKit Mol."""
    geometry = generate_geometry(smiles, optimize=optimize_geometry)
    mol = geometry.pop("mol")
    mo = calculate_mo_coefficients(mol)
    ao_specs = mo.pop("ao_specs")

    ao_atom_indices = tuple(int(item["atom_idx"]) for item in ao_specs)
    ao_kinds = tuple(str(item["kind"]) for item in ao_specs)
    ao_n = tuple(int(item["n"]) for item in ao_specs)
    ao_zetas = tuple(float(item["zeta"]) for item in ao_specs)
    ao_labels = tuple(str(item["label"]) for item in ao_specs)

    return {
        **geometry,
        "smiles": smiles.strip(),
        "energies": mo["energies"],
        "coefficients": mo["coefficients"],
        "num_electrons": mo["num_electrons"],
        "fermi_energy": mo["fermi_energy"],
        "total_energy": mo["total_energy"],
        "ao_atom_indices": ao_atom_indices,
        "ao_kinds": ao_kinds,
        "ao_n": ao_n,
        "ao_zetas": ao_zetas,
        "ao_labels": ao_labels,
        "rdkit_version": rdBase.rdkitVersion,
    }


# -----------------------------------------------------------------------------
# Step 3: LCAO scalar field on a 3D grid
# -----------------------------------------------------------------------------
def _sto_normalization(n: int, zeta: float, kind: str) -> float:
    """Normalization for real Cartesian STO-like functions used by this renderer."""
    radial_integral = math.factorial(2 * n) / ((2.0 * zeta) ** (2 * n + 1))
    angular_integral = 4.0 * math.pi if kind == "s" else 4.0 * math.pi / 3.0
    return 1.0 / math.sqrt(angular_integral * radial_integral)


@st.cache_data(show_spinner=False, max_entries=12)
def compute_3d_grid(
    positions: np.ndarray,
    ao_atom_indices: tuple[int, ...],
    ao_kinds: tuple[str, ...],
    ao_n: tuple[int, ...],
    ao_zetas: tuple[float, ...],
    mo_coefficients: np.ndarray,
    resolution: int = 40,
    padding: float = DEFAULT_PADDING_ANGSTROM,
) -> tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray, tuple[float, float, float]]:
    """Compute Ψ(r)=Σᵢ cᵢχᵢ(r) using a normalized STO-inspired approximation."""
    positions = np.asarray(positions, dtype=np.float64)
    coeffs = np.asarray(mo_coefficients, dtype=np.float64).reshape(-1)
    if coeffs.size != len(ao_atom_indices):
        raise ValueError("MO 계수와 AO 기저 함수 개수가 일치하지 않습니다.")

    low = positions.min(axis=0) - float(padding)
    high = positions.max(axis=0) + float(padding)
    axes = [np.linspace(low[k], high[k], int(resolution), dtype=np.float64) for k in range(3)]
    X, Y, Z = np.meshgrid(*axes, indexing="ij")
    psi = np.zeros(X.shape, dtype=np.float64)

    for ao_idx, coefficient in enumerate(coeffs):
        if abs(float(coefficient)) < 1e-10:
            continue
        atom_idx = ao_atom_indices[ao_idx]
        x0, y0, z0 = positions[atom_idx]
        dx = X - x0
        dy = Y - y0
        dz = Z - z0
        r = np.sqrt(dx * dx + dy * dy + dz * dz)
        n = int(ao_n[ao_idx])
        zeta = float(ao_zetas[ao_idx])
        kind = ao_kinds[ao_idx]
        radial = np.power(np.maximum(r, 1e-15), n - 1) * np.exp(-zeta * r)

        if kind == "s":
            angular = np.ones_like(r)
        elif kind == "px":
            angular = dx / np.maximum(r, 1e-12)
        elif kind == "py":
            angular = dy / np.maximum(r, 1e-12)
        elif kind == "pz":
            angular = dz / np.maximum(r, 1e-12)
        else:
            raise ValueError(f"알 수 없는 AO 종류: {kind}")

        norm = _sto_normalization(n, zeta, kind)
        psi += float(coefficient) * norm * radial * angular

    # Float32 greatly reduces payload size sent to the browser while retaining visual detail.
    x_flat = X.ravel().astype(np.float32)
    y_flat = Y.ravel().astype(np.float32)
    z_flat = Z.ravel().astype(np.float32)
    psi_flat = psi.ravel().astype(np.float32)
    bounds = (float(low.min()), float(high.max()), float(np.max(np.abs(psi_flat))))
    return x_flat, y_flat, z_flat, psi_flat, bounds


# -----------------------------------------------------------------------------
# Step 4: Plotly visualization
# -----------------------------------------------------------------------------
def _add_bonds(fig: go.Figure, positions: np.ndarray, bonds: tuple[tuple[int, int, int], ...]) -> None:
    """Draw single/double/triple bonds as thin parallel 3D line segments."""
    traces: dict[int, dict[str, list[float | None]]] = {
        1: {"x": [], "y": [], "z": []},
        2: {"x": [], "y": [], "z": []},
        3: {"x": [], "y": [], "z": []},
    }
    for i, j, order in bonds:
        order = max(1, min(3, int(order)))
        start, end = positions[i], positions[j]
        direction = end - start
        length = float(np.linalg.norm(direction))
        if length < 1e-8:
            continue
        unit = direction / length
        ref = np.array([0.0, 0.0, 1.0])
        perp = np.cross(unit, ref)
        if np.linalg.norm(perp) < 1e-5:
            perp = np.cross(unit, np.array([0.0, 1.0, 0.0]))
        perp /= max(float(np.linalg.norm(perp)), 1e-12)
        offset = 0.075
        offsets = [0.0] if order == 1 else ([-offset, offset] if order == 2 else [-offset, 0.0, offset])
        for shift in offsets:
            p1 = start + perp * shift
            p2 = end + perp * shift
            trace = traces[order]
            trace["x"].extend([float(p1[0]), float(p2[0]), None])
            trace["y"].extend([float(p1[1]), float(p2[1]), None])
            trace["z"].extend([float(p1[2]), float(p2[2]), None])

    for order, xyz in traces.items():
        if xyz["x"]:
            fig.add_trace(
                go.Scatter3d(
                    x=xyz["x"], y=xyz["y"], z=xyz["z"],
                    mode="lines",
                    line={"color": "#9CA3AF", "width": 4 if order == 1 else 3},
                    hoverinfo="skip",
                    showlegend=False,
                    name=f"결합 차수 {order}",
                )
            )


def render_plotly(
    analysis: dict[str, Any],
    grid: tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray, tuple[float, float, float]],
    opacity: float,
    threshold_fraction: float,
) -> go.Figure:
    x, y, z, psi, bounds = grid
    max_abs = float(np.max(np.abs(psi)))
    cutoff = max(max_abs * float(threshold_fraction), 1e-12)
    positive = np.maximum(psi, 0.0)
    negative = np.maximum(-psi, 0.0)

    fig = go.Figure()
    # Each phase is a separate positive-valued scalar field so Plotly can render both
    # lobes explicitly, with red/blue colors and a shared relative amplitude threshold.
    if float(positive.max()) > cutoff:
        fig.add_trace(
            go.Volume(
                x=x, y=y, z=z, value=positive,
                isomin=cutoff, isomax=float(positive.max()),
                surface_count=10,
                colorscale=[[0.0, "#7CB5FF"], [1.0, "#0647D9"]],
                opacity=float(opacity),
                showscale=False,
                caps={"x": {"show": False}, "y": {"show": False}, "z": {"show": False}},
                name="Ψ > 0 (positive phase)",
                hoverinfo="skip",
                showlegend=False,
            )
        )
    if float(negative.max()) > cutoff:
        fig.add_trace(
            go.Volume(
                x=x, y=y, z=z, value=negative,
                isomin=cutoff, isomax=float(negative.max()),
                surface_count=10,
                colorscale=[[0.0, "#FFAAAA"], [1.0, "#C1121F"]],
                opacity=float(opacity),
                showscale=False,
                caps={"x": {"show": False}, "y": {"show": False}, "z": {"show": False}},
                name="Ψ < 0 (negative phase)",
                hoverinfo="skip",
                showlegend=False,
            )
        )

    positions = np.asarray(analysis["positions"], dtype=np.float64)
    _add_bonds(fig, positions, analysis["bonds"])

    symbols = list(analysis["symbols"])
    hover = [
        f"원자 {idx + 1}: {symbol}<br>"
        f"x={positions[idx, 0]:.3f} Å<br>"
        f"y={positions[idx, 1]:.3f} Å<br>"
        f"z={positions[idx, 2]:.3f} Å"
        for idx, symbol in enumerate(symbols)
    ]
    fig.add_trace(
        go.Scatter3d(
            x=positions[:, 0], y=positions[:, 1], z=positions[:, 2],
            mode="markers+text",
            text=symbols,
            textposition="top center",
            textfont={"size": 10, "color": "#111827"},
            hovertext=hover,
            hoverinfo="text",
            marker={
                "size": [ATOM_SIZES.get(s, 8) for s in symbols],
                "color": [ATOM_COLORS.get(s, "#A1A1AA") for s in symbols],
                "opacity": 1.0,
                "line": {"color": "#6B7280", "width": 1},
            },
            name="원자",
            showlegend=False,
        )
    )

    fig.update_layout(
        height=680,
        margin={"l": 0, "r": 0, "t": 10, "b": 0},
        paper_bgcolor="white",
        plot_bgcolor="white",
        scene={
            "xaxis": {"title": "X (Å)", "showbackground": False, "zerolinecolor": "#E5E7EB"},
            "yaxis": {"title": "Y (Å)", "showbackground": False, "zerolinecolor": "#E5E7EB"},
            "zaxis": {"title": "Z (Å)", "showbackground": False, "zerolinecolor": "#E5E7EB"},
            "aspectmode": "data",
            "bgcolor": "white",
        },
    )
    return fig


# -----------------------------------------------------------------------------
# Helpers and Streamlit UI
# -----------------------------------------------------------------------------
def orbital_label(index: int, num_electrons: int) -> str:
    """Human-readable MO label. Index is zero-based and energies are ascending."""
    if num_electrons <= 0:
        tag = "MO"
    elif num_electrons % 2 == 0:
        homo = num_electrons // 2 - 1
        lumo = homo + 1
        if index == homo:
            tag = "HOMO"
        elif index < homo:
            tag = f"HOMO−{homo - index}"
        elif index == lumo:
            tag = "LUMO"
        else:
            tag = f"LUMO+{index - lumo}"
    else:
        somo = num_electrons // 2
        if index == somo:
            tag = "SOMO"
        elif index < somo:
            tag = f"HOMO−{somo - index}"
        elif index == somo + 1:
            tag = "LUMO"
        else:
            tag = f"LUMO+{index - somo - 1}"
    return f"{tag} · MO {index + 1}"


def orbital_occupancy(index: int, num_electrons: int) -> int:
    if index < max(0, num_electrons // 2):
        return 2
    if num_electrons % 2 == 1 and index == num_electrons // 2:
        return 1
    return 0


def main() -> None:
    st.set_page_config(page_title=APP_TITLE, page_icon="⚛️", layout="wide")

    st.title("⚛️ QuantumLens")
    st.caption("SMILES → 3D 구조 → Extended Hückel MO → LCAO 파동함수 위상 시각화")

    with st.sidebar:
        st.header("분자 설정")
        with st.form("molecule_form", clear_on_submit=False):
            smiles_input = st.text_input(
                "SMILES",
                value=DEFAULT_SMILES,
                help="예: c1ccccc1 (벤젠), CCO (에탄올), O (물)",
            )
            optimize_geometry = st.checkbox("MMFF/UFF 구조 최적화 시도", value=True)
            calculate = st.form_submit_button("분자 계산", type="primary", use_container_width=True)

        st.divider()
        st.header("렌더링 설정")
        opacity = st.slider("파동함수 투명도", min_value=0.10, max_value=0.80, value=0.36, step=0.02)
        threshold_fraction = st.slider(
            "임계값 (% of max |Ψ|)",
            min_value=0.01,
            max_value=0.10,
            value=0.035,
            step=0.005,
            help="오비탈별 최대 진폭에 대한 상대 임계값입니다. 값이 클수록 작은 진폭 영역이 사라집니다.",
        )
        resolution = st.select_slider(
            "3D 격자 해상도",
            options=[28, 32, 36, 40, 44, 48, 52],
            value=40,
            help="격자점 수입니다. 높은 해상도는 더 매끄럽지만 계산과 브라우저 렌더링이 느려집니다.",
        )
        st.caption("파란색: Ψ > 0 · 빨간색: Ψ < 0 · 원자 색상은 원소 종류")

    if calculate:
        try:
            with st.spinner("3D 구조와 EHT 분자 오비탈을 계산하고 있습니다…"):
                result = analyze_smiles_cached(smiles_input, optimize_geometry)
            st.session_state["quantumlens_analysis"] = result
            st.session_state["quantumlens_smiles"] = smiles_input.strip()
        except Exception as exc:
            st.error(f"계산 실패: {exc}")
            st.info(
                "팁: 우선 벤젠 `c1ccccc1`, 에탄올 `CCO`, 물 `O` 중 하나를 사용해 보세요. "
                "현재 AO 시각화 매핑은 H/B/C/N/O/F/Si/P/S/Cl/Br/I 원소에 한정됩니다."
            )

    analysis = st.session_state.get("quantumlens_analysis")
    if analysis is None:
        st.info("왼쪽에서 SMILES를 입력하고 **분자 계산**을 누르세요. 기본 예제는 벤젠입니다.")
        with st.expander("모델 해석 및 한계", expanded=True):
            st.markdown(
                """
                - **에너지와 계수:** RDKit의 Extended Hückel Theory 결과를 사용합니다. 계수는 보존된 해밀토니안 `H`와 중첩 행렬 `S`로부터 `H C = S C E`를 풀어 복원하고, 계산 에너지가 RDKit 결과와 일치하는지 검사합니다.
                - **3D 모양:** 계수와 STO-inspired 기저함수를 합산한 교육용 근사입니다. RDKit EHT가 사용하는 정확한 AO 방사 함수/기저 메타데이터를 그대로 재현하는 계산은 아닙니다.
                - **색상:** 파랑/빨강은 파동함수의 부호(위상)이며 전하의 부호가 아닙니다. `Ψ`의 부호 전체를 뒤집어도 물리적 내용은 같습니다.
                - **전자 밀도:** 이 화면은 `Ψ`의 위상을 보여줍니다. 전자 확률밀도는 `|Ψ|²`이며 색상으로 표시하는 위상과 다른 양입니다.
                """
            )
        return

    symbols = analysis["symbols"]
    positions = np.asarray(analysis["positions"])
    energies = np.asarray(analysis["energies"])
    coefficients = np.asarray(analysis["coefficients"])
    num_electrons = int(analysis["num_electrons"])
    n_mos = len(energies)

    with st.sidebar:
        st.divider()
        st.header("에너지 준위")
        default_index = max(0, min(n_mos - 1, (num_electrons // 2 - 1) if num_electrons % 2 == 0 else (num_electrons // 2)))
        smiles_key = hashlib.md5(str(analysis["smiles"]).encode("utf-8")).hexdigest()[:8]
        mo_index = st.selectbox(
            "표시할 분자 오비탈",
            options=list(range(n_mos)),
            index=default_index,
            format_func=lambda idx: f"{orbital_label(idx, num_electrons)}  |  {energies[idx]:.3f} eV",
            key=f"quantumlens_mo_{smiles_key}",
        )

    st.subheader(f"{analysis['formula']} · {analysis['smiles']}")
    metric_cols = st.columns(4)
    metric_cols[0].metric("MO 에너지", f"{energies[mo_index]:.3f} eV")
    metric_cols[1].metric("오비탈", f"MO {mo_index + 1} / {n_mos}")
    metric_cols[2].metric("점유 전자 수(모델)", f"{orbital_occupancy(mo_index, num_electrons)} / 2")
    metric_cols[3].metric("전자 수(EHT 결과)", f"{num_electrons}")

    for warning in analysis["warnings"]:
        st.warning(warning)

    try:
        with st.spinner("3D 파동함수 격자를 계산하고 있습니다…"):
            grid = compute_3d_grid(
                np.asarray(analysis["positions"]),
                tuple(analysis["ao_atom_indices"]),
                tuple(analysis["ao_kinds"]),
                tuple(analysis["ao_n"]),
                tuple(analysis["ao_zetas"]),
                coefficients[:, mo_index],
                resolution=int(resolution),
                padding=DEFAULT_PADDING_ANGSTROM,
            )
        fig = render_plotly(analysis, grid, opacity=opacity, threshold_fraction=threshold_fraction)
        st.plotly_chart(fig, use_container_width=True, config={"scrollZoom": True, "displaylogo": False})
    except Exception as exc:
        st.error(f"파동함수 렌더링 실패: {exc}")
        st.stop()

    max_amplitude = float(grid[4][2])
    st.caption(
        f"표시: {orbital_label(mo_index, num_electrons)} · 상대 임계 진폭 {threshold_fraction:.1%} · "
        f"격자 {resolution}³ ({resolution ** 3:,} voxel) · 최대 |Ψ| ≈ {max_amplitude:.4g} "
        f"· RDKit {analysis['rdkit_version']}"
    )

    with st.expander("계산 정보 및 AO 기저 함수", expanded=False):
        left, right = st.columns(2)
        with left:
            st.markdown("**구조 및 계산 정보**")
            st.write(f"SMILES: `{analysis['smiles']}`")
            st.write(f"분자식: `{analysis['formula']}`")
            st.write(f"원자 수(수소 포함): {len(symbols)}")
            st.write(f"EHT AO/MO 개수: {len(analysis['ao_labels'])}")
            st.write(f"EHT Fermi 에너지: {analysis['fermi_energy']:.3f} eV")
            st.write(f"EHT 전체 에너지: {analysis['total_energy']:.3f} eV")
        with right:
            st.markdown("**선택한 MO의 큰 계수**")
            coeff_vector = coefficients[:, mo_index]
            order = np.argsort(np.abs(coeff_vector))[::-1][: min(12, len(coeff_vector))]
            ao_table = [
                {"AO": analysis["ao_labels"][i], "계수": float(coeff_vector[i]), "|계수|": float(abs(coeff_vector[i]))}
                for i in order
            ]
            st.dataframe(ao_table, use_container_width=True, hide_index=True)
        st.markdown(
            "AO 함수의 `ζ`와 방사 형태는 시각화용 근삿값이며, AO 순서는 원자별 s, px, py, pz 관례를 가정합니다. "
            "AO 개수 검사는 차원만 확인합니다. 따라서 에너지 값은 EHT 계산 결과이지만, 3D 로브 크기와 세부 모양은 "
            "정량적인 전자밀도 계산으로 해석하면 안 됩니다."
        )

    with st.expander("MO 에너지 목록", expanded=False):
        rows = []
        for idx, energy in enumerate(energies):
            rows.append(
                {
                    "MO": idx + 1,
                    "라벨": orbital_label(idx, num_electrons),
                    "에너지 (eV)": float(energy),
                    "점유 (모델)": orbital_occupancy(idx, num_electrons),
                    "선택": "◀" if idx == mo_index else "",
                }
            )
        st.dataframe(rows, use_container_width=True, hide_index=True)

    st.caption(
        "참고: RDKit EHT API는 실험적 인터페이스이며 버전에 따라 달라질 수 있습니다. "
        "계산 에너지와 복원한 행렬의 고유값이 일치하지 않으면 앱은 시각화를 중단합니다."
    )


if __name__ == "__main__":
    main()

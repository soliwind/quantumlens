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
import html
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
        "overlap": overlap,
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
        "overlap": mo["overlap"],
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
    display_mode: str = "phase",
) -> go.Figure:
    """Render the MO as a ray-cast volume, then overlay opaque molecular atoms.

    In phase mode the signed wavefunction controls the red/blue phase color, while
    the opacity scale is symmetric about zero and increases with |psi|. In density
    mode the scalar field is |psi|^2. Both are volume renderings rather than a
    single isosurface shell.
    """
    x, y, z, psi, bounds = grid
    max_abs = max(float(np.max(np.abs(psi))), 1e-12)
    fraction = float(np.clip(threshold_fraction, 0.001, 0.50))
    cutoff = max(max_abs * fraction, 1e-12)

    fig = go.Figure()
    if display_mode == "density":
        density = np.square(psi, dtype=np.float32)
        density_max = max(float(np.max(density)), 1e-20)
        density_cutoff = max(density_max * fraction * fraction, 1e-20)
        # The outer, faint probability-density cloud stays transparent; denser
        # regions become progressively more visible toward the center.
        opacity_scale = [
            [density_cutoff, 0.025],
            [density_cutoff + 0.04 * (density_max - density_cutoff), 0.055],
            [density_cutoff + 0.18 * (density_max - density_cutoff), 0.13],
            [density_cutoff + 0.45 * (density_max - density_cutoff), 0.28],
            [density_max, 0.72],
        ]
        fig.add_trace(
            go.Volume(
                x=x, y=y, z=z, value=density,
                isomin=density_cutoff, isomax=density_max,
                cmin=density_cutoff, cmax=density_max,
                colorscale=[
                    [0.0, "#DBEAFE"], [0.22, "#93C5FD"],
                    [0.58, "#3B82F6"], [1.0, "#1D4ED8"],
                ],
                opacity=float(opacity), opacityscale=opacity_scale,
                surface_count=24, showscale=False,
                caps={"x": {"show": False}, "y": {"show": False}, "z": {"show": False}},
                lighting={"ambient": 0.72, "diffuse": 0.82, "specular": 0.08, "roughness": 0.9},
                lightposition={"x": 100, "y": 160, "z": 120},
                hoverinfo="skip", name="전자 확률밀도 |Ψ|²", showlegend=False,
            )
        )
    else:
        # A single volume trace keeps the positive/negative phases in one depth
        # buffer. Opacity is low near the nodal region and rises toward large |psi|.
        opacity_scale = [
            [-cutoff, 0.72],
            [-0.76 * cutoff, 0.48],
            [-0.42 * cutoff, 0.19],
            [-0.12 * cutoff, 0.018],
            [0.12 * cutoff, 0.018],
            [0.42 * cutoff, 0.19],
            [0.76 * cutoff, 0.48],
            [cutoff, 0.72],
        ]
        fig.add_trace(
            go.Volume(
                x=x, y=y, z=z, value=psi,
                isomin=-cutoff, isomax=cutoff,
                cmin=-cutoff, cmax=cutoff,
                colorscale=[
                    [0.0, "#C2414B"], [0.495, "#C2414B"],
                    [0.505, "#2563EB"], [1.0, "#2563EB"],
                ],
                opacity=float(opacity), opacityscale=opacity_scale,
                surface_count=28, showscale=False,
                caps={"x": {"show": False}, "y": {"show": False}, "z": {"show": False}},
                lighting={"ambient": 0.72, "diffuse": 0.82, "specular": 0.08, "roughness": 0.9},
                lightposition={"x": 100, "y": 160, "z": 120},
                hoverinfo="skip", name="위상 기반 진폭 볼륨", showlegend=False,
            )
        )

    positions = np.asarray(analysis["positions"], dtype=np.float64)
    # Keep the molecular skeleton in front of the translucent ray-cast cloud.
    _add_bonds(fig, positions, analysis["bonds"])

    symbols = list(analysis["symbols"])
    hover = [
        f"원자 {idx + 1}: {symbol}<br>"
        f"x={positions[idx, 0]:.3f} Å<br>"
        f"y={positions[idx, 1]:.3f} Å<br>"
        f"z={positions[idx, 2]:.3f} Å"
        for idx, symbol in enumerate(symbols)
    ]
    # Opaque atom markers and a bright outline make atoms readable even when a
    # translucent probability cloud passes through their coordinates.
    fig.add_trace(
        go.Scatter3d(
            x=positions[:, 0], y=positions[:, 1], z=positions[:, 2],
            mode="markers+text", text=symbols, textposition="top center",
            textfont={"size": 11, "color": "#111827"},
            hovertext=hover, hoverinfo="text",
            marker={
                "size": [ATOM_SIZES.get(symbol, 8) + 3 for symbol in symbols],
                "color": [ATOM_COLORS.get(symbol, "#A1A1AA") for symbol in symbols],
                "opacity": 1.0,
                "line": {"color": "#FFFFFF", "width": 3},
            },
            name="원자", showlegend=False,
        )
    )

    fig.update_layout(
        height=690,
        margin={"l": 0, "r": 0, "t": 8, "b": 0},
        paper_bgcolor="white", plot_bgcolor="white",
        scene={
            "xaxis": {"title": "X (Å)", "showbackground": False, "zerolinecolor": "#E5E7EB"},
            "yaxis": {"title": "Y (Å)", "showbackground": False, "zerolinecolor": "#E5E7EB"},
            "zaxis": {"title": "Z (Å)", "showbackground": False, "zerolinecolor": "#E5E7EB"},
            "aspectmode": "data", "bgcolor": "white",
            "camera": {"projection": {"type": "orthographic"}},
        },
        uirevision=str(analysis.get("smiles", "molecule")),
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


def build_mo_energy_diagram(
    energies: np.ndarray,
    num_electrons: int,
    selected_index: int,
) -> go.Figure:
    """Build a fixed-size, click-to-select MO ladder with no pan/zoom/scroll."""
    energies = np.asarray(energies, dtype=float)
    n_mos = len(energies)
    occupancies = [orbital_occupancy(i, num_electrons) for i in range(n_mos)]
    colors = [
        "#F59E0B" if i == selected_index else ("#2563EB" if occupancies[i] else "#A8B2C1")
        for i in range(n_mos)
    ]
    sizes = [16 if i == selected_index else 11 for i in range(n_mos)]

    # Give degenerate orbitals separate clickable targets without moving their
    # actual energy levels. The horizontal jitter is only a selection affordance.
    x_positions = np.full(n_mos, 0.5, dtype=float)
    groups: list[list[int]] = []
    for idx in np.argsort(energies):
        if not groups or abs(float(energies[idx] - energies[groups[-1][0]])) > 1e-4:
            groups.append([int(idx)])
        else:
            groups[-1].append(int(idx))
    for group in groups:
        if len(group) > 1:
            offsets = np.linspace(0.34, 0.66, len(group))
            for idx, offset in zip(group, offsets):
                x_positions[idx] = float(offset)

    fig = go.Figure()
    for i, energy in enumerate(energies):
        fig.add_shape(
            type="line", x0=0.22, x1=0.78, y0=float(energy), y1=float(energy),
            line={"color": colors[i], "width": 3.4 if i == selected_index else 1.8},
            layer="below",
        )

    annotations = []
    homo_idx = max(0, min(n_mos - 1, num_electrons // 2 - 1))
    lumo_idx = max(0, min(n_mos - 1, num_electrons // 2))
    label_indices = {homo_idx, lumo_idx, selected_index}
    for i, energy in enumerate(energies):
        occ = occupancies[i]
        if occ:
            annotations.append({
                "x": 0.16, "y": float(energy), "xref": "x", "yref": "y",
                "text": "↑↓" if occ == 2 else "↑", "showarrow": False,
                "xanchor": "right", "font": {"size": 12, "color": "#334155"},
            })
        if i in label_indices:
            annotations.append({
                "x": 0.84, "y": float(energy), "xref": "x", "yref": "y",
                "text": orbital_label(i, num_electrons), "showarrow": False,
                "xanchor": "left", "font": {
                    "size": 10 if i != selected_index else 11,
                    "color": "#B45309" if i == selected_index else "#334155",
                },
            })

    fig.add_trace(
        go.Scatter(
            x=x_positions, y=energies, mode="markers",
            customdata=[[i, i + 1, occupancies[i]] for i in range(n_mos)],
            marker={
                "size": sizes, "color": colors,
                "line": {"color": "white", "width": 1.5},
                "symbol": ["circle" if occ else "circle-open" for occ in occupancies],
            },
            hovertemplate=(
                "<b>MO %{customdata[1]}</b><br>"
                "에너지 %{y:.3f} eV<br>"
                "점유 %{customdata[2]}/2 e⁻<extra></extra>"
            ),
            showlegend=False, name="MO 선택점",
        )
    )

    min_e, max_e = float(np.min(energies)), float(np.max(energies))
    span = max(max_e - min_e, 1.0)
    fig.update_layout(
        width=390, height=690, autosize=False,
        margin={"l": 42, "r": 132, "t": 12, "b": 42},
        paper_bgcolor="white", plot_bgcolor="white",
        clickmode="event+select", dragmode=False, hovermode="closest",
        annotations=annotations,
        xaxis={"range": [0.08, 0.98], "visible": False, "fixedrange": True},
        yaxis={
            "title": {"text": "에너지 (eV)", "font": {"size": 11}},
            "range": [min_e - 0.035 * span, max_e + 0.035 * span],
            "gridcolor": "#EEF2F7", "zeroline": True,
            "zerolinecolor": "#CBD5E1", "fixedrange": True,
            "tickfont": {"size": 10},
        },
        hoverlabel={"bgcolor": "white", "font": {"size": 11}},
        showlegend=False,
    )
    return fig


def mulliken_ao_contributions(
    coefficients: np.ndarray,
    overlap: np.ndarray,
) -> np.ndarray:
    """Return signed Mulliken AO populations q_i = c_i * (S c)_i.

    For an S-normalized MO, the values sum to one. Individual AO values can be
    negative because the basis is non-orthogonal; they are not probabilities.
    """
    c = np.asarray(coefficients, dtype=float).reshape(-1)
    s = np.asarray(overlap, dtype=float)
    if s.shape != (c.size, c.size):
        raise ValueError("AO 계수와 overlap 행렬 차원이 일치하지 않습니다.")
    return c * (s @ c)


def _ao_name(ao_kind: str, principal_n: int) -> str:
    if ao_kind == "s":
        return f"{principal_n}s"
    return f"{principal_n}p_{ao_kind[-1]}"


def _p_axis(ao_kind: str) -> np.ndarray | None:
    return {
        "px": np.array([1.0, 0.0, 0.0]),
        "py": np.array([0.0, 1.0, 0.0]),
        "pz": np.array([0.0, 0.0, 1.0]),
    }.get(ao_kind)


def _ao_pair_direction(ao_kind_a: str, ao_kind_b: str, bond_axis: np.ndarray) -> str:
    """A transparent geometric heuristic for AO orientation relative to a bond."""
    axis_a, axis_b = _p_axis(ao_kind_a), _p_axis(ao_kind_b)
    if axis_a is None and axis_b is None:
        return "s–s · 구대칭 σ형"
    align_a = abs(float(np.dot(axis_a, bond_axis))) if axis_a is not None else None
    align_b = abs(float(np.dot(axis_b, bond_axis))) if axis_b is not None else None
    alignments = [value for value in (align_a, align_b) if value is not None]

    if len(alignments) == 2:
        if align_a >= 0.72 and align_b >= 0.72:
            return "결합축 평행 · σ형"
        if align_a <= 0.32 and align_b <= 0.32:
            if abs(float(np.dot(axis_a, axis_b))) >= 0.8:
                return "결합축 수직 · π형"
            return "횡방향 혼합"
        if (align_a >= 0.72 and align_b <= 0.32) or (align_b >= 0.72 and align_a <= 0.32):
            return "σ–π 혼합 방향"
        return "비스듬한 방향 성분"

    alignment = alignments[0]
    if alignment >= 0.72:
        return "결합축 평행 · σ형"
    if alignment <= 0.32:
        return "결합축 수직 · π형 후보"
    return "비스듬한 방향 성분"


def bond_ao_interactions(
    analysis: dict[str, Any],
    mo_coefficients: np.ndarray,
    max_bonds: int = 8,
    max_pairs_per_bond: int = 3,
) -> list[dict[str, Any]]:
    """Decompose each bonded-atom overlap population into AO-pair terms.

    Pair term: 2 c_mu S_mu,nu c_nu. Summing all AO pairs between two atoms
    gives that bond's Mulliken overlap-population contribution for this MO.
    It is an MO-specific descriptor, not a conventional bond order.
    """
    coeffs = np.asarray(mo_coefficients, dtype=float).reshape(-1)
    overlap = np.asarray(analysis["overlap"], dtype=float)
    atom_indices = np.asarray(analysis["ao_atom_indices"], dtype=int)
    kinds = list(analysis["ao_kinds"])
    principal_ns = list(analysis["ao_n"])
    positions = np.asarray(analysis["positions"], dtype=float)
    symbols = list(analysis["symbols"])

    atom_to_aos = {
        atom_idx: np.flatnonzero(atom_indices == atom_idx)
        for atom_idx in range(len(symbols))
    }
    results: list[dict[str, Any]] = []
    for atom_a, atom_b, bond_order in analysis["bonds"]:
        idx_a = atom_to_aos[int(atom_a)]
        idx_b = atom_to_aos[int(atom_b)]
        if len(idx_a) == 0 or len(idx_b) == 0:
            continue
        cross_overlap = overlap[np.ix_(idx_a, idx_b)]
        pair_terms = 2.0 * coeffs[idx_a, None] * cross_overlap * coeffs[None, idx_b]
        total = float(np.sum(pair_terms))
        vector = positions[int(atom_b)] - positions[int(atom_a)]
        length = float(np.linalg.norm(vector))
        if length < 1e-10:
            continue
        bond_axis = vector / length

        pairs: list[dict[str, Any]] = []
        for local_a, local_b in np.ndindex(pair_terms.shape):
            value = float(pair_terms[local_a, local_b])
            if abs(value) < 1e-9:
                continue
            ao_a = int(idx_a[local_a])
            ao_b = int(idx_b[local_b])
            pairs.append({
                "left": f"{symbols[int(atom_a)]}{int(atom_a) + 1}",
                "right": f"{symbols[int(atom_b)]}{int(atom_b) + 1}",
                "left_ao": _ao_name(kinds[ao_a], int(principal_ns[ao_a])),
                "right_ao": _ao_name(kinds[ao_b], int(principal_ns[ao_b])),
                "direction": _ao_pair_direction(kinds[ao_a], kinds[ao_b], bond_axis),
                "value": value,
            })
        pairs.sort(key=lambda row: abs(row["value"]), reverse=True)
        if total > 0.015:
            character = "결합성 겹침 성분"
        elif total < -0.015:
            character = "반결합성 겹침 성분"
        else:
            character = "약하거나 상쇄되는 겹침 성분"
        results.append({
            "atom_a": int(atom_a), "atom_b": int(atom_b),
            "bond_order": int(bond_order), "total": total,
            "character": character, "pairs": pairs[:max_pairs_per_bond],
        })

    results.sort(key=lambda row: abs(row["total"]), reverse=True)
    # Avoid presenting numerical noise as a meaningful bond interaction. This
    # commonly occurs for nonbonding lone-pair MOs (e.g. H2O HOMO / CO2 pi lone-pair MOs).
    visible = [
        row for row in results
        if abs(float(row["total"])) >= 0.002
        or (row["pairs"] and abs(float(row["pairs"][0]["value"])) >= 0.002)
    ]
    return visible[:max_bonds]


def render_bond_interaction_cards(interactions: list[dict[str, Any]]) -> str:
    """Create visual atom–AO ↔ bond cards; numerical tables stay secondary."""
    if not interactions:
        return (
            '<div class="ql-empty">이 MO에서 뚜렷한 원자 간 AO 겹침 항을 찾지 못했어. '
            '비결합성 오비탈이거나 현재 기저 근사에서 겹침이 작을 수 있어.</div>'
        )
    largest = max(max(abs(float(item["total"])) for item in interactions), 1e-12)
    cards = []
    for item in interactions:
        pairs = item["pairs"]
        if pairs:
            primary = pairs[0]
            left_text = f'{primary["left"]} · {primary["left_ao"]}'
            right_text = f'{primary["right"]} · {primary["right_ao"]}'
            direction = primary["direction"]
            pair_text = "".join(
                '<div class="ql-pair-row">'
                f'<span>{html.escape(pair["left_ao"])}</span>'
                '<span class="ql-pair-arrow">↔</span>'
                f'<span>{html.escape(pair["right_ao"])}</span>'
                f'<span class="ql-pair-direction">{html.escape(pair["direction"])}</span>'
                f'<strong>{pair["value"]:+.4f}</strong>'
                '</div>'
                for pair in pairs
            )
        else:
            left_text = f'{item["atom_a"] + 1}번 원자'
            right_text = f'{item["atom_b"] + 1}번 원자'
            direction = "두 원자의 AO 겹침 항이 매우 작음"
            pair_text = '<div class="ql-pair-row"><span>표시할 주요 AO 쌍 없음</span></div>'
        relative_width = max(3.0, 100.0 * abs(float(item["total"])) / largest)
        total_color = "#147D64" if item["total"] >= 0 else "#C2414B"
        cards.append(
            '<div class="ql-bond-card">'
            '<div class="ql-card-top">'
            f'<span class="ql-bond-name">{html.escape(left_text)} <span class="ql-link">↔</span> {html.escape(right_text)}</span>'
            f'<span class="ql-chip">{html.escape(item["character"])}</span>'
            '</div>'
            f'<div class="ql-direction">{html.escape(direction)}</div>'
            f'{pair_text}'
            '<div class="ql-score-line">'
            '<span>이 MO 안에서의 결합 겹침 지표</span>'
            f'<strong style="color:{total_color}">{item["total"]:+.4f}</strong>'
            '</div>'
            '<div class="ql-meter"><span style="width:'
            f'{relative_width:.1f}%;background:{total_color}'
            '"></span></div>'
            '</div>'
        )
    return '<div class="ql-bond-grid">' + ''.join(cards) + '</div>'


def render_ao_contribution_cards(
    analysis: dict[str, Any],
    coefficients: np.ndarray,
) -> str:
    """Show the strongest signed AO Mulliken populations as compact visual bars."""
    populations = mulliken_ao_contributions(coefficients, np.asarray(analysis["overlap"], dtype=float))
    atom_indices = analysis["ao_atom_indices"]
    kinds = analysis["ao_kinds"]
    ns = analysis["ao_n"]
    symbols = analysis["symbols"]
    order = np.argsort(np.abs(populations))[::-1][: min(8, len(populations))]
    max_value = max(float(np.max(np.abs(populations))), 1e-12)
    rows = []
    for idx in order:
        atom_idx = int(atom_indices[int(idx)])
        name = f'{symbols[atom_idx]}{atom_idx + 1} · {_ao_name(kinds[int(idx)], int(ns[int(idx)]))}'
        value = float(populations[int(idx)])
        width = max(2.0, 100.0 * abs(value) / max_value)
        color = "#2563EB" if value >= 0 else "#C2414B"
        rows.append(
            '<div class="ql-ao-row">'
            f'<span class="ql-ao-name">{html.escape(name)}</span>'
            '<span class="ql-ao-bar"><span style="'
            f'width:{width:.1f}%;background:{color}'
            '"></span></span>'
            f'<strong style="color:{color}">{100.0 * value:+.1f}</strong>'
            '</div>'
        )
    return '<div class="ql-ao-summary">' + ''.join(rows) + '</div>'


def main() -> None:
    st.set_page_config(page_title=APP_TITLE, page_icon="⚛️", layout="wide")
    st.markdown(
        """
        <style>
        .ql-section-note { color: #64748B; font-size: 0.86rem; margin-top: -0.35rem; }
        .ql-bond-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
        .ql-bond-card { border: 1px solid #E2E8F0; border-radius: 13px; padding: 0.9rem; background: #FFFFFF; min-width: 0; }
        .ql-card-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; flex-wrap: wrap; }
        .ql-bond-name { font-weight: 700; color: #172033; font-size: 0.98rem; }
        .ql-link { color: #94A3B8; padding: 0 0.2rem; }
        .ql-chip { font-size: 0.72rem; border-radius: 99px; background: #F1F5F9; color: #475569; padding: 0.2rem 0.48rem; white-space: nowrap; }
        .ql-direction { color: #475569; font-size: 0.82rem; margin: 0.38rem 0 0.65rem; }
        .ql-pair-row { display: grid; grid-template-columns: minmax(42px, 1fr) 18px minmax(42px, 1fr) minmax(70px, 1fr) auto; gap: 0.25rem; align-items: center; border-top: 1px solid #F1F5F9; padding: 0.36rem 0; font-size: 0.76rem; color: #334155; }
        .ql-pair-arrow { color: #94A3B8; text-align: center; }
        .ql-pair-direction { color: #64748B; font-size: 0.7rem; }
        .ql-score-line { display: flex; justify-content: space-between; gap: 0.5rem; color: #64748B; font-size: 0.76rem; margin-top: 0.55rem; }
        .ql-score-line strong { font-size: 0.85rem; }
        .ql-meter { height: 5px; background: #F1F5F9; border-radius: 99px; overflow: hidden; margin-top: 0.35rem; }
        .ql-meter span { display: block; height: 100%; border-radius: 99px; }
        .ql-empty { border: 1px dashed #CBD5E1; padding: 1rem; color: #64748B; border-radius: 12px; }
        .ql-ao-summary { display: grid; grid-template-columns: 1fr; gap: 0.45rem; }
        .ql-ao-row { display: grid; grid-template-columns: minmax(125px, 1.2fr) minmax(90px, 2fr) 56px; gap: 0.65rem; align-items: center; font-size: 0.82rem; }
        .ql-ao-name { color: #334155; }
        .ql-ao-bar { height: 8px; background: #F1F5F9; border-radius: 99px; overflow: hidden; }
        .ql-ao-bar span { display: block; height: 100%; border-radius: 99px; }
        .ql-ao-row strong { text-align: right; font-variant-numeric: tabular-nums; }
        /* Energy ladder: retain click targets, but remove every drag/zoom cursor. */
        div[class*="st-key-quantumlens_energy_levels"] .nsewdrag,
        div[class*="st-key-quantumlens_energy_levels"] .ewdrag,
        div[class*="st-key-quantumlens_energy_levels"] .nsdrag,
        div[class*="st-key-quantumlens_energy_levels"] .drag { cursor: default !important; }
        div[class*="st-key-quantumlens_energy_levels"] .scatterlayer .trace .points path.point { cursor: pointer !important; }
        @media (max-width: 900px) { .ql-bond-grid { grid-template-columns: 1fr; } }
        </style>
        """,
        unsafe_allow_html=True,
    )

    st.title("⚛️ QuantumLens")
    st.caption("SMILES → 3D 구조 → Extended Hückel MO → 분자 오비탈 볼륨 시각화")

    with st.sidebar:
        st.header("분자 설정")
        with st.form("molecule_form", clear_on_submit=False):
            smiles_input = st.text_input(
                "SMILES", value=DEFAULT_SMILES,
                help="예: c1ccccc1 (벤젠), CCO (에탄올), O (물)",
            )
            optimize_geometry = st.checkbox("MMFF/UFF 구조 최적화 시도", value=True)
            calculate = st.form_submit_button("분자 계산", type="primary", use_container_width=True)

        st.divider()
        st.header("3D 표시 설정")
        display_mode_label = st.radio(
            "렌더링 방식",
            ["위상 + 진폭 볼륨", "전자 확률밀도 |Ψ|²"],
            index=0,
            help="위상 볼륨은 파랑/빨강으로 파동함수 부호를, 확률밀도는 |Ψ|²를 단일 색상 볼륨으로 표시합니다.",
        )
        display_mode = "density" if display_mode_label.startswith("전자") else "phase"
        opacity = st.slider(
            "볼륨 최대 불투명도", min_value=0.05, max_value=0.45, value=0.26, step=0.01,
            help="값이 클수록 구름이 진해집니다. 원자 가림을 줄이려면 0.12~0.22부터 조절해 보세요.",
        )
        threshold_percent = st.slider(
            "임계값 (최대 진폭 대비 %)", min_value=0.1, max_value=50.0,
            value=3.5, step=0.1, format="%.1f",
            help="낮추면 희미한 바깥 구름까지 보이고, 높이면 중심의 강한 영역 위주로 표시합니다.",
        )
        resolution = st.select_slider(
            "3D 격자 해상도", options=[28, 32, 36, 40, 44, 48, 52], value=40,
            help="높을수록 볼륨이 부드럽지만 브라우저 GPU 부담이 커집니다.",
        )
        if display_mode == "phase":
            st.caption("파랑: Ψ 양의 위상 · 빨강: Ψ 음의 위상 · 투명도: |Ψ|에 따라 증가")
        else:
            st.caption("단일 색상 구름: 전자 확률밀도 |Ψ|² · 위상 부호는 표시하지 않음")

    if calculate:
        try:
            with st.spinner("3D 구조와 EHT 분자 오비탈을 계산하고 있습니다…"):
                result = analyze_smiles_cached(smiles_input, optimize_geometry)
            st.session_state["quantumlens_analysis"] = result
            st.session_state["quantumlens_smiles"] = smiles_input.strip()
        except Exception as exc:
            st.error(f"계산 실패: {exc}")
            st.info(
                "팁: 벤젠 `c1ccccc1`, 에탄올 `CCO`, 물 `O`, 이산화탄소 `O=C=O`를 시험해 보세요. "
                "AO 근사 매핑은 지원 원소에 한정됩니다."
            )

    analysis = st.session_state.get("quantumlens_analysis")
    if analysis is None:
        st.info("왼쪽에서 SMILES를 입력하고 **분자 계산**을 누르세요. 기본 예제는 벤젠입니다.")
        with st.expander("모델 해석 및 한계", expanded=True):
            st.markdown(
                """
                - **에너지와 MO 계수:** RDKit Extended Hückel Theory(EHT)의 해밀토니안과 중첩 행렬을 사용합니다.
                - **위상 볼륨:** 빨강/파랑은 파동함수 Ψ의 부호이며 전하 부호가 아닙니다. 볼륨의 진하기는 |Ψ|에 기반한 시각적 강조입니다.
                - **확률밀도 모드:** |Ψ|²를 렌더링합니다. 이 값은 위상 부호를 포함하지 않습니다.
                - **AO 모양:** RDKit이 사용하는 정확한 AO 방사함수를 복제한 것이 아니라 STO-inspired 근사입니다.
                """
            )
        return

    symbols = analysis["symbols"]
    positions = np.asarray(analysis["positions"])
    energies = np.asarray(analysis["energies"])
    coefficients = np.asarray(analysis["coefficients"])
    num_electrons = int(analysis["num_electrons"])
    n_mos = len(energies)
    default_index = max(0, min(n_mos - 1, (num_electrons // 2 - 1) if num_electrons % 2 == 0 else num_electrons // 2))
    smiles_key = hashlib.md5(str(analysis["smiles"]).encode("utf-8")).hexdigest()[:8]
    selected_state_key = f"quantumlens_selected_mo_{smiles_key}"
    if selected_state_key not in st.session_state:
        st.session_state[selected_state_key] = default_index

    st.subheader(f"{analysis['formula']}  ·  {analysis['smiles']}")
    left_col, right_col = st.columns([1.9, 1.0], gap="large")

    # Render the energy selector on the right. A direct point click updates the
    # state and reruns before the selected orbital's volume is calculated.
    mo_index = max(0, min(n_mos - 1, int(st.session_state[selected_state_key])))
    with right_col:
        st.markdown("#### MO 에너지 준위")
        st.markdown('<div class="ql-section-note">준위 점을 한 번 클릭해 선택 · 드래그/확대/스크롤 비활성화</div>', unsafe_allow_html=True)
        energy_fig = build_mo_energy_diagram(energies, num_electrons, mo_index)
        energy_key = f"quantumlens_energy_levels_{smiles_key}"
        energy_event = st.plotly_chart(
            energy_fig,
            use_container_width=False,
            key=energy_key,
            on_select="rerun",
            selection_mode="points",
            config={
                "displaylogo": False,
                "displayModeBar": False,
                "scrollZoom": False,
                "doubleClick": False,
                "responsive": False,
                "showTips": False,
            },
            theme=None,
        )
        try:
            selected_points = energy_event.selection.points
        except Exception:
            try:
                selected_points = energy_event.get("selection", {}).get("points", [])
            except Exception:
                selected_points = []
        if selected_points:
            selected_point = selected_points[-1]
            customdata = selected_point.get("customdata")
            try:
                chosen_index = int(customdata[0]) if customdata is not None else int(selected_point["point_index"])
            except (TypeError, ValueError, KeyError, IndexError):
                chosen_index = mo_index
            if 0 <= chosen_index < n_mos and chosen_index != mo_index:
                st.session_state[selected_state_key] = chosen_index
                st.rerun()

        st.caption("파랑: 점유 MO · 회색: 비점유 MO · 주황: 선택 MO · ↑↓: 점유 전자")
        st.caption("HOMO/LUMO 라벨은 EHT 전자 수를 기준으로 한 단순 점유 모델입니다.")

    mo_index = max(0, min(n_mos - 1, int(st.session_state[selected_state_key])))
    try:
        with st.spinner("선택한 MO의 3D 볼륨을 계산하고 있습니다…"):
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
        fig = render_plotly(
            analysis, grid, opacity=opacity,
            threshold_fraction=threshold_percent / 100.0,
            display_mode=display_mode,
        )
    except Exception as exc:
        st.error(f"파동함수 렌더링 실패: {exc}")
        st.stop()

    with left_col:
        st.markdown("#### 3D 분자 오비탈")
        st.plotly_chart(
            fig, use_container_width=True,
            key=f"quantumlens_3d_mo_{smiles_key}_{mo_index}_{display_mode}",
            config={"scrollZoom": True, "displayModeBar": False, "displaylogo": False, "responsive": True},
            theme=None,
        )
        metric_cols = st.columns(3)
        metric_cols[0].metric("선택 MO", orbital_label(mo_index, num_electrons))
        metric_cols[1].metric("에너지", f"{energies[mo_index]:.3f} eV")
        metric_cols[2].metric("점유", f"{orbital_occupancy(mo_index, num_electrons)} / 2 e⁻")
        max_amplitude = float(grid[4][2])
        st.caption(
            f"격자 {resolution}³ · 임계 진폭 {threshold_percent:.1f}% · 최대 |Ψ| ≈ {max_amplitude:.4g} · "
            f"RDKit {analysis['rdkit_version']}"
        )

    for warning in analysis["warnings"]:
        st.warning(warning)

    st.divider()
    st.header("선택한 MO는 어떤 원자 오비탈로 결합하는가?")
    st.markdown(
        "선택한 MO에서 실제 결합 원자쌍 사이의 AO 중첩 항을 분해했어. "
        "각 카드의 좌우는 결합 양쪽 원자, 가운데는 가장 큰 AO 쌍이며, σ/π 방향 표시는 결합축에 대한 p 오비탈 방향 투영을 바탕으로 한 근사야."
    )

    coeff_vector = coefficients[:, mo_index]
    ao_populations = mulliken_ao_contributions(coeff_vector, np.asarray(analysis["overlap"], dtype=float))
    st.markdown("**① 이 MO를 주로 구성하는 원자 오비탈**")
    st.markdown(render_ao_contribution_cards(analysis, coeff_vector), unsafe_allow_html=True)
    st.caption(
        "막대는 선택한 MO의 Mulliken AO 기여도(부호 포함)를 크기순으로 나타낸 거야. "
        "이 값은 전자 확률이 아니라 비직교 AO 기저의 겹침을 배분한 지표야."
    )

    st.markdown("**② 실제 결합 원자쌍에서 겹치는 AO 방향**")
    interactions = bond_ao_interactions(analysis, coeff_vector, max_bonds=8, max_pairs_per_bond=3)
    if interactions:
        st.markdown(render_bond_interaction_cards(interactions), unsafe_allow_html=True)
        st.caption(
            "겹침 지표는 이 MO에 대한 Mulliken 원자쌍 겹침 population의 분해값이며, 통상적인 결합차수나 결합 에너지와 같지 않아. "
            "양수/음수는 해당 MO에서의 결합성/반결합성 경향을 나타내는 참고 지표야."
        )
    else:
        st.info(
            "이 MO에서는 특정 원자쌍 사이의 뚜렷한 결합성 겹침이 나타나지 않아. "
            "비공유 전자쌍처럼 한 원자에 국소화된 비결합성 오비탈일 수 있어. "
            "위의 주요 AO 구성에서 어느 원자의 어떤 오비탈이 중심인지 확인해 봐."
        )

    with st.expander("AO 기여도 수치표 (참고)", expanded=False):
        ao_order = np.argsort(np.abs(ao_populations))[::-1][: min(30, len(ao_populations))]
        ao_rows = []
        atom_populations: dict[int, float] = {}
        for ao_i, atom_i in enumerate(analysis["ao_atom_indices"]):
            atom_populations[int(atom_i)] = atom_populations.get(int(atom_i), 0.0) + float(ao_populations[ao_i])
        for ao_i in ao_order:
            ao_rows.append({
                "원자 오비탈": analysis["ao_labels"][int(ao_i)],
                "MO 계수 cᵢ": float(coeff_vector[int(ao_i)]),
                "Mulliken 기여도 (%)": float(100.0 * ao_populations[int(ao_i)]),
            })
        st.dataframe(ao_rows, use_container_width=True, hide_index=True)

        st.markdown("**원자별 총 Mulliken 기여도**")
        atom_rows = [
            {"원자": f"{atom_i + 1}번 {symbols[atom_i]}", "Mulliken 기여도 (%)": 100.0 * population}
            for atom_i, population in sorted(atom_populations.items(), key=lambda pair: abs(pair[1]), reverse=True)
        ]
        st.dataframe(atom_rows, use_container_width=True, hide_index=True)
        st.metric("AO 기여도 합계", f"{100.0 * float(ao_populations.sum()):.2f}%")
        st.caption(
            "Mulliken AO 값은 비직교 기저의 중첩 행렬 S를 반영한 qᵢ = cᵢ(SC)ᵢ야. "
            "합은 100%지만 개별 값은 음수일 수 있어 확률과 같지 않아. AO 이름은 EHT 내부의 공개 AO 라벨이 아니라 "
            "원자별 s, px, py, pz 순서를 가정한 정성적 표기이며 sp³ 혼성 오비탈 기여도를 직접 뜻하지 않아."
        )

    with st.expander("계산 정보 및 전체 MO 에너지 목록", expanded=False):
        col_a, col_b = st.columns(2)
        with col_a:
            st.markdown("**구조 및 계산 정보**")
            st.write(f"SMILES: `{analysis['smiles']}`")
            st.write(f"분자식: `{analysis['formula']}`")
            st.write(f"원자 수(수소 포함): {len(symbols)}")
            st.write(f"EHT AO/MO 개수: {len(analysis['ao_labels'])}")
            st.write(f"EHT Fermi 에너지: {analysis['fermi_energy']:.3f} eV")
            st.write(f"EHT 전체 에너지: {analysis['total_energy']:.3f} eV")
        with col_b:
            rows = [
                {
                    "MO": idx + 1,
                    "라벨": orbital_label(idx, num_electrons),
                    "에너지 (eV)": float(energy),
                    "점유 (모델)": orbital_occupancy(idx, num_electrons),
                    "선택": "◀" if idx == mo_index else "",
                }
                for idx, energy in enumerate(energies)
            ]
            st.dataframe(rows, use_container_width=True, hide_index=True, height=380)

    st.caption(
        "과학적 한계: 에너지는 RDKit EHT 결과지만, 3D AO 방사함수와 AO 순서는 시각화용 STO 근사/관례를 사용해. "
        "특히 비선형 분자에서 σ/π 구분은 전체 점군 대칭 분석이 아닌 결합축 투영 휴리스틱이므로 'σ형/π형 방향 성분'으로 해석해 줘."
    )


if __name__ == "__main__":
    main()

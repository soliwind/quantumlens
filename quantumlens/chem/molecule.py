"""Molecule container and geometry construction (SMILES, files, explicit coordinates)."""

from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np
from rdkit import Chem, RDLogger
from rdkit.Chem import AllChem, rdDetermineBonds, rdMolDescriptors

from ..eht.params import ELEMENTS

RDLogger.DisableLog("rdApp.*")

MAX_ATOMS = 48

ATOMIC_MASS = {
    "H": 1.008, "He": 4.003, "Li": 6.94, "Be": 9.012, "B": 10.81, "C": 12.011,
    "N": 14.007, "O": 15.999, "F": 18.998, "Na": 22.99, "Mg": 24.305, "Si": 28.085,
    "P": 30.974, "S": 32.06, "Cl": 35.45, "Br": 79.904, "I": 126.904,
}


@dataclass(frozen=True)
class Bond:
    i: int
    j: int
    order: float          # 1, 1.5 (aromatic), 2, 3
    aromatic: bool = False


@dataclass
class Molecule:
    symbols: tuple[str, ...]
    positions: np.ndarray                 # Å, (n, 3)
    bonds: tuple[Bond, ...]
    charge: int = 0
    name: str = ""
    formula: str = ""
    smiles: str = ""
    source: str = ""
    warnings: list[str] = field(default_factory=list)

    @property
    def n_atoms(self) -> int:
        return len(self.symbols)

    def cache_key(self) -> str:
        coords = np.round(self.positions, 5).tobytes().hex()
        return f"{','.join(self.symbols)}|{self.charge}|{coords}"


class MoleculeError(ValueError):
    pass


# ---------------------------------------------------------------------------
# Validation and orientation
# ---------------------------------------------------------------------------
def _check_supported(symbols: tuple[str, ...]) -> None:
    bad = sorted({s for s in symbols if s not in ELEMENTS})
    if bad:
        allowed = ", ".join(ELEMENTS)
        raise MoleculeError(
            f"지원하지 않는 원소가 있습니다: {', '.join(bad)}. 사용할 수 있는 원소는 {allowed}입니다."
        )
    if len(symbols) > MAX_ATOMS:
        raise MoleculeError(f"원자 수가 {len(symbols)}개입니다. 수소를 포함해 {MAX_ATOMS}개 이하의 분자만 계산할 수 있습니다.")


def standard_orientation(symbols: tuple[str, ...], positions: np.ndarray) -> np.ndarray:
    """Center on the center of mass and rotate to a textbook-friendly frame.

    - linear molecules lie on the z axis (so π orbitals are px/py),
    - planar molecules lie in the xy plane (so π orbitals are pz),
    - otherwise the principal axis with the largest moment of inertia is z.
    """
    pos = np.asarray(positions, dtype=float)
    if len(pos) == 1:
        return pos - pos
    masses = np.array([ATOMIC_MASS.get(s, 12.0) for s in symbols])
    com = (masses[:, None] * pos).sum(axis=0) / masses.sum()
    pos = pos - com
    inertia = np.zeros((3, 3))
    for m, r in zip(masses, pos):
        inertia += m * (np.dot(r, r) * np.eye(3) - np.outer(r, r))
    moments, axes = np.linalg.eigh(inertia)   # ascending moments
    if moments[0] < 1e-3 * max(moments[2], 1e-9):
        # linear: smallest-moment axis → z
        frame = np.column_stack([axes[:, 1], axes[:, 2], axes[:, 0]])
    else:
        # largest moment (plane normal for planar molecules) → z, smallest → x
        frame = np.column_stack([axes[:, 0], axes[:, 1], axes[:, 2]])
    if np.linalg.det(frame) < 0:
        frame[:, 1] *= -1
    out = pos @ frame
    out[np.abs(out) < 1e-6] = 0.0
    return out


def _molecule_from_rdkit(mol: Chem.Mol, *, name: str, source: str, smiles: str = "", warnings: list[str] | None = None) -> Molecule:
    symbols = tuple(a.GetSymbol() for a in mol.GetAtoms())
    _check_supported(symbols)
    positions = np.asarray(mol.GetConformer().GetPositions(), dtype=float)
    bonds = tuple(
        Bond(b.GetBeginAtomIdx(), b.GetEndAtomIdx(), 1.5 if b.GetIsAromatic() else b.GetBondTypeAsDouble(), b.GetIsAromatic())
        for b in mol.GetBonds()
    )
    return Molecule(
        symbols=symbols,
        positions=standard_orientation(symbols, positions),
        bonds=bonds,
        charge=Chem.GetFormalCharge(mol),
        name=name,
        formula=rdMolDescriptors.CalcMolFormula(mol),
        smiles=smiles or Chem.MolToSmiles(Chem.RemoveHs(mol)),
        source=source,
        warnings=warnings or [],
    )


def _embed(mol: Chem.Mol) -> list[str]:
    warnings: list[str] = []
    params = AllChem.ETKDGv3()
    params.randomSeed = 0xF00D
    if AllChem.EmbedMolecule(mol, params) != 0:
        params.useRandomCoords = True
        if AllChem.EmbedMolecule(mol, params) != 0:
            raise MoleculeError("3D 구조를 만들지 못했습니다. 다른 표기를 시도해 주세요.")
    try:
        if AllChem.MMFFHasAllMoleculeParams(mol):
            AllChem.MMFFOptimizeMolecule(mol, maxIters=2000)
        elif AllChem.UFFHasAllMoleculeParams(mol):
            AllChem.UFFOptimizeMolecule(mol, maxIters=2000)
        else:
            warnings.append("힘장 매개변수가 없어 구조 최적화 없이 초기 3D 좌표를 사용했습니다.")
    except Exception:  # force-field edge cases
        warnings.append("구조 최적화에 실패해 초기 3D 좌표를 사용했습니다.")
    return warnings


# ---------------------------------------------------------------------------
# Constructors
# ---------------------------------------------------------------------------
def from_smiles(smiles: str, name: str = "", source: str = "SMILES") -> Molecule:
    smiles = (smiles or "").strip()
    if not smiles:
        raise MoleculeError("SMILES를 입력해 주세요.")
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        raise MoleculeError("SMILES를 해석하지 못했습니다. 괄호, 고리 번호, 원자가를 확인해 주세요.")
    _check_supported(tuple(a.GetSymbol() for a in mol.GetAtoms()))
    mol = Chem.AddHs(mol)
    _check_supported(tuple(a.GetSymbol() for a in mol.GetAtoms()))
    warnings = _embed(mol)
    return _molecule_from_rdkit(mol, name=name, source=source, smiles=smiles, warnings=warnings)


def from_coordinates(
    symbols: list[str] | tuple[str, ...],
    positions: list[list[float]] | np.ndarray,
    bonds: list[tuple[int, int, float]],
    *,
    charge: int = 0,
    name: str = "",
    formula: str = "",
    source: str = "",
) -> Molecule:
    symbols = tuple(symbols)
    _check_supported(symbols)
    pos = np.asarray(positions, dtype=float)
    return Molecule(
        symbols=symbols,
        positions=standard_orientation(symbols, pos),
        bonds=tuple(Bond(i, j, float(o)) for i, j, o in bonds),
        charge=charge,
        name=name,
        formula=formula or _formula(symbols, charge),
        source=source,
    )


def diatomic(a: str, b: str, distance: float, order: float, *, charge: int = 0, name: str = "") -> Molecule:
    return from_coordinates(
        (a, b), [[0, 0, -distance / 2], [0, 0, distance / 2]], [(0, 1, order)] if order > 0 else [],
        charge=charge, name=name, source="실험 결합 길이",
    )


def from_xyz(text: str, charge: int = 0, name: str = "") -> Molecule:
    mol = Chem.MolFromXYZBlock(text)
    if mol is None:
        raise MoleculeError("XYZ 파일을 읽지 못했습니다. 첫 줄은 원자 수, 둘째 줄은 주석이어야 합니다.")
    _check_supported(tuple(a.GetSymbol() for a in mol.GetAtoms()))
    try:
        rdDetermineBonds.DetermineBonds(mol, charge=charge)
    except Exception:
        rdDetermineBonds.DetermineConnectivity(mol)
    m = _molecule_from_rdkit(mol, name=name, source="XYZ 파일", smiles="-")
    m.charge = charge
    return m


def from_molblock(text: str, name: str = "", source: str = "MOL/SDF 파일") -> Molecule:
    mol = Chem.MolFromMolBlock(text, removeHs=False)
    if mol is None:
        raise MoleculeError("MOL/SDF 파일을 읽지 못했습니다.")
    if mol.GetNumConformers() == 0 or not mol.GetConformer().Is3D():
        mol = Chem.AddHs(mol)
        warnings = _embed(mol)
    else:
        warnings = []
        if any(a.GetTotalNumHs() > 0 for a in mol.GetAtoms()):
            mol = Chem.AddHs(mol, addCoords=True)
    return _molecule_from_rdkit(mol, name=name, source=source, warnings=warnings)


def _formula(symbols: tuple[str, ...], charge: int) -> str:
    counts: dict[str, int] = {}
    for s in symbols:
        counts[s] = counts.get(s, 0) + 1
    if "C" in counts:
        order = ["C"] + (["H"] if "H" in counts else []) + sorted(k for k in counts if k not in ("C", "H"))
    else:
        order = sorted(counts)
    text = "".join(f"{s}{counts[s] if counts[s] > 1 else ''}" for s in order)
    if charge:
        text += ("+" if charge > 0 else "-") if abs(charge) == 1 else f"{abs(charge)}{'+' if charge > 0 else '-'}"
    return text

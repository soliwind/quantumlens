"""Chemical interpretation of individual MOs.

Everything here is a transparent heuristic on top of EHT coefficients:
- Mulliken AO / atom populations,
- per-bond overlap populations (bonding / antibonding),
- σ / π by the molecule's geometry (linear axis or molecular plane),
- g / u parity under inversion for centrosymmetric molecules.
"""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from ..chem.molecule import Molecule
from ..eht.solver import EHTResult

LINEAR_TOL = 1e-3   # Å
PLANAR_TOL = 1e-2   # Å


# ---------------------------------------------------------------------------
# Geometry classification
# ---------------------------------------------------------------------------
def geometry_class(mol: Molecule) -> str:
    """'atom' | 'linear' | 'planar' | 'other' (molecule is in standard orientation)."""
    pos = mol.positions
    if len(pos) == 1:
        return "atom"
    if np.all(np.abs(pos[:, :2]) < LINEAR_TOL):
        return "linear"
    if np.all(np.abs(pos[:, 2]) < PLANAR_TOL):
        return "planar"
    return "other"


def inversion_map(mol: Molecule, tol: float = 2e-2) -> list[int] | None:
    """Atom permutation under r → −r, or None if the molecule has no inversion center."""
    pos = mol.positions
    mapping: list[int] = []
    for i, r in enumerate(pos):
        d = np.linalg.norm(pos + r, axis=1)
        j = int(np.argmin(d))
        if d[j] > tol or mol.symbols[j] != mol.symbols[i]:
            return None
        mapping.append(j)
    return mapping


# ---------------------------------------------------------------------------
# Populations
# ---------------------------------------------------------------------------
def ao_populations(res: EHTResult, k: int) -> np.ndarray:
    c = res.coefficients[:, k]
    return c * (res.overlap @ c)


def atom_populations(res: EHTResult, k: int) -> np.ndarray:
    q = ao_populations(res, k)
    out = np.zeros(len(res.symbols))
    for idx, ao in enumerate(res.basis):
        out[ao.atom] += q[idx]
    return out


def bond_overlap_populations(res: EHTResult, mol: Molecule, k: int) -> list[tuple[int, int, float]]:
    """2 Σ c_μ S_μν c_ν over AO pairs of each bonded atom pair (per electron)."""
    c = res.coefficients[:, k]
    atom_of = np.array([ao.atom for ao in res.basis])
    out = []
    for b in mol.bonds:
        ia = np.flatnonzero(atom_of == b.i)
        ib = np.flatnonzero(atom_of == b.j)
        val = 2.0 * float(c[ia] @ res.overlap[np.ix_(ia, ib)] @ c[ib])
        out.append((b.i, b.j, val))
    return out


def all_pairs_overlap_population(res: EHTResult, k: int) -> float:
    """Total inter-atomic overlap population of MO k (bonded and non-bonded pairs)."""
    c = res.coefficients[:, k]
    atom_of = np.array([ao.atom for ao in res.basis])
    different = atom_of[:, None] != atom_of[None, :]
    return float(np.sum((c[:, None] * res.overlap * c[None, :])[different]))


# ---------------------------------------------------------------------------
# Labels
# ---------------------------------------------------------------------------
@dataclass(frozen=True)
class OrbitalCharacter:
    symmetry: str        # "σ" | "π" | ""
    bonding: str         # "bonding" | "antibonding" | "nonbonding"
    parity: str          # "g" | "u" | ""
    shell: str           # e.g. "2p" for diatomics, else ""
    overlap_population: float

    @property
    def text(self) -> str:
        """Plain-text label, e.g. 'π*2p', 'σ', 'n'. Empty when no σ/π label applies."""
        if self.bonding == "nonbonding":
            return "n"
        if not self.symmetry:
            return ""
        return self.symmetry + ("*" if self.bonding == "antibonding" else "") + self.shell

    @property
    def main(self) -> str:
        """Symbol without the shell subscript ('π*', 'σ', 'n', '')."""
        if self.bonding == "nonbonding":
            return "n"
        if not self.symmetry:
            return ""
        return self.symmetry + ("*" if self.bonding == "antibonding" else "")

    @property
    def bonding_ko(self) -> str:
        return {"bonding": "결합성", "antibonding": "반결합성", "nonbonding": "비결합성"}[self.bonding]


NONBONDING_THRESHOLD = 0.05


def classify(res: EHTResult, mol: Molecule, k: int) -> OrbitalCharacter:
    q = ao_populations(res, k)
    geo = geometry_class(mol)

    symmetry = ""
    if geo in ("linear", "planar"):
        if geo == "linear":
            pi_weight = sum(q[i] for i, ao in enumerate(res.basis) if ao.m in ("x", "y"))
        else:
            pi_weight = sum(q[i] for i, ao in enumerate(res.basis) if ao.m == "z")
        symmetry = "π" if pi_weight > 0.5 else "σ"
    elif geo == "atom":
        symmetry = ""

    parity = ""
    if geo == "linear" and mol.n_atoms > 1:
        mapping = inversion_map(mol)
        if mapping is not None:
            parity = _parity(res, mapping, k)

    overlap = all_pairs_overlap_population(res, k)
    homonuclear_diatomic = mol.n_atoms == 2 and mol.symbols[0] == mol.symbols[1]
    if homonuclear_diatomic and parity and symmetry:
        # Textbook convention: σg, πu bonding; σu, πg antibonding.
        bonding = "bonding" if (symmetry, parity) in (("σ", "g"), ("π", "u")) else "antibonding"
    elif overlap > NONBONDING_THRESHOLD:
        bonding = "bonding"
    elif overlap < -NONBONDING_THRESHOLD:
        bonding = "antibonding"
    else:
        bonding = "nonbonding"

    return OrbitalCharacter(symmetry, bonding, parity, "", overlap)


def assign_diatomic_shells(res: EHTResult, mol: Molecule, characters: list[OrbitalCharacter]) -> list[OrbitalCharacter]:
    """Textbook shell labels for homonuclear diatomics.

    With s–p mixing the AO weights are not a reliable guide, so we follow the
    textbook sequence instead: within each (σ/π, g/u) class the lowest orbital
    comes from ns and the next from np; π orbitals always come from np.
    """
    if not (mol.n_atoms == 2 and mol.symbols[0] == mol.symbols[1]):
        return characters
    n = res.basis[0].n
    has_p = any(ao.l == 1 for ao in res.basis)
    seen: dict[tuple[str, str], int] = {}
    out = []
    for k, ch in enumerate(characters):
        if not ch.symmetry:
            out.append(ch)
            continue
        cls = (ch.symmetry, ch.parity)
        rank = seen.get(cls, 0)
        # count degenerate π partners once
        group = next(g for g in res.degenerate_groups if k in g)
        if k == group[0]:
            seen[cls] = rank + 1
        else:
            rank = max(0, rank - 1)
        if ch.symmetry == "π" or (has_p and rank >= 1):
            shell = f"{n}p"
        else:
            shell = f"{n}s"
        out.append(OrbitalCharacter(ch.symmetry, ch.bonding, ch.parity, shell, ch.overlap_population))
    return out


def _parity(res: EHTResult, mapping: list[int], k: int) -> str:
    c = res.coefficients[:, k]
    index = {(ao.atom, ao.l, ao.m): i for i, ao in enumerate(res.basis)}
    transformed = np.zeros_like(c)
    for i, ao in enumerate(res.basis):
        j = index[(mapping[ao.atom], ao.l, ao.m)]
        transformed[j] = c[i] * (1.0 if ao.l == 0 else -1.0)
    overlap = float(transformed @ res.overlap @ c)
    if overlap > 0.9:
        return "g"
    if overlap < -0.9:
        return "u"
    return ""


def tidy_degenerate(res: EHTResult, mol: Molecule) -> None:
    """Rotate degenerate MO pairs so that linear-molecule π pairs align with x and y.

    Any orthogonal rotation inside a degenerate set is an equally valid solution;
    aligned pairs are easier to read (one lobe pair in the xz plane, one in yz).
    Operates in place on ``res.coefficients``.
    """
    geo = geometry_class(mol)
    if geo != "linear":
        return
    x_aos = np.array([ao.m == "x" for ao in res.basis], dtype=float)
    for group in res.degenerate_groups:
        if len(group) != 2:
            continue
        Cg = res.coefficients[:, group]
        SC = res.overlap @ Cg
        A = Cg.T @ (x_aos[:, None] * SC)
        A = 0.5 * (A + A.T)
        _, vecs = np.linalg.eigh(A)
        rotated = Cg @ vecs[:, ::-1]
        for col in range(rotated.shape[1]):
            pivot = int(np.argmax(np.abs(rotated[:, col])))
            if rotated[pivot, col] < 0:
                rotated[:, col] *= -1
        res.coefficients[:, group] = rotated


def bond_order_mo(res: EHTResult, characters: list[OrbitalCharacter]) -> float | None:
    """(bonding − antibonding electrons) / 2, for diatomics only."""
    total = 0.0
    for k, ch in enumerate(characters):
        occ = res.occupations[k]
        if occ == 0:
            continue
        if ch.bonding == "bonding":
            total += occ
        elif ch.bonding == "antibonding":
            total -= occ
    return total / 2.0

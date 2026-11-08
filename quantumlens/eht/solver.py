"""Extended Hückel calculation: H C = S C E."""

from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np
from scipy.linalg import eigh

from .basis import AO, build_basis
from .integrals import overlap_matrix
from .params import ANGSTROM_TO_BOHR, ELEMENTS, K_WH

DEGENERACY_TOL_EV = 1e-3


@dataclass
class EHTResult:
    symbols: tuple[str, ...]
    positions_bohr: np.ndarray       # (n_atoms, 3)
    basis: list[AO]
    overlap: np.ndarray              # S
    hamiltonian: np.ndarray          # H (eV)
    energies: np.ndarray             # ascending (eV)
    coefficients: np.ndarray         # columns are MOs, Cᵀ S C = 1
    occupations: np.ndarray          # electrons per MO (0, 1 or 2)
    n_electrons: int
    charge: int
    degenerate_groups: list[list[int]] = field(default_factory=list)

    @property
    def n_mo(self) -> int:
        return len(self.energies)

    @property
    def homo(self) -> int | None:
        occ = np.flatnonzero(self.occupations > 0)
        return int(occ[-1]) if occ.size else None

    @property
    def lumo(self) -> int | None:
        empty = np.flatnonzero(self.occupations == 0)
        return int(empty[0]) if empty.size else None

    @property
    def unpaired_electrons(self) -> int:
        return int(np.sum(self.occupations == 1))

    @property
    def total_energy(self) -> float:
        return float(np.dot(self.occupations, self.energies))


def hamiltonian_matrix(basis: list[AO], S: np.ndarray, k: float = K_WH) -> np.ndarray:
    """Weighted Wolfsberg–Helmholz formula (YAeHMOP default).

    H_ij = K' S_ij (H_ii + H_jj) / 2,  K' = K + Δ² + Δ⁴ (1 − K),
    Δ = (H_ii − H_jj) / (H_ii + H_jj)
    """
    hii = np.array([ao.hii for ao in basis])
    hi, hj = np.meshgrid(hii, hii, indexing="ij")
    delta = (hi - hj) / (hi + hj)
    k_eff = k + delta**2 + delta**4 * (1.0 - k)
    H = k_eff * S * 0.5 * (hi + hj)
    np.fill_diagonal(H, hii)
    return H


def group_degenerate(energies: np.ndarray, tol: float = DEGENERACY_TOL_EV) -> list[list[int]]:
    groups: list[list[int]] = []
    for idx, e in enumerate(energies):
        if groups and abs(e - energies[groups[-1][0]]) <= tol:
            groups[-1].append(idx)
        else:
            groups.append([idx])
    return groups


def aufbau_occupations(groups: list[list[int]], n_mo: int, n_electrons: int) -> np.ndarray:
    """Fill degenerate groups in energy order; a partly filled group follows Hund's rule."""
    occ = np.zeros(n_mo)
    remaining = n_electrons
    for group in groups:
        if remaining <= 0:
            break
        capacity = 2 * len(group)
        if remaining >= capacity:
            occ[group] = 2
            remaining -= capacity
            continue
        # Hund: one electron in each orbital first, then pair up.
        singles = min(remaining, len(group))
        for idx in group[:singles]:
            occ[idx] = 1
        remaining -= singles
        for idx in group:
            if remaining <= 0:
                break
            occ[idx] += 1
            remaining -= 1
        remaining = 0
    return occ


def fix_phase(C: np.ndarray) -> np.ndarray:
    """Deterministic MO sign: the largest-|c| coefficient is made positive."""
    C = C.copy()
    for k in range(C.shape[1]):
        col = C[:, k]
        pivot = int(np.argmax(np.abs(col) + 1e-9 * np.arange(col.size)[::-1]))
        if col[pivot] < 0:
            C[:, k] = -col
    return C


def run_eht(symbols: list[str] | tuple[str, ...], positions_angstrom: np.ndarray, charge: int = 0) -> EHTResult:
    symbols = tuple(symbols)
    unsupported = sorted({s for s in symbols if s not in ELEMENTS})
    if unsupported:
        raise ValueError(f"지원하지 않는 원소가 있습니다: {', '.join(unsupported)}")
    positions_bohr = np.asarray(positions_angstrom, dtype=float) * ANGSTROM_TO_BOHR
    basis = build_basis(symbols)
    S = overlap_matrix(basis, positions_bohr)
    H = hamiltonian_matrix(basis, S)

    n_electrons = sum(ELEMENTS[s].valence_electrons for s in symbols) - int(charge)
    if n_electrons < 0:
        raise ValueError("전하가 너무 커서 원자가 전자 수가 음수가 됩니다.")
    if n_electrons > 2 * len(basis):
        raise ValueError("전자 수가 원자가 오비탈이 수용할 수 있는 수보다 많습니다.")

    try:
        energies, C = eigh(H, S)
    except np.linalg.LinAlgError as exc:
        raise ValueError("중첩 행렬이 양의 정부호가 아닙니다. 원자 간 거리가 너무 가깝지 않은지 확인해 주세요.") from exc

    C = fix_phase(C)
    groups = group_degenerate(energies)
    occ = aufbau_occupations(groups, len(energies), n_electrons)
    return EHTResult(
        symbols=symbols,
        positions_bohr=positions_bohr,
        basis=basis,
        overlap=S,
        hamiltonian=H,
        energies=energies,
        coefficients=C,
        occupations=occ,
        n_electrons=n_electrons,
        charge=int(charge),
        degenerate_groups=groups,
    )

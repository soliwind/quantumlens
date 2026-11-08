"""Slater-type valence basis: construction and real-space evaluation."""

from __future__ import annotations

import math
from dataclasses import dataclass

import numpy as np

from .params import ELEMENTS

# Per-atom AO order (matches RDKit/YAeHMOP): s, px, py, pz
P_COMPONENTS = ("x", "y", "z")
_P_AXIS = {"x": 0, "y": 1, "z": 2}


@dataclass(frozen=True)
class AO:
    atom: int          # atom index
    symbol: str
    n: int
    l: int             # 0 = s, 1 = p
    m: str             # "" for s, "x"/"y"/"z" for p
    zeta: float        # bohr⁻¹
    hii: float         # eV

    @property
    def name(self) -> str:
        """Short orbital name, e.g. '2s', '2pz'."""
        return f"{self.n}s" if self.l == 0 else f"{self.n}p{self.m}"


def build_basis(symbols: list[str] | tuple[str, ...]) -> list[AO]:
    basis: list[AO] = []
    for atom_idx, symbol in enumerate(symbols):
        element = ELEMENTS[symbol]
        for shell in element.shells:
            if shell.l == 0:
                basis.append(AO(atom_idx, symbol, shell.n, 0, "", shell.zeta, shell.hii))
            else:
                for m in P_COMPONENTS:
                    basis.append(AO(atom_idx, symbol, shell.n, 1, m, shell.zeta, shell.hii))
    return basis


def radial_norm(n: int, zeta: float) -> float:
    """Normalization of r^(n-1) e^(-ζr) so that ∫ R² r² dr = 1."""
    return (2.0 * zeta) ** (n + 0.5) / math.sqrt(math.factorial(2 * n))


Y_S = 1.0 / math.sqrt(4.0 * math.pi)
Y_P = math.sqrt(3.0 / (4.0 * math.pi))


def evaluate_atom_aos(
    aos: list[tuple[int, AO]],
    center_bohr: np.ndarray,
    points_bohr: tuple[np.ndarray, np.ndarray, np.ndarray],
    coefficients: np.ndarray,
    out: np.ndarray,
) -> None:
    """Accumulate Σ c_μ χ_μ(r) for all AOs of one atom into ``out`` (in place).

    ``aos`` is a list of (global AO index, AO) all centered on ``center_bohr``.
    Distances are shared between the s and p functions of the atom.
    """
    dx = points_bohr[0] - center_bohr[0]
    dy = points_bohr[1] - center_bohr[1]
    dz = points_bohr[2] - center_bohr[2]
    r = np.sqrt(dx * dx + dy * dy + dz * dz)
    deltas = (dx, dy, dz)
    cache: dict[tuple[int, float], np.ndarray] = {}
    for idx, ao in aos:
        c = float(coefficients[idx])
        if abs(c) < 1e-8:
            continue
        key = (ao.n, ao.zeta)
        if key not in cache:
            # e^{-ζr} r^{n-2}; for 1s the r^{-1} is multiplied back below.
            cache[key] = np.exp(-ao.zeta * r) * np.power(np.maximum(r, 1e-12), ao.n - 2)
        base = cache[key]
        norm = radial_norm(ao.n, ao.zeta)
        if ao.l == 0:
            out += (c * norm * Y_S) * base * r
        else:
            out += (c * norm * Y_P) * base * deltas[_P_AXIS[ao.m]]

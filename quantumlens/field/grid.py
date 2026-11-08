"""Real-space wavefunction on 3D grids and 2D slices (atomic units internally)."""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from ..eht.basis import evaluate_atom_aos
from ..eht.params import ANGSTROM_TO_BOHR
from ..eht.solver import EHTResult

QUALITY_SPACING_BOHR = {"draft": 0.36, "normal": 0.26, "high": 0.18}
MAX_POINTS = 2_400_000


@dataclass(frozen=True)
class Grid:
    origin: np.ndarray       # bohr, (3,)
    spacing: float           # bohr
    shape: tuple[int, int, int]
    values: np.ndarray       # Ψ in bohr^(-3/2), shape == shape

    @property
    def axes(self) -> list[np.ndarray]:
        return [self.origin[k] + self.spacing * np.arange(self.shape[k]) for k in range(3)]


def padding_bohr(res: EHTResult) -> float:
    """Box padding large enough for the most diffuse AO in the molecule."""
    zeta_min = min(ao.zeta for ao in res.basis)
    return float(np.clip(2.5 + 5.0 / zeta_min, 5.0, 11.0))


def _psi_on_points(res: EHTResult, k: int, points: tuple[np.ndarray, np.ndarray, np.ndarray]) -> np.ndarray:
    coeffs = res.coefficients[:, k]
    out = np.zeros(points[0].shape, dtype=np.float64)
    by_atom: dict[int, list] = {}
    for idx, ao in enumerate(res.basis):
        by_atom.setdefault(ao.atom, []).append((idx, ao))
    for atom, aos in by_atom.items():
        evaluate_atom_aos(aos, res.positions_bohr[atom], points, coeffs, out)
    return out


def compute_grid(res: EHTResult, k: int, quality: str = "normal") -> Grid:
    spacing = QUALITY_SPACING_BOHR[quality]
    pad = padding_bohr(res)
    lo = res.positions_bohr.min(axis=0) - pad
    hi = res.positions_bohr.max(axis=0) + pad
    shape = np.ceil((hi - lo) / spacing).astype(int) + 1
    while int(np.prod(shape)) > MAX_POINTS:
        spacing *= 1.12
        shape = np.ceil((hi - lo) / spacing).astype(int) + 1
    axes = [lo[d] + spacing * np.arange(shape[d]) for d in range(3)]
    X, Y, Z = np.meshgrid(*axes, indexing="ij", sparse=False)
    values = _psi_on_points(res, k, (X, Y, Z)).astype(np.float32)
    return Grid(origin=lo, spacing=float(spacing), shape=tuple(int(s) for s in shape), values=values)


PLANES = {"xy": (0, 1, 2), "xz": (0, 2, 1), "yz": (1, 2, 0)}


def compute_slice(
    res: EHTResult, k: int, plane: str = "xy", offset_angstrom: float = 0.0, n: int = 220
) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Ψ on a plane. Returns (u axis Å, v axis Å, values[v, u])."""
    a, b, c = PLANES[plane]
    pad = padding_bohr(res) * 0.8
    lo = res.positions_bohr.min(axis=0) - pad
    hi = res.positions_bohr.max(axis=0) + pad
    half = 0.5 * max(hi[a] - lo[a], hi[b] - lo[b])
    mid_a, mid_b = 0.5 * (hi[a] + lo[a]), 0.5 * (hi[b] + lo[b])
    u = np.linspace(mid_a - half, mid_a + half, n)
    v = np.linspace(mid_b - half, mid_b + half, n)
    U, V = np.meshgrid(u, v, indexing="xy")
    coords = [None, None, None]
    coords[a], coords[b] = U, V
    coords[c] = np.full_like(U, offset_angstrom * ANGSTROM_TO_BOHR)
    values = _psi_on_points(res, k, (coords[0], coords[1], coords[2]))
    return u / ANGSTROM_TO_BOHR, v / ANGSTROM_TO_BOHR, values

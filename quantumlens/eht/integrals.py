"""Two-center overlap integrals between Slater-type s/p orbitals.

Integrals are evaluated in the local diatomic frame (A → B along +z) using
prolate spheroidal coordinates (ξ, η, φ):

    r_A = R/2 (ξ + η),   r_B = R/2 (ξ − η),   dV = (R/2)³ (ξ² − η²) dξ dη dφ

Gauss–Laguerre quadrature in ξ (after factoring out the exponential) and
Gauss–Legendre quadrature in η. For s/p STOs the ξ-integrand is a polynomial
times e^{−t}, so the ξ quadrature is exact; the η factor is a smooth
exponential, converged to ~1e-12 with the node counts below.

The local σ/π integrals are rotated into the molecular frame with the
Slater–Koster direction-cosine relations.
"""

from __future__ import annotations

import math
from functools import lru_cache

import numpy as np

from .basis import AO, Y_P, Y_S, radial_norm

_T, _WT = np.polynomial.laguerre.laggauss(48)
_ETA, _WETA = np.polynomial.legendre.leggauss(48)
_TT, _EE = np.meshgrid(_T, _ETA, indexing="ij")
_WW = np.outer(_WT, _WETA)


@lru_cache(maxsize=4096)
def local_overlaps(n1: int, l1: int, z1: float, n2: int, l2: int, z2: float, R: float) -> tuple[float, float]:
    """Return (σ, π) overlaps of AO1 on A and AO2 on B, R in bohr.

    σ: both functions symmetric about the axis (s or pz); π: px–px (only for l1=l2=1).
    p_z on both centers points along +z (from A to B).
    """
    half = 0.5 * R
    alpha = half * (z1 + z2)
    beta = half * (z1 - z2)
    xi = 1.0 + _TT / alpha
    eta = _EE
    ra = half * (xi + eta)
    rb = half * (xi - eta)
    za = half * (xi * eta + 1.0)
    zb = half * (xi * eta - 1.0)
    rho2 = half * half * (xi * xi - 1.0) * (1.0 - eta * eta)
    common = (
        _WW
        * (half ** 3) * (xi * xi - eta * eta)
        * np.exp(-beta * eta - alpha)
        / alpha
        * radial_norm(n1, z1) * radial_norm(n2, z2)
    )

    def sigma_factor(n: int, l: int, r: np.ndarray, z: np.ndarray) -> np.ndarray:
        if l == 0:
            return Y_S * r ** (n - 1)
        return Y_P * r ** (n - 2) * z

    sigma = float(np.sum(common * sigma_factor(n1, l1, ra, za) * sigma_factor(n2, l2, rb, zb)) * 2.0 * math.pi)
    pi = 0.0
    if l1 == 1 and l2 == 1:
        pi_integrand = Y_P * Y_P * ra ** (n1 - 2) * rb ** (n2 - 2) * rho2
        pi = float(np.sum(common * pi_integrand) * math.pi)
    return sigma, pi


_AXIS = {"x": 0, "y": 1, "z": 2}


def overlap_matrix(basis: list[AO], positions_bohr: np.ndarray) -> np.ndarray:
    n = len(basis)
    S = np.eye(n)
    by_atom: dict[int, list[int]] = {}
    for idx, ao in enumerate(basis):
        by_atom.setdefault(ao.atom, []).append(idx)
    atoms = sorted(by_atom)
    for ia, a in enumerate(atoms):
        for b in atoms[ia + 1:]:
            vec = positions_bohr[b] - positions_bohr[a]
            R = float(np.linalg.norm(vec))
            if R < 1e-6:
                raise ValueError("두 원자의 좌표가 겹칩니다.")
            if R > 40.0:
                continue  # negligible overlap
            e = vec / R
            for i in by_atom[a]:
                ao_i = basis[i]
                for j in by_atom[b]:
                    ao_j = basis[j]
                    sig, pi = local_overlaps(
                        ao_i.n, ao_i.l, round(ao_i.zeta, 6),
                        ao_j.n, ao_j.l, round(ao_j.zeta, 6),
                        round(R, 10),
                    )
                    if ao_i.l == 0 and ao_j.l == 0:
                        val = sig
                    elif ao_i.l == 0:
                        val = e[_AXIS[ao_j.m]] * sig
                    elif ao_j.l == 0:
                        val = e[_AXIS[ao_i.m]] * sig
                    else:
                        ei, ej = e[_AXIS[ao_i.m]], e[_AXIS[ao_j.m]]
                        val = ei * ej * (sig - pi) + (pi if ao_i.m == ao_j.m else 0.0)
                    S[i, j] = S[j, i] = val
    return S

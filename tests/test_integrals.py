import math

import numpy as np

from quantumlens.eht.basis import build_basis
from quantumlens.eht.integrals import local_overlaps, overlap_matrix
from quantumlens.eht.params import ANGSTROM_TO_BOHR
from quantumlens.eht.solver import run_eht


def test_1s_1s_overlap_matches_closed_form():
    zeta, R = 1.3, 1.4
    p = zeta * R
    exact = math.exp(-p) * (1 + p + p * p / 3)
    sigma, _ = local_overlaps(1, 0, zeta, 1, 0, zeta, R)
    assert abs(sigma - exact) < 1e-10


def test_2p_pi_overlap_matches_closed_form():
    # Mulliken et al.: S(2pπ,2pπ) = e^-p (1 + p + 2p²/5 + p³/15) for equal exponents
    zeta, R = 1.625, 2.5
    p = zeta * R
    exact = math.exp(-p) * (1 + p + 2 * p * p / 5 + p**3 / 15)
    _, pi = local_overlaps(2, 1, zeta, 2, 1, zeta, R)
    assert abs(pi - exact) < 1e-9


def test_overlap_rotation_invariance():
    """Rotating the molecule must not change S eigenvalues."""
    symbols = ["C", "O", "H", "H"]
    pos = np.array([[0, 0, 0], [1.21, 0, 0], [-0.55, 0.94, 0], [-0.55, -0.94, 0.0]])
    theta = 0.7
    rot = np.array([[1, 0, 0], [0, math.cos(theta), -math.sin(theta)], [0, math.sin(theta), math.cos(theta)]])
    basis = build_basis(symbols)
    S1 = overlap_matrix(basis, pos * ANGSTROM_TO_BOHR)
    S2 = overlap_matrix(basis, (pos @ rot.T) * ANGSTROM_TO_BOHR)
    np.testing.assert_allclose(np.linalg.eigvalsh(S1), np.linalg.eigvalsh(S2), atol=1e-10)


def test_mo_orthonormal_in_overlap_metric():
    res = run_eht(["C", "O", "H", "H"], np.array([[0, 0, 0], [1.21, 0, 0], [-0.55, 0.94, 0], [-0.55, -0.94, 0.0]]))
    C, S = res.coefficients, res.overlap
    np.testing.assert_allclose(C.T @ S @ C, np.eye(len(C)), atol=1e-10)

"""Real-space checks: the rendered wavefunction is the one we computed, in the right units."""

import numpy as np
import pytest

from quantumlens.chem import library
from quantumlens.field.grid import compute_grid
from quantumlens.field.isosurface import phase_surfaces
from quantumlens.pipeline import analyze


@pytest.mark.parametrize("key", ["h2", "n2", "h2o", "ethylene"])
def test_mo_is_normalized_on_grid(key):
    """∫|ψ|² dV = 1 only if distances, exponents and normalization use consistent units."""
    a = analyze(library.load(key))
    for k in (0, a.eht.homo):
        grid = compute_grid(a.eht, k, "high")
        norm = float(np.sum(grid.values.astype(np.float64) ** 2) * grid.spacing**3)
        assert abs(norm - 1.0) < 0.03, (key, k, norm)


def test_isosurfaces_closed_and_outward():
    a = analyze(library.load("ethylene"))
    grid = compute_grid(a.eht, a.eht.homo, "normal")
    pos, neg = phase_surfaces(grid, 0.05)
    assert pos.n_triangles > 100 and neg.n_triangles > 100
    for mesh in (pos, neg):
        v = mesh.vertices.astype(np.float64)
        f = mesh.faces
        # signed volume via divergence theorem: positive for outward (CCW) winding
        vol = np.einsum("ij,ij->i", v[f[:, 0]], np.cross(v[f[:, 1]], v[f[:, 2]])).sum() / 6.0
        assert vol > 0


def test_pi_lobes_on_opposite_sides_of_plane():
    a = analyze(library.load("ethylene"))
    grid = compute_grid(a.eht, a.eht.homo, "normal")
    pos, neg = phase_surfaces(grid, 0.05)
    zp, zn = pos.vertices[:, 2].mean(), neg.vertices[:, 2].mean()
    assert zp * zn < 0 and abs(zp) > 0.5

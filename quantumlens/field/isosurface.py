"""Marching-cubes isosurfaces for the positive and negative phase of Ψ."""

from __future__ import annotations

import base64
from dataclasses import dataclass

import numpy as np
from skimage.measure import marching_cubes

from ..eht.params import ANGSTROM_TO_BOHR
from .grid import Grid


@dataclass(frozen=True)
class Mesh:
    vertices: np.ndarray   # Å, float32 (n, 3)
    normals: np.ndarray    # float32 (n, 3), outward from the lobe
    faces: np.ndarray      # uint32 (m, 3)

    @property
    def n_triangles(self) -> int:
        return int(len(self.faces))

    def to_payload(self) -> dict[str, str | int]:
        return {
            "vertices": base64.b64encode(self.vertices.astype("<f4").tobytes()).decode("ascii"),
            "normals": base64.b64encode(self.normals.astype("<f4").tobytes()).decode("ascii"),
            "faces": base64.b64encode(self.faces.astype("<u4").tobytes()).decode("ascii"),
            "count": int(len(self.faces)),
        }


EMPTY = Mesh(np.zeros((0, 3), np.float32), np.zeros((0, 3), np.float32), np.zeros((0, 3), np.uint32))


def _surface(field: np.ndarray, level: float, grid: Grid) -> Mesh:
    if not (field.max() > level and field.min() < level):
        return EMPTY
    # Pad with a low border so that lobes touching the box edge are closed.
    padded = np.pad(field, 1, mode="constant", constant_values=min(field.min(), 0.0))
    verts, faces, normals, _ = marching_cubes(padded, level=level, spacing=(grid.spacing,) * 3, allow_degenerate=False)
    verts = verts - grid.spacing + grid.origin                 # undo padding, to absolute bohr
    verts_angstrom = (verts / ANGSTROM_TO_BOHR).astype(np.float32)
    # skimage returns normals pointing towards decreasing values, i.e. out of the lobe.
    normals = normals.astype(np.float32)
    faces = faces.astype(np.uint32)
    # Make triangle winding counter-clockwise seen from outside (needed for
    # front-face culling in the viewer): compare with the outward normals.
    v0, v1, v2 = (verts_angstrom[faces[:, i]] for i in range(3))
    geometric = np.cross(v1 - v0, v2 - v0)
    agreement = np.einsum("ij,ij->i", geometric, normals[faces].mean(axis=1))
    if np.count_nonzero(agreement < 0) > len(faces) // 2:
        faces = faces[:, ::-1].copy()
    return Mesh(verts_angstrom, normals, faces)


def phase_surfaces(grid: Grid, isovalue: float) -> tuple[Mesh, Mesh]:
    """Return (positive lobe surface at +iso, negative lobe surface at −iso)."""
    iso = abs(float(isovalue))
    positive = _surface(grid.values, iso, grid)
    negative = _surface(-grid.values, iso, grid)
    return positive, negative

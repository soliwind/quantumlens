"""End-to-end computation for one molecule (UI-independent)."""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from .analysis.orbitals import (
    OrbitalCharacter,
    assign_diatomic_shells,
    bond_order_mo,
    classify,
    geometry_class,
    tidy_degenerate,
)
from .chem.molecule import Molecule
from .eht.solver import EHTResult, run_eht


@dataclass
class Analysis:
    molecule: Molecule
    eht: EHTResult
    characters: list[OrbitalCharacter]
    geometry: str
    bond_order: float | None

    @property
    def default_mo(self) -> int:
        h = self.eht.homo
        return 0 if h is None else h

    def mo_title(self, k: int) -> str:
        """e.g. 'HOMO', 'LUMO+1', 'HOMO−2', 'SOMO'."""
        res = self.eht
        homo, lumo = res.homo, res.lumo
        if res.occupations[k] == 1:
            return "SOMO"
        if homo is not None and res.occupations[homo] == 1:
            # open shell: HOMO is the highest doubly occupied orbital
            doubly = np.flatnonzero(res.occupations == 2)
            homo = int(doubly[-1]) if doubly.size else None
        if homo is not None and k <= homo:
            return "HOMO" if k == homo else f"HOMO−{homo - k}"
        if lumo is not None and k >= lumo:
            return "LUMO" if k == lumo else f"LUMO+{k - lumo}"
        return f"MO {k + 1}"


def analyze(molecule: Molecule) -> Analysis:
    res = run_eht(molecule.symbols, molecule.positions, molecule.charge)
    tidy_degenerate(res, molecule)
    characters = [classify(res, molecule, k) for k in range(res.n_mo)]
    characters = assign_diatomic_shells(res, molecule, characters)
    geo = geometry_class(molecule)
    homonuclear = molecule.n_atoms == 2 and molecule.symbols[0] == molecule.symbols[1]
    bond_order = bond_order_mo(res, characters) if homonuclear else None
    return Analysis(molecule, res, characters, geo, bond_order)

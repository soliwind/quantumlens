"""Extended Hückel parameters (valence s/p shells only).

Values follow the standard Hoffmann-style parameter set distributed with YAeHMOP,
which is also what RDKit's ``rdEHTTools`` uses. ``tests/test_eht_vs_rdkit.py``
checks that our overlap and Hamiltonian matrices reproduce RDKit's.

Units: H_ii in eV, Slater exponents ζ in bohr⁻¹.
"""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class Shell:
    n: int        # principal quantum number
    l: int        # 0 = s, 1 = p
    hii: float    # Coulomb integral (eV)
    zeta: float   # Slater exponent (bohr⁻¹)


@dataclass(frozen=True)
class Element:
    symbol: str
    name_ko: str
    valence_electrons: int
    shells: tuple[Shell, ...]


def _sp(n: int, hs: float, zs: float, hp: float, zp: float) -> tuple[Shell, ...]:
    return (Shell(n, 0, hs, zs), Shell(n, 1, hp, zp))


ELEMENTS: dict[str, Element] = {
    "H":  Element("H",  "수소",   1, (Shell(1, 0, -13.6, 1.300),)),
    "He": Element("He", "헬륨",   2, (Shell(1, 0, -23.4, 1.688),)),
    "Li": Element("Li", "리튬",   1, _sp(2, -5.4, 0.650, -3.5, 0.650)),
    "Be": Element("Be", "베릴륨", 2, _sp(2, -10.0, 0.975, -6.0, 0.975)),
    "B":  Element("B",  "붕소",   3, _sp(2, -15.2, 1.300, -8.5, 1.300)),
    "C":  Element("C",  "탄소",   4, _sp(2, -21.4, 1.625, -11.4, 1.625)),
    "N":  Element("N",  "질소",   5, _sp(2, -26.0, 1.950, -13.4, 1.950)),
    "O":  Element("O",  "산소",   6, _sp(2, -32.3, 2.275, -14.8, 2.275)),
    "F":  Element("F",  "플루오린", 7, _sp(2, -40.0, 2.425, -18.1, 2.425)),
    "Na": Element("Na", "나트륨", 1, _sp(3, -5.1, 0.733, -3.0, 0.733)),
    "Mg": Element("Mg", "마그네슘", 2, _sp(3, -9.0, 1.100, -4.5, 1.100)),
    "Si": Element("Si", "규소",   4, _sp(3, -17.3, 1.383, -9.2, 1.383)),
    "P":  Element("P",  "인",     5, _sp(3, -18.6, 1.750, -14.0, 1.300)),
    "S":  Element("S",  "황",     6, _sp(3, -20.0, 2.122, -11.0, 1.827)),
    "Cl": Element("Cl", "염소",   7, _sp(3, -26.3, 2.183, -14.2, 1.733)),
    "Br": Element("Br", "브로민", 7, _sp(4, -22.07, 2.588, -13.1, 2.131)),
    "I":  Element("I",  "아이오딘", 7, _sp(5, -18.0, 2.679, -12.7, 2.322)),
}

# Wolfsberg–Helmholz constant
K_WH = 1.75

ANGSTROM_TO_BOHR = 1.0 / 0.52917721067

SUPPORTED_SYMBOLS = frozenset(ELEMENTS)

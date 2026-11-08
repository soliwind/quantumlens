"""Turn an Analysis into the JSON props consumed by the React components."""

from __future__ import annotations

import html
from typing import Any

import numpy as np

from ..analysis.orbitals import ao_populations
from ..pipeline import Analysis
from .style import ATOM_STYLE

SUBSCRIPT = str.maketrans("0123456789", "₀₁₂₃₄₅₆₇₈₉")


def pretty_formula(text: str) -> str:
    """'C6H6' → 'C₆H₆', keeping a trailing charge as superscript."""
    if any(ch in text for ch in "₀₁₂₃₄₅₆₇₈₉"):
        return text
    body, charge = text, ""
    for sign in ("+", "-"):
        if sign in text:
            idx = text.index(sign)
            body, charge = text[:idx], text[idx:]
            break
    sup = str.maketrans("0123456789+-", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻")
    return body.translate(SUBSCRIPT) + charge.translate(sup)


def charged_label(label: str, charge: int) -> str:
    base = label.rstrip("⁺⁻⁰¹²³⁴⁵⁶⁷⁸⁹")
    if charge == 0:
        return base
    sup = str.maketrans("0123456789+-", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻")
    mag = "" if abs(charge) == 1 else str(abs(charge))
    return base + (mag + ("+" if charge > 0 else "-")).translate(sup)


def orbital_symbol_html(analysis: Analysis, k: int) -> str:
    ch = analysis.characters[k]
    if not ch.main:
        return f"ψ<sub>{k + 1}</sub>"
    core = html.escape(ch.main)
    return core + (f"<sub>{ch.shell}</sub>" if ch.shell else "")


def atoms_payload(analysis: Analysis) -> list[dict[str, Any]]:
    mol = analysis.molecule
    out = []
    for s, (x, y, z) in zip(mol.symbols, mol.positions):
        color, radius = ATOM_STYLE.get(s, ("#a0a6ae", 0.34))
        out.append({"symbol": s, "x": float(x), "y": float(y), "z": float(z), "color": color, "radius": radius})
    return out


def bonds_payload(analysis: Analysis) -> list[dict[str, Any]]:
    return [{"i": b.i, "j": b.j, "order": float(b.order), "aromatic": bool(b.aromatic)} for b in analysis.molecule.bonds]


def levels_payload(analysis: Analysis) -> list[dict[str, Any]]:
    res = analysis.eht
    group_of = {}
    for g_idx, group in enumerate(res.degenerate_groups):
        for k in group:
            group_of[k] = g_idx
    out = []
    for k in range(res.n_mo):
        ch = analysis.characters[k]
        out.append({
            "k": k,
            "energy": float(res.energies[k]),
            "occupation": int(res.occupations[k]),
            "symbol": ch.main,
            "shell": ch.shell,
            "title": analysis.mo_title(k),
            "group": group_of[k],
        })
    return out


def fragments_payload(analysis: Analysis) -> dict[str, Any] | None:
    """AO levels of both atoms and MO↔AO links, for the diatomic correlation diagram."""
    mol, res = analysis.molecule, analysis.eht
    if mol.n_atoms != 2:
        return None
    sides = {0: "left", 1: "right"}
    frag: dict[str, Any] = {}
    shell_index: dict[tuple[int, int], int] = {}
    for atom, side in sides.items():
        levels = []
        seen = set()
        for ao in res.basis:
            if ao.atom != atom or (ao.n, ao.l) in seen:
                continue
            seen.add((ao.n, ao.l))
            shell_index[(atom, ao.l)] = len(levels)
            levels.append({"energy": ao.hii, "name": f"{ao.n}{'sp'[ao.l]}"})
        frag[side] = {"symbol": f"{mol.symbols[atom]}{'' if mol.symbols[0] != mol.symbols[1] else ' ' + str(atom + 1)}".strip(), "levels": levels}
    links = []
    for k in range(res.n_mo):
        q = ao_populations(res, k)
        weights: dict[tuple[int, int], float] = {}
        for idx, ao in enumerate(res.basis):
            weights[(ao.atom, ao.l)] = weights.get((ao.atom, ao.l), 0.0) + float(q[idx])
        for (atom, l), w in weights.items():
            if w >= 0.08:
                links.append({"k": k, "side": sides[atom], "level": shell_index[(atom, l)], "weight": float(min(w, 1.0))})
    frag["links"] = links
    return frag


def caption_html(analysis: Analysis, k: int, mol_label: str) -> str:
    res = analysis.eht
    e = res.energies[k]
    sign = "−" if e < 0 else ""
    return (
        f"<b>{html.escape(mol_label)}</b><br>"
        f"{orbital_symbol_html(analysis, k)} · {html.escape(analysis.mo_title(k))} · {sign}{abs(e):.2f} eV"
    )


def contributions(analysis: Analysis, k: int) -> tuple[np.ndarray, np.ndarray]:
    """(AO populations, atom populations) for MO k."""
    q = ao_populations(analysis.eht, k)
    atoms = np.zeros(analysis.molecule.n_atoms)
    for idx, ao in enumerate(analysis.eht.basis):
        atoms[ao.atom] += q[idx]
    return q, atoms

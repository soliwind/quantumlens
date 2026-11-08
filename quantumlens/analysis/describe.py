"""One-paragraph, plain-language description of a selected MO."""

from __future__ import annotations

import numpy as np

from ..pipeline import Analysis
from .orbitals import atom_populations, bond_overlap_populations

BOND_THRESHOLD = 0.04


def atom_name(analysis: Analysis, i: int) -> str:
    return f"{analysis.molecule.symbols[i]}{i + 1}"


def describe(analysis: Analysis, k: int) -> list[str]:
    res, mol = analysis.eht, analysis.molecule
    ch = analysis.characters[k]
    occ = int(res.occupations[k])
    sentences: list[str] = []

    # 1. what kind of orbital
    occ_text = {2: "전자 두 개가 들어 있는", 1: "전자 하나(홀전자)가 들어 있는", 0: "비어 있는"}[occ]
    sym_text = ""
    if ch.symmetry == "σ":
        sym_text = "결합축 방향으로 겹친 σ형 " if analysis.geometry == "linear" else "분자 평면 안에 놓인 σ형 "
    elif ch.symmetry == "π":
        sym_text = "결합축을 둘러싸고 겹친 π형 " if analysis.geometry == "linear" else "분자 평면 위아래로 퍼진 π형 "
    sentences.append(f"{occ_text} {ch.bonding_ko} {sym_text}오비탈입니다.".replace("  ", " "))

    # 2. where it lives
    pops = atom_populations(res, k)
    order = np.argsort(-pops)
    top = [int(i) for i in order if pops[i] >= 0.12][:4]
    if len(top) == 1 or (top and pops[top[0]] >= 0.7):
        sentences.append(f"전자 구름의 {pops[top[0]] * 100:.0f}%가 {atom_name(analysis, top[0])}에 몰려 있습니다.")
    elif top:
        names = ", ".join(atom_name(analysis, i) for i in top)
        sentences.append(f"주로 {names}에 걸쳐 퍼져 있습니다.")

    # 3. which bonds it strengthens / weakens
    bonds = bond_overlap_populations(res, mol, k)
    if bonds and mol.n_atoms > 2:
        strong = sorted(bonds, key=lambda b: -b[2])
        plus = [b for b in strong if b[2] > BOND_THRESHOLD][:2]
        minus = [b for b in reversed(strong) if b[2] < -BOND_THRESHOLD][:2]
        pair = lambda b: f"{atom_name(analysis, b[0])}–{atom_name(analysis, b[1])}"  # noqa: E731
        plus_text = ", ".join(pair(b) for b in plus)
        minus_text = ", ".join(pair(b) for b in minus)
        if plus and minus:
            sentences.append(f"{plus_text} 사이는 같은 위상으로 겹치고, {minus_text} 사이에는 마디가 있습니다.")
        elif plus:
            sentences.append(f"{plus_text} 사이에서 같은 위상으로 겹칩니다.")
        elif minus:
            sentences.append(f"{minus_text} 사이에 마디가 있습니다.")

    # 4. degeneracy
    group = next(g for g in res.degenerate_groups if k in g)
    if len(group) > 1:
        sentences.append(f"에너지가 같은 오비탈이 {len(group)}개 있습니다(축퇴). 나란히 놓인 준위를 눌러 비교해 보세요.")

    # 5. consequence of occupation
    if occ == 0 and ch.bonding == "antibonding":
        sentences.append("이 오비탈에 전자가 들어가면 결합이 약해집니다.")
    elif occ == 0 and ch.bonding == "bonding":
        sentences.append("이 오비탈에 전자가 들어가면 결합이 강해집니다.")
    return sentences

"""Curated molecules for general-chemistry MO lessons."""

from __future__ import annotations

from dataclasses import dataclass
from functools import lru_cache

from .molecule import Molecule, diatomic, from_coordinates, from_smiles


@dataclass(frozen=True)
class LibraryEntry:
    key: str
    name: str            # Korean display name
    label: str           # formula as displayed (with Unicode subscripts)
    category: str
    note: str            # one or two sentences: what to look at
    kind: str            # "diatomic" | "smiles" | "coords"
    spec: tuple          # constructor arguments
    charge: int = 0


CATEGORIES = ("동핵 이원자", "이핵 이원자", "작은 다원자", "π 공액계")

_ENTRIES: tuple[LibraryEntry, ...] = (
    # --- homonuclear diatomics -------------------------------------------------
    LibraryEntry("h2", "수소", "H₂", "동핵 이원자",
                 "가장 단순한 분자입니다. 1s 두 개가 같은 위상으로 겹친 σ와 반대 위상으로 겹친 σ*를 비교해 보세요.",
                 "diatomic", ("H", "H", 0.741, 1)),
    LibraryEntry("he2", "헬륨 이합체", "He₂", "동핵 이원자",
                 "결합성 σ와 반결합성 σ*가 모두 채워져 결합 차수가 0입니다. 그래서 He₂는 안정한 분자로 존재하지 않습니다. 원자 간 거리는 비교용 가상값입니다.",
                 "diatomic", ("He", "He", 1.50, 0)),
    LibraryEntry("li2", "리튬", "Li₂", "동핵 이원자",
                 "2s끼리 겹친 σ 오비탈 하나에 전자 두 개가 들어갑니다. 오비탈이 매우 넓게 퍼져 있는 점에 주목하세요.",
                 "diatomic", ("Li", "Li", 2.673, 1)),
    LibraryEntry("b2", "붕소", "B₂", "동핵 이원자",
                 "2s–2p 혼합이 커서 π 오비탈이 σ2p보다 낮게 놓입니다. 축퇴된 π 두 개에 전자가 하나씩 들어가 상자성을 띱니다.",
                 "diatomic", ("B", "B", 1.590, 1)),
    LibraryEntry("c2", "탄소", "C₂", "동핵 이원자",
                 "π 결합 두 개가 채워진 분자입니다. HOMO가 σ가 아니라 π라는 점이 N₂와 비슷합니다.",
                 "diatomic", ("C", "C", 1.243, 2)),
    LibraryEntry("n2", "질소", "N₂", "동핵 이원자",
                 "결합 차수 3. 2s–2p 혼합 때문에 σ2p가 π2p보다 위에 놓이는 대표적인 예입니다.",
                 "diatomic", ("N", "N", 1.098, 3)),
    LibraryEntry("o2", "산소", "O₂", "동핵 이원자",
                 "축퇴된 π* 두 개에 전자가 하나씩 들어가 홀전자 두 개를 가집니다. 루이스 구조로는 설명하기 어려운 O₂의 상자성이 여기서 나옵니다.",
                 "diatomic", ("O", "O", 1.208, 2)),
    LibraryEntry("f2", "플루오린", "F₂", "동핵 이원자",
                 "π*까지 모두 채워져 결합 차수가 1이 됩니다. O₂와 비교해 π* 점유가 어떻게 달라지는지 보세요.",
                 "diatomic", ("F", "F", 1.412, 1)),
    # --- heteronuclear diatomics ----------------------------------------------
    LibraryEntry("hf", "플루오린화 수소", "HF", "이핵 이원자",
                 "F의 2p가 H의 1s보다 훨씬 낮아 결합성 오비탈은 F 쪽에 치우칩니다. 점유 오비탈에서 전기음성도 차이가 그대로 보입니다.",
                 "diatomic", ("H", "F", 0.917, 1)),
    LibraryEntry("hcl", "염화 수소", "HCl", "이핵 이원자",
                 "HF와 같은 모양이지만 Cl의 3p가 관여합니다. 두 분자의 HOMO를 나란히 비교해 보세요.",
                 "diatomic", ("H", "Cl", 1.275, 1)),
    LibraryEntry("lih", "수소화 리튬", "LiH", "이핵 이원자",
                 "HF와 반대로 전자가 H 쪽에 몰립니다. 이온성 결합에 가까운 분자입니다.",
                 "diatomic", ("Li", "H", 1.595, 1)),
    LibraryEntry("co", "일산화 탄소", "CO", "이핵 이원자",
                 "N₂와 전자 수가 같은 등전자 분자입니다. HOMO가 C 쪽에 크게 퍼져 있어서 금속과 결합할 때 C 쪽으로 붙습니다.",
                 "diatomic", ("C", "O", 1.128, 3)),
    LibraryEntry("no", "일산화 질소", "NO", "이핵 이원자",
                 "전자 수가 홀수인 라디칼입니다. π*에 들어간 홀전자 하나를 확인해 보세요.",
                 "diatomic", ("N", "O", 1.151, 2)),
    # --- small polyatomics ----------------------------------------------------
    LibraryEntry("h2o", "물", "H₂O", "작은 다원자",
                 "HOMO는 분자 평면에 수직인 O의 2p로, 비공유 전자쌍에 해당합니다. 결합에 거의 참여하지 않는 오비탈이라는 점을 확인해 보세요.",
                 "smiles", ("O",)),
    LibraryEntry("nh3", "암모니아", "NH₃", "작은 다원자",
                 "HOMO는 N 위쪽으로 튀어나온 비공유 전자쌍입니다. 암모니아가 염기로 작용할 때 이 오비탈이 쓰입니다.",
                 "smiles", ("N",)),
    LibraryEntry("ch4", "메테인", "CH₄", "작은 다원자",
                 "점유 오비탈은 낮은 오비탈 하나와 축퇴된 세 개로 나뉩니다. 혼성 오비탈 모형(sp³ 네 개)과 비교해 보세요.",
                 "smiles", ("C",)),
    LibraryEntry("bh3", "보레인", "BH₃", "작은 다원자",
                 "LUMO는 B의 빈 2p입니다. BH₃가 전자쌍 받개(루이스 산)인 이유가 이 빈 오비탈에 있습니다.",
                 "coords", (("B", "H", "H", "H"),
                            ((0, 0, 0), (1.19, 0, 0), (-0.595, 1.0306, 0), (-0.595, -1.0306, 0)),
                            ((0, 1, 1), (0, 2, 1), (0, 3, 1)))),
    LibraryEntry("beh2", "수소화 베릴륨", "BeH₂", "작은 다원자",
                 "선형 분자입니다. Be의 빈 2p 두 개가 비결합성으로 남아 LUMO가 됩니다.",
                 "coords", (("Be", "H", "H"), ((0, 0, 0), (0, 0, 1.334), (0, 0, -1.334)), ((0, 1, 1), (0, 2, 1)))),
    LibraryEntry("co2", "이산화 탄소", "CO₂", "작은 다원자",
                 "HOMO는 양쪽 O에만 퍼진 비결합성 π로, 가운데 C에는 마디가 있습니다.",
                 "smiles", ("O=C=O",)),
    LibraryEntry("hcn", "사이안화 수소", "HCN", "작은 다원자",
                 "C≡N 삼중 결합의 π 두 개와 N의 비공유 전자쌍(σ)을 구별해 보세요.",
                 "smiles", ("C#N",)),
    LibraryEntry("h2co", "폼알데하이드", "H₂CO", "작은 다원자",
                 "HOMO는 O의 비공유 전자쌍(n), LUMO는 C=O의 π*입니다. n→π* 전이를 설명할 때 쓰는 대표적인 예입니다.",
                 "smiles", ("C=O",)),
    # --- π systems ------------------------------------------------------------
    LibraryEntry("ethylene", "에틸렌", "C₂H₄", "π 공액계",
                 "HOMO는 C=C의 π, LUMO는 π*입니다. 두 오비탈에서 위상 마디가 어디에 생기는지 비교해 보세요.",
                 "smiles", ("C=C",)),
    LibraryEntry("acetylene", "아세틸렌", "C₂H₂", "π 공액계",
                 "서로 수직인 π 두 개가 축퇴되어 있습니다. 둘을 합치면 결합축을 둘러싼 원통 모양이 됩니다.",
                 "smiles", ("C#C",)),
    LibraryEntry("butadiene", "1,3-뷰타다이엔", "C₄H₆", "π 공액계",
                 "π 오비탈 네 개는 에너지가 높아질수록 마디가 0, 1, 2, 3개로 늘어납니다. 상자 속 입자 모형과 비교해 보세요.",
                 "smiles", ("C=CC=C",)),
    LibraryEntry("allyl", "알릴 양이온", "C₃H₅⁺", "π 공액계",
                 "π 오비탈 세 개 가운데 가운데 오비탈(LUMO)은 중앙 탄소에 마디가 있습니다. 양전하가 양 끝 탄소에 놓이는 이유입니다.",
                 "smiles", ("C=C[CH2+]",)),
    LibraryEntry("benzene", "벤젠", "C₆H₆", "π 공액계",
                 "π 오비탈 여섯 개가 1-2-2-1로 축퇴됩니다. 가장 낮은 π는 고리 전체에 걸쳐 같은 위상의 도넛 모양입니다.",
                 "smiles", ("c1ccccc1",)),
    LibraryEntry("pyridine", "피리딘", "C₅H₅N", "π 공액계",
                 "벤젠과 비슷한 π계 외에, 고리 평면에 놓인 N의 비공유 전자쌍(σ)이 따로 있습니다.",
                 "smiles", ("c1ccncc1",)),
)

ENTRIES: dict[str, LibraryEntry] = {e.key: e for e in _ENTRIES}
DEFAULT_KEY = "benzene"


def entries_in(category: str) -> list[LibraryEntry]:
    return [e for e in _ENTRIES if e.category == category]


@lru_cache(maxsize=64)
def load(key: str) -> Molecule:
    entry = ENTRIES[key]
    if entry.kind == "diatomic":
        a, b, distance, order = entry.spec
        mol = diatomic(a, b, distance, order, charge=entry.charge, name=entry.name)
    elif entry.kind == "smiles":
        mol = from_smiles(entry.spec[0], name=entry.name, source="라이브러리")
    else:
        symbols, positions, bonds = entry.spec
        mol = from_coordinates(symbols, positions, list(bonds), charge=entry.charge, name=entry.name, source="라이브러리")
    mol.formula = entry.label
    return mol

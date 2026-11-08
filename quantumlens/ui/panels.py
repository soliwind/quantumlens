"""Secondary panels shown in tabs under the viewer."""

from __future__ import annotations

import html

import numpy as np
import plotly.graph_objects as go
import streamlit as st

from ..analysis.orbitals import bond_overlap_populations
from ..content.glossary import TERMS
from ..eht.params import ELEMENTS, K_WH
from ..field.grid import compute_slice
from ..pipeline import Analysis
from .payload import contributions
from .style import ATOM_STYLE


def _bars(rows: list[tuple[str, float, str]], *, diverging: bool, colors: tuple[str, str]) -> str:
    """rows: (name, bar fraction in [-1, 1], value text) → HTML bar list."""
    parts = [f'<div class="ql-bars{" diverging" if diverging else ""}">']
    for name, frac, text in rows:
        mag = min(abs(frac), 1.0) * 100
        color = colors[0] if frac >= 0 else colors[1]
        if diverging:
            left = 50 if frac >= 0 else 50 - mag / 2
            style = f"left:{left:.1f}%;width:{mag / 2:.1f}%;background:{color}"
        else:
            style = f"left:0;width:{mag:.1f}%;background:{color}"
        parts.append(
            f'<span class="name">{html.escape(name)}</span>'
            f'<span class="track"><span class="fill" style="{style}"></span></span>'
            f'<span class="val">{text}</span>'
        )
    parts.append("</div>")
    return "".join(parts)


def composition(analysis: Analysis, k: int) -> None:
    q, atoms = contributions(analysis, k)
    mol = analysis.molecule
    order = np.argsort(-np.abs(atoms))
    rows = [
        (f"{mol.symbols[i]}{i + 1}", float(atoms[i]), f"{atoms[i] * 100:.0f}%")
        for i in order if abs(atoms[i]) >= 0.005
    ][:12]
    st.markdown("**원자별 기여도**")
    st.html(_bars(rows, diverging=False, colors=("#4b5360", "#b0473a")))
    st.caption("선택한 오비탈의 전자 구름이 각 원자에 얼마나 나뉘어 있는지 나타냅니다. 모두 더하면 100%입니다.")

    with st.expander("원자 오비탈별 기여도와 계수"):
        basis = analysis.eht.basis
        c = analysis.eht.coefficients[:, k]
        idx = np.argsort(-np.abs(q))
        table = [
            {
                "원자": f"{basis[i].symbol}{basis[i].atom + 1}",
                "원자 오비탈": basis[i].name,
                "계수 c": round(float(c[i]), 4),
                "기여도 (%)": round(float(q[i]) * 100, 1),
            }
            for i in idx if abs(q[i]) >= 1e-4
        ]
        st.dataframe(table, hide_index=True, width="stretch")
        st.caption("계수의 부호는 위상(색)을, 크기는 섞이는 정도를 나타냅니다. 오비탈 전체의 부호를 뒤집어도 같은 오비탈입니다.")


def bonding(analysis: Analysis, k: int) -> None:
    mol = analysis.molecule
    bonds = bond_overlap_populations(analysis.eht, mol, k)
    if not bonds:
        st.info("결합이 없는 계입니다.")
        return
    bonds = sorted(bonds, key=lambda b: -abs(b[2]))
    scale = max(0.5, max(abs(b[2]) for b in bonds))
    rows = [
        (f"{mol.symbols[i]}{i + 1}–{mol.symbols[j]}{j + 1}", v / scale, f"{v:+.3f}".replace("-", "−"))
        for i, j, v in bonds[:14]
    ]
    html_rows = _bars(rows, diverging=True, colors=("#2f7d5b", "#b0473a"))
    st.markdown("**결합마다 겹침 (전자 1개 기준)**")
    st.html(html_rows)
    st.caption(
        "오른쪽(+)은 두 원자 사이에서 같은 위상으로 겹쳐 결합을 돕는 경우, 왼쪽(−)은 마디가 생겨 결합을 약하게 하는 경우입니다. "
        "값은 멀리켄 겹침 인구이며 결합 차수와 같은 값은 아닙니다."
    )


def slice_view(analysis: Analysis, k: int, colors: dict[str, str], key: str) -> None:
    geo = analysis.geometry
    ch = analysis.characters[k]
    # Linear molecules and π orbitals of planar molecules: a plane containing the
    # bond axis shows both lobes and the nodal plane at once.
    default_plane = "xz" if (geo == "linear" or (geo == "planar" and ch.symmetry == "π")) else "xy"
    default_offset = 0.0
    c1, c2 = st.columns([1, 2])
    with c1:
        plane = st.segmented_control("평면", ["xy", "xz", "yz"], default=default_plane, key=f"slice_plane_{key}")
        plane = plane or default_plane
    with c2:
        offset = st.slider("평면 위치 (Å)", -2.5, 2.5, default_offset, 0.1, key=f"slice_offset_{key}")
    u, v, values = compute_slice(analysis.eht, k, plane, offset)
    vmax = float(np.max(np.abs(values))) or 1.0
    levels = 9
    fig = go.Figure()
    fig.add_trace(go.Contour(
        x=u, y=v, z=values, zmin=-vmax, zmax=vmax,
        colorscale=[[0, colors["negative"]], [0.5, "#ffffff"], [1, colors["positive"]]],
        contours={"start": -vmax, "end": vmax, "size": 2 * vmax / (2 * levels), "coloring": "heatmap"},
        line={"width": 0.6, "color": "rgba(27,32,39,.35)"}, showscale=False, hoverinfo="skip",
    ))
    # Draw nodes only where the orbital is not negligibly small (far-field sign
    # changes of a vanishing function are real but distracting).
    node_field = np.where(_inside(values, vmax), values, np.nan)
    fig.add_trace(go.Contour(
        x=u, y=v, z=node_field, contours={"start": 0, "end": 0, "size": 1, "coloring": "none"}, connectgaps=False,
        line={"width": 2.2, "color": "#1b2027"}, showscale=False, hoverinfo="skip", name="마디",
    ))
    axes = {"xy": (0, 1, 2), "xz": (0, 2, 1), "yz": (1, 2, 0)}[plane]
    pos = analysis.molecule.positions
    near = np.abs(pos[:, axes[2]] - offset) < 0.7
    fig.add_trace(go.Scatter(
        x=pos[near, axes[0]], y=pos[near, axes[1]], mode="markers+text",
        text=[f"{analysis.molecule.symbols[i]}{i + 1}" for i in np.flatnonzero(near)],
        textposition="top center", textfont={"size": 11, "color": "#1b2027"},
        marker={"size": 9, "color": [ATOM_STYLE.get(analysis.molecule.symbols[i], ("#999", 0))[0] for i in np.flatnonzero(near)],
                "line": {"width": 1, "color": "#1b2027"}},
        hoverinfo="skip", showlegend=False,
    ))
    names = "xyz"
    fig.update_layout(
        width=520, height=500, margin={"l": 50, "r": 10, "t": 10, "b": 50}, showlegend=False,
        paper_bgcolor="white", plot_bgcolor="white",
        xaxis={"title": f"{names[axes[0]]} (Å)", "zeroline": False, "showgrid": False,
               "range": [float(u[0]), float(u[-1])]},
        yaxis={"title": f"{names[axes[1]]} (Å)", "zeroline": False, "showgrid": False,
               "range": [float(v[0]), float(v[-1])]},
        font={"family": "Pretendard Variable, Pretendard, sans-serif", "size": 12, "color": "#4b5360"},
    )
    st.plotly_chart(fig, config={"displayModeBar": False}, theme=None, key=f"slice_{key}", width="content")
    st.caption(f"{names[axes[2]]} = {offset:.1f} Å 평면에서의 오비탈 값입니다. 굵은 검은 선이 마디(값이 0인 곳)이고, 표시된 원자는 평면에서 0.7 Å 이내에 있는 원자입니다.")


def _inside(values: np.ndarray, vmax: float) -> np.ndarray:
    """Points within ~0.4 Å of a region where |ψ| exceeds 8% of its maximum."""
    big = np.abs(values) > 0.08 * vmax
    out = big.copy()
    for dy in range(-6, 7):
        for dx in range(-6, 7):
            out |= np.roll(np.roll(big, dy, axis=0), dx, axis=1)
    return out


def glossary() -> None:
    cols = st.columns(2, gap="large")
    for idx, term in enumerate(TERMS):
        more = f'<p class="more">{html.escape(term.more)}</p>' if term.more else ""
        cols[idx % 2].html(f'<div class="ql-term"><b>{html.escape(term.word)}</b><p>{html.escape(term.basic)}</p>{more}</div>')


def method(analysis: Analysis) -> None:
    res = analysis.eht
    mol = analysis.molecule
    c1, c2 = st.columns([1.1, 1], gap="large")
    with c1:
        st.markdown("**계산 방법**")
        st.markdown(
            f"""
- **구조**: {html.escape(mol.source or '-')}. 라이브러리의 이원자 분자는 실험 결합 길이, 그 밖의 분자는 RDKit(ETKDG + MMFF/UFF)으로 만든 3D 구조입니다.
- **오비탈**: 확장 휘켈 방법(EHT). 원자가 s·p 슬레이터형 오비탈을 기저로, 가중 Wolfsberg–Helmholz 식(K = {K_WH})으로 해밀토니안을 만들고 HC = SCE를 풉니다. 중첩 적분과 3D 그림에 같은 기저 함수를 씁니다.
- **매개변수**: YAeHMOP/RDKit에 포함된 Hoffmann 계열 표준값입니다. 같은 구조에서 RDKit `rdEHTTools`와 MO 에너지가 0.05 eV 이내로 일치하는지 테스트로 확인합니다.
- **전자 배치**: 에너지가 낮은 순서로 채우고, 축퇴된 오비탈이 일부만 차면 훈트 규칙을 따릅니다.
- **라벨**: σ/π는 선형 분자의 결합축 또는 평면 분자의 분자 평면 기준, g/u는 반전 대칭으로 판정합니다. 결합성/반결합성은 원자 사이 겹침 인구의 부호로 판단합니다(동핵 이원자는 교과서 규칙).
- **한계**: EHT는 전자 사이 반발을 직접 다루지 않는 정성 모델입니다. 오비탈 모양과 에너지 순서를 이해하는 데 쓰고, 에너지 값 자체를 실험값처럼 해석하지 않는 것이 좋습니다.
"""
        )
        present = sorted(set(mol.symbols), key=lambda s: list(ELEMENTS).index(s))
        rows = []
        for s in present:
            for sh in ELEMENTS[s].shells:
                rows.append({"원소": s, "오비탈": f"{sh.n}{'sp'[sh.l]}", "H_ii (eV)": sh.hii, "ζ (bohr⁻¹)": sh.zeta})
        st.markdown("**사용한 매개변수**")
        st.dataframe(rows, hide_index=True, width="stretch")
    with c2:
        st.markdown("**전체 MO 목록**")
        rows = []
        for k in range(res.n_mo):
            ch = analysis.characters[k]
            rows.append({
                "MO": k + 1,
                "이름": analysis.mo_title(k),
                "기호": (ch.main + ch.shell) if ch.main else "",
                "성격": ch.bonding_ko,
                "에너지 (eV)": round(float(res.energies[k]), 3),
                "전자": int(res.occupations[k]),
            })
        st.dataframe(rows, hide_index=True, width="stretch", height=min(38 + 35 * len(rows), 520))
        csv = "MO,name,symbol,character,energy_eV,occupation\n" + "\n".join(
            f"{r['MO']},{r['이름']},{r['기호']},{r['성격']},{r['에너지 (eV)']},{r['전자']}" for r in rows
        )
        st.download_button("MO 목록 CSV 내려받기", csv.encode("utf-8-sig"), file_name="mo_energies.csv", mime="text/csv")

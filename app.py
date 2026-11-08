"""QuantumLens — 분자 오비탈을 보는 교육용 웹앱.

실행: streamlit run app.py

화면 흐름은 이 파일, 계산은 ``quantumlens`` 패키지(Python)에서 합니다.
3D 뷰어와 에너지 준위도는 Python이 계산한 결과를 그리기만 하는 React 컴포넌트입니다.
"""

from __future__ import annotations

import html
import json
import urllib.parse
from dataclasses import replace

import numpy as np
import streamlit as st
from rdkit import Chem

from quantumlens.analysis.describe import describe
from quantumlens.chem import library, pubchem
from quantumlens.chem.molecule import Molecule, MoleculeError, from_molblock, from_smiles, from_xyz
from quantumlens.content.glossary import tip
from quantumlens.eht.params import ELEMENTS
from quantumlens.field.grid import compute_grid
from quantumlens.field.isosurface import phase_surfaces
from quantumlens.pipeline import Analysis, analyze
from quantumlens.ui import panels, theme
from quantumlens.ui.payload import (
    atoms_payload,
    bonds_payload,
    caption_html,
    charged_label,
    fragments_payload,
    levels_payload,
    orbital_symbol_html,
    pretty_formula,
)
from quantumlens.ui.style import DEFAULT_ISO, DEFAULT_PALETTE, PALETTES, QUALITY
from quantumlens.ui.viewer import level_diagram, orbital_viewer

st.set_page_config(page_title="QuantumLens", page_icon="◐", layout="wide", initial_sidebar_state="auto")


# =============================================================================
# Cached computation (all keyed by a JSON "spec" that fully describes the input)
# =============================================================================
def _spec_key(spec: dict) -> str:
    return json.dumps(spec, sort_keys=True, ensure_ascii=False)


@st.cache_resource(max_entries=24, show_spinner=False)
def load_molecule(spec_json: str) -> Molecule:
    spec = json.loads(spec_json)
    kind = spec["kind"]
    if kind == "library":
        mol = library.load(spec["key"])
    elif kind == "smiles":
        mol = from_smiles(spec["smiles"], name=spec.get("name", ""))
    elif kind == "pubchem":
        mol = pubchem.fetch(spec["name"])
    elif kind == "file":
        text = spec["text"]
        if spec["filename"].lower().endswith(".xyz"):
            mol = from_xyz(text, charge=int(spec.get("charge") or 0), name=spec["filename"])
        else:
            mol = from_molblock(text, name=spec["filename"])
    else:
        raise MoleculeError("알 수 없는 입력입니다.")
    return mol


@st.cache_resource(max_entries=24, show_spinner=False)
def get_analysis(spec_json: str, charge: int) -> Analysis:
    mol = load_molecule(spec_json)
    if charge != mol.charge:
        mol = replace(mol, charge=charge)
    return analyze(mol)


@st.cache_resource(max_entries=16, show_spinner=False)
def get_grid(spec_json: str, charge: int, k: int, quality: str):
    return compute_grid(get_analysis(spec_json, charge).eht, k, quality)


@st.cache_data(max_entries=64, show_spinner=False)
def get_meshes(spec_json: str, charge: int, k: int, quality: str, iso: float) -> tuple[dict, dict]:
    pos, neg = phase_surfaces(get_grid(spec_json, charge, k, quality), iso)
    return pos.to_payload(), neg.to_payload()


# =============================================================================
# Session state & share links
# =============================================================================
def init_state() -> None:
    if "spec" in st.session_state:
        return
    qp = st.query_params
    spec: dict = {"kind": "library", "key": library.DEFAULT_KEY}
    if qp.get("mol") in library.ENTRIES:
        spec = {"kind": "library", "key": qp["mol"]}
    elif qp.get("smiles"):
        spec = {"kind": "smiles", "smiles": qp["smiles"]}
    elif qp.get("q"):
        spec = {"kind": "pubchem", "name": qp["q"]}
    st.session_state.spec = spec
    st.session_state.src_mode = "라이브러리" if spec["kind"] == "library" else "직접 입력"
    st.session_state.mo_choice = {}
    st.session_state.charge_choice = {}
    try:
        if "mo" in qp:
            st.session_state.mo_choice[_spec_key(spec)] = int(qp["mo"]) - 1
        if "charge" in qp:
            st.session_state.charge_choice[_spec_key(spec)] = int(qp["charge"])
        if "iso" in qp:
            st.session_state.iso = float(np.clip(float(qp["iso"]), 0.005, 0.12))
    except ValueError:
        pass
    st.session_state.present = qp.get("present") == "1"


def share_params(spec: dict, k: int, charge: int, default_charge: int, iso: float) -> dict[str, str]:
    params: dict[str, str] = {}
    if spec["kind"] == "library":
        params["mol"] = spec["key"]
    elif spec["kind"] == "smiles":
        params["smiles"] = spec["smiles"]
    elif spec["kind"] == "pubchem":
        params["q"] = spec["name"]
    if charge != default_charge:
        params["charge"] = str(charge)
    params["mo"] = str(k + 1)
    if abs(iso - DEFAULT_ISO) > 1e-9:
        params["iso"] = f"{iso:g}"
    return params


def share_popover(spec: dict, params: dict[str, str]) -> None:
    with st.popover("공유", width="stretch"):
        if spec["kind"] == "file":
            st.caption("업로드한 파일은 링크로 공유할 수 없습니다. 뷰어의 저장 버튼으로 PNG를 내려받아 공유해 주세요.")
            return
        base = (st.context.url or "").split("?")[0]
        url = f"{base}?{urllib.parse.urlencode(params)}"
        st.code(url, language=None, wrap_lines=True)
        try:
            import segno

            svg = segno.make(url, error="m").svg_inline(scale=4, dark="#1b2027")
            st.html(f'<div class="ql-qr">{svg}</div>')
        except Exception:  # QR is optional
            pass
        st.caption("링크를 열면 같은 분자, 같은 오비탈, 같은 등치값으로 열립니다.")


def set_spec(spec: dict) -> None:
    st.session_state.spec = spec


# =============================================================================
# Sidebar
# =============================================================================
def sidebar() -> dict:
    spec = st.session_state.spec
    with st.sidebar:
        st.html('<div class="ql-brand"><b>QuantumLens</b><span>분자 오비탈 보기</span></div>')

        mode = st.segmented_control(
            "분자 고르기", ["라이브러리", "직접 입력"], key="src_mode", label_visibility="collapsed"
        ) or "라이브러리"

        if mode == "라이브러리":
            current = spec["key"] if spec["kind"] == "library" else None
            for cat in library.CATEGORIES:
                wkey = f"pill_{cat}"
                entries = library.entries_in(cat)
                desired = current if current in {e.key for e in entries} else None
                if st.session_state.get(wkey) != desired:
                    st.session_state[wkey] = desired
                st.html(f'<div class="ql-cat">{cat}</div>')
                st.pills(
                    cat, [e.key for e in entries], format_func=lambda k: library.ENTRIES[k].label,
                    key=wkey, label_visibility="collapsed", on_change=_on_pill, args=(cat,),
                )
        else:
            with st.form("custom_input", border=False):
                text = st.text_input(
                    "SMILES 또는 영문 이름",
                    placeholder="예: CC(=O)O, caffeine, naphthalene",
                    help="SMILES로 해석되면 RDKit으로 3D 구조를 만들고, 아니면 PubChem에서 영문 이름으로 찾습니다.",
                )
                submitted = st.form_submit_button("불러오기", width="stretch")
            if submitted and text.strip():
                text = text.strip()
                if Chem.MolFromSmiles(text) is not None:
                    set_spec({"kind": "smiles", "smiles": text})
                else:
                    set_spec({"kind": "pubchem", "name": text})
            upload = st.file_uploader("구조 파일", type=["xyz", "mol", "sdf"], help="XYZ, MOL, SDF 파일의 3D 좌표를 그대로 씁니다.")
            if upload is not None:
                file_spec = {"kind": "file", "filename": upload.name, "text": upload.getvalue().decode("utf-8", errors="replace")}
                if st.session_state.get("last_upload") != upload.file_id:
                    st.session_state.last_upload = upload.file_id
                    set_spec(file_spec)
            st.caption("사용할 수 있는 원소: " + " ".join(ELEMENTS) + f" · 수소 포함 {48}개 원자까지")

        st.html('<div class="ql-side-h">표시</div>')
        iso = st.slider(
            "등치값", 0.005, 0.12, value=st.session_state.get("iso", DEFAULT_ISO), step=0.005, format="%.3f",
            help=tip("isovalue"), key="iso",
        )
        opacity = st.slider("불투명도", 0.3, 1.0, 0.85, 0.05, key="opacity")
        palette = st.selectbox("위상 색", list(PALETTES), index=list(PALETTES).index(DEFAULT_PALETTE), key="palette", help=tip("phase"))
        quality_label = st.segmented_control("품질", list(QUALITY), default="보통", key="quality") or "보통"
        c1, c2 = st.columns(2)
        labels = c1.toggle("원자 번호", value=False, key="labels")
        axes = c2.toggle("좌표축", value=True, key="axes")

        st.html('<div class="ql-side-h">수업</div>')
        present = st.toggle("발표 모드", key="present", help="뷰어를 크게, 배경을 어둡게 바꾸고 아래 탭을 숨깁니다. 뷰어의 전체 화면 버튼과 함께 쓰면 좋습니다.")

    return {
        "iso": float(iso),
        "opacity": float(opacity),
        "palette": PALETTES[palette],
        "quality": QUALITY[quality_label],
        "labels": bool(labels),
        "axes": bool(axes),
        "present": bool(present),
    }


def _on_pill(cat: str) -> None:
    value = st.session_state.get(f"pill_{cat}")
    if value is None:
        return  # clicking the active pill again: keep the current molecule
    st.session_state.spec = {"kind": "library", "key": value}


# =============================================================================
# Main view
# =============================================================================
def header(analysis: Analysis, spec: dict, label: str) -> None:
    mol, res = analysis.molecule, analysis.eht
    name = mol.name or label
    if spec["kind"] == "library":
        name = library.ENTRIES[spec["key"]].name
    secondary = label
    if name == label or not mol.name:
        # no proper name (SMILES / file input): formula as title, input string as subtitle
        name, secondary = label, (mol.smiles if mol.smiles not in ("", "-") else "")
    title = f'<h1>{html.escape(name)}</h1><span class="formula">{html.escape(secondary)}</span>'
    meta = [
        f"원자 <b>{mol.n_atoms}</b>",
        f"원자가 전자 <b>{res.n_electrons}</b>",
        f"홀전자 <b>{res.unpaired_electrons}</b>",
    ]
    if analysis.bond_order is not None:
        bo = analysis.bond_order
        meta.append(f'결합 차수 <b>{bo:g}</b>')
    if mol.charge:
        meta.append(f"전하 <b>{mol.charge:+d}</b>")
    if mol.source:
        meta.append(html.escape(mol.source))
    st.html(f'<div class="ql-head">{title}</div><div class="ql-meta">{"".join(f"<span>{m}</span>" for m in meta)}</div>')
    if spec["kind"] == "library":
        st.html(f'<div class="ql-note">{html.escape(library.ENTRIES[spec["key"]].note)}</div>')
    for w in mol.warnings:
        st.caption(w)


def _consume(event: dict | None, slot: str) -> dict | None:
    """Return a component event once (dedupe by nonce)."""
    if not event or not isinstance(event, dict):
        return None
    nonce = event.get("nonce")
    if st.session_state.get(slot) == nonce:
        return None
    st.session_state[slot] = nonce
    return event


@st.fragment
def orbital_area(spec_json: str, charge: int, label: str, opts: dict) -> None:
    analysis = get_analysis(spec_json, charge)
    res = analysis.eht
    choice_key = f"{spec_json}|{charge}"
    k = int(np.clip(st.session_state.mo_choice.get(choice_key, st.session_state.mo_choice.get(spec_json, analysis.default_mo)), 0, res.n_mo - 1))

    present = opts["present"]
    height = 720 if present else 580
    left, right = st.columns([2.25, 1], gap="medium")
    widget_id = abs(hash(choice_key)) % 10**8

    with right:
        event = level_diagram(
            key=f"levels_{widget_id}",
            height=height,
            moleculeKey=choice_key,
            levels=levels_payload(analysis),
            selected=k,
            homo=res.homo,
            lumo=res.lumo,
            fragments=fragments_payload(analysis),
            dark=False,
        )
    new_k = None
    if (ev := _consume(event, f"nonce_levels_{widget_id}")) and ev.get("type") == "select":
        new_k = int(ev["k"])

    with left:
        with st.spinner("오비탈을 그리는 중…"):
            pos, neg = get_meshes(spec_json, charge, k, opts["quality"], opts["iso"])
        event = orbital_viewer(
            key=f"viewer_{widget_id}",
            height=height,
            moleculeKey=choice_key,
            atoms=atoms_payload(analysis),
            bonds=bonds_payload(analysis),
            positive=pos,
            negative=neg,
            colors=opts["palette"],
            opacity=opts["opacity"],
            showLabels=opts["labels"],
            showAxes=opts["axes"],
            dark=present,
            caption=caption_html(analysis, k, label),
            fileName=f"{label}_{analysis.mo_title(k)}".replace(" ", "_"),
        )
    if (ev := _consume(event, f"nonce_viewer_{widget_id}")) and ev.get("type") == "step":
        new_k = int(np.clip(k + int(ev["delta"]), 0, res.n_mo - 1))

    if new_k is not None and new_k != k:
        st.session_state.mo_choice[choice_key] = new_k
        st.rerun(scope="fragment")

    # --- selected orbital summary ------------------------------------------
    ch = analysis.characters[k]
    e = res.energies[k]
    facts = [
        f"<b>{html.escape(analysis.mo_title(k))}</b>",
        f"MO {k + 1} / {res.n_mo}",
        f"{'−' if e < 0 else ''}{abs(e):.2f} eV",
        f"전자 {int(res.occupations[k])}개",
        ch.bonding_ko,
    ]
    if ch.parity:
        facts.append(f"{ch.parity} 대칭")
    group = next(g for g in res.degenerate_groups if k in g)
    if len(group) > 1:
        facts.append(f"{len(group)}중 축퇴")
    spec = json.loads(spec_json)
    params = share_params(spec, k, charge, load_molecule(spec_json).charge, opts["iso"])
    if spec["kind"] != "file":
        st.query_params.from_dict(params)

    with left:
        info, share = st.columns([5, 1], vertical_alignment="top")
        info.html(
            f'<div class="ql-mo"><span class="sym">{orbital_symbol_html(analysis, k)}</span>'
            f'<span class="facts">{"".join(f"<span>{f}</span>" for f in facts)}</span></div>'
            f'<div class="ql-desc">{" ".join(html.escape(s) for s in describe(analysis, k))}</div>'
        )
        with share:
            share_popover(spec, params)

    if present:
        return

    # --- detail tabs ------------------------------------------------------------
    tabs = st.tabs(["구성", "결합", "단면", "용어", "계산 정보"])
    with tabs[0]:
        panels.composition(analysis, k)
    with tabs[1]:
        panels.bonding(analysis, k)
    with tabs[2]:
        panels.slice_view(analysis, k, opts["palette"], key=f"{widget_id}_{k}")
    with tabs[3]:
        panels.glossary()
    with tabs[4]:
        panels.method(analysis)


def main() -> None:
    init_state()
    opts = sidebar()
    theme.inject(presentation=opts["present"])

    spec = st.session_state.spec
    spec_json = _spec_key(spec)
    try:
        with st.spinner("구조와 오비탈을 계산하는 중…"):
            mol = load_molecule(spec_json)
    except MoleculeError as exc:
        st.error(str(exc))
        prev = st.session_state.get("last_good_spec")
        if prev and prev != spec:
            if st.button("이전 분자로 돌아가기"):
                st.session_state.spec = prev
                st.rerun()
        return
    except Exception as exc:  # unexpected RDKit / network failures
        st.error(f"구조를 불러오지 못했습니다: {exc}")
        return

    # charge control lives next to the molecule (per molecule)
    charge_key = f"charge_{abs(hash(spec_json)) % 10**8}"
    default_charge = st.session_state.charge_choice.get(spec_json, mol.charge)
    with st.sidebar:
        st.html('<div class="ql-side-h">전자 수</div>')
        charge = st.number_input(
            "전하", min_value=-3, max_value=3, value=int(default_charge), step=1, key=charge_key,
            help="결합 길이는 그대로 두고 전자 수만 바꿉니다. 예: O₂⁺, O₂⁻의 결합 차수 비교.",
        )

    try:
        analysis = get_analysis(spec_json, int(charge))
    except (MoleculeError, ValueError) as exc:
        st.error(str(exc))
        return
    st.session_state.last_good_spec = spec

    base_label = library.ENTRIES[spec["key"]].label if spec["kind"] == "library" else pretty_formula(mol.formula)
    label = charged_label(base_label, int(charge))

    if opts["present"]:
        st.html('<div class="ql-present"></div>')
    header(analysis, spec, label)
    orbital_area(spec_json, int(charge), label, opts)

    st.html(
        '<div class="ql-small" style="margin-top:2rem">확장 휘켈(EHT) 계산에 기반한 정성적 그림입니다. '
        "오비탈 모양과 에너지 순서를 이해하는 데 쓰고, 수치는 참고용으로 보세요.</div>"
    )


main()

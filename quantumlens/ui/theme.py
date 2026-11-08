"""Page-level CSS. Kept small: Streamlit's theme config does most of the work."""

from __future__ import annotations

import streamlit as st

_FONT = "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"

_CSS = """
<style>
  @import url("%(font)s");
  :root { --ql-ink:#1b2027; --ql-ink2:#4b5360; --ql-muted:#8a919c; --ql-hair:#e6e8eb; --ql-band:#f4f5f7; }
  html, body, [class*="st-"] { font-feature-settings: "tnum" 1; }
  header[data-testid="stHeader"] { background: transparent; height: 0; }
  /* hide the app menu but keep the toolbar: it holds the button that re-opens a collapsed sidebar */
  [data-testid="stMainMenu"], [data-testid="stAppDeployButton"], [data-testid="stDecoration"], footer { display: none !important; }
  .block-container { padding-top: 1.6rem; padding-bottom: 3rem; max-width: 1480px; }
  section[data-testid="stSidebar"] .block-container { padding-top: 1.2rem; }

  /* brand */
  .ql-brand { display:flex; align-items:baseline; gap:.5rem; margin: 0 0 .9rem; }
  .ql-brand b { font-size: 1.12rem; letter-spacing: -.01em; }
  .ql-brand span { color: var(--ql-muted); font-size: .82rem; }
  .ql-side-h { font-size: .74rem; font-weight: 650; letter-spacing: .06em; color: var(--ql-muted);
               text-transform: uppercase; margin: 1.1rem 0 .35rem; }
  .ql-cat { font-size: .8rem; color: var(--ql-ink2); margin: .55rem 0 .15rem; }

  /* molecule header */
  .ql-head { display:flex; align-items:baseline; gap:.75rem; flex-wrap:wrap; margin-bottom:.15rem; }
  .ql-head h1 { font-size: 1.7rem; font-weight: 680; letter-spacing: -.02em; margin:0; padding:0; }
  .ql-head .formula { font-size: 1.15rem; color: var(--ql-ink2); }
  .ql-meta { color: var(--ql-muted); font-size: .86rem; display:flex; gap:1.1rem; flex-wrap:wrap; margin-bottom:.7rem; }
  .ql-meta b { color: var(--ql-ink); font-weight: 600; }
  .ql-note { border-left: 2px solid var(--ql-ink); padding: .1rem 0 .1rem .8rem; color: var(--ql-ink2);
             font-size: .93rem; line-height: 1.6; margin: .2rem 0 1rem; max-width: 62rem; }

  /* MO strip below the viewer */
  .ql-mo { display:flex; align-items:baseline; gap:.9rem; flex-wrap:wrap; margin: .65rem 0 .25rem; }
  .ql-mo .sym { font-family: "Times New Roman", "Noto Serif", serif; font-style: italic; font-size: 1.9rem; line-height:1; }
  .ql-mo .sym sub { font-style: normal; font-family: inherit; font-size: .9rem; }
  .ql-mo .facts { color: var(--ql-ink2); font-size: .92rem; display:flex; gap: .9rem; flex-wrap:wrap; }
  .ql-mo .facts b { color: var(--ql-ink); font-weight: 620; }
  .ql-desc { color: var(--ql-ink2); line-height: 1.65; font-size: .94rem; max-width: 60rem; margin-bottom: .4rem; }

  /* bars */
  .ql-bars { display:grid; grid-template-columns: minmax(5.5rem, max-content) 1fr 3.6rem; gap:.35rem .8rem;
             align-items:center; font-size:.86rem; max-width: 38rem; }
  .ql-bars .name { color: var(--ql-ink); }
  .ql-bars .name small { color: var(--ql-muted); margin-left:.25rem; }
  .ql-bars .track { height: 8px; background: var(--ql-band); border-radius: 2px; position: relative; overflow:hidden; }
  .ql-bars .fill { position:absolute; top:0; bottom:0; border-radius: 2px; }
  .ql-bars .val { text-align:right; color: var(--ql-ink2); }
  .ql-bars.diverging .track::after { content:""; position:absolute; left:50%%; top:-2px; bottom:-2px; width:1px; background: var(--ql-muted); }

  .ql-small { color: var(--ql-muted); font-size: .82rem; line-height: 1.55; }
  .ql-term { padding: .7rem 0; border-bottom: 1px solid var(--ql-hair); }
  .ql-term b { display:block; margin-bottom:.2rem; }
  .ql-term p { margin: 0; color: var(--ql-ink2); line-height: 1.6; font-size: .92rem; }
  .ql-term p.more { color: var(--ql-muted); font-size: .85rem; margin-top: .25rem; }
  .ql-qr svg { width: 148px; height: 148px; }

  [data-testid="stTabs"] button p { font-size: .92rem; }

  /* presentation mode */
  .ql-present .ql-head h1 { font-size: 2.3rem; }
  .ql-present .ql-note, .ql-present .ql-desc { font-size: 1.1rem; }
</style>
"""


def inject(presentation: bool = False) -> None:
    st.html(_CSS % {"font": _FONT})
    if presentation:
        st.html(
            "<style>.block-container{max-width:none;padding-left:2rem;padding-right:2rem}"
            ".ql-head h1{font-size:2.3rem}.ql-note,.ql-desc{font-size:1.1rem}"
            ".ql-mo .sym{font-size:2.4rem}.ql-mo .facts{font-size:1.05rem}</style>"
        )

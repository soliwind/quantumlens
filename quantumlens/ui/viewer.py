"""Python side of the React/three.js viewer component.

The React code only draws what Python sends (atoms, bonds, isosurface meshes,
energy levels). All chemistry and geometry is computed in Python.
"""

from __future__ import annotations

import os
from pathlib import Path
from typing import Any

import streamlit.components.v1 as components

_BUILD = Path(__file__).resolve().parents[2] / "components" / "mo_viewer" / "frontend" / "build"
_DEV_URL = os.environ.get("QUANTUMLENS_VIEWER_DEV_URL")  # e.g. http://localhost:3001

if _DEV_URL:
    _component = components.declare_component("quantumlens_mo_viewer", url=_DEV_URL)
else:
    if not (_BUILD / "index.html").exists():
        raise RuntimeError(
            "뷰어 컴포넌트 빌드가 없습니다. components/mo_viewer/frontend 에서 `npm install && npm run build` 를 실행해 주세요."
        )
    _component = components.declare_component("quantumlens_mo_viewer", path=str(_BUILD))


def orbital_viewer(*, key: str, **props: Any) -> dict | None:
    return _component(kind="viewer", key=key, default=None, **props)


def level_diagram(*, key: str, **props: Any) -> dict | None:
    return _component(kind="levels", key=key, default=None, **props)

"""Visual constants shared by the Streamlit layer and the viewer payload."""

from __future__ import annotations

# Muted CPK-like colors; tuned so that atoms stay readable next to orbital lobes.
ATOM_STYLE: dict[str, tuple[str, float]] = {
    "H":  ("#eceef1", 0.24),
    "He": ("#cfeff0", 0.28),
    "Li": ("#b48ad6", 0.40),
    "Be": ("#a2cf63", 0.36),
    "B":  ("#e7a77d", 0.34),
    "C":  ("#4f555e", 0.34),
    "N":  ("#5a73d4", 0.33),
    "O":  ("#e0574c", 0.33),
    "F":  ("#93cf6e", 0.32),
    "Na": ("#a17fd6", 0.42),
    "Mg": ("#86bf55", 0.40),
    "Si": ("#d3b48c", 0.38),
    "P":  ("#ee8c3c", 0.37),
    "S":  ("#e3c34d", 0.37),
    "Cl": ("#6dc36a", 0.36),
    "Br": ("#a6503a", 0.38),
    "I":  ("#8d4aa0", 0.40),
}

PALETTES: dict[str, dict[str, str]] = {
    "청·적": {"positive": "#3f7fd0", "negative": "#dd6b4f"},
    "청·주황 (색각 친화)": {"positive": "#1f77b4", "negative": "#f0a01e"},
    "보라·초록": {"positive": "#7a5ba8", "negative": "#3e9b74"},
}
DEFAULT_PALETTE = "청·적"

QUALITY = {"빠르게": "draft", "보통": "normal", "선명하게": "high"}
DEFAULT_ISO = 0.05

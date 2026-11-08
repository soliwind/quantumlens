"""Fetch 3D structures from PubChem by (English) compound name."""

from __future__ import annotations

import json
import urllib.error
import urllib.parse
import urllib.request

from .molecule import Molecule, MoleculeError, from_molblock, from_smiles

_BASE = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name"
_TIMEOUT = 8
_HEADERS = {"User-Agent": "QuantumLens/0.2 (educational MO viewer)"}


def _get(url: str) -> bytes:
    req = urllib.request.Request(url, headers=_HEADERS)
    with urllib.request.urlopen(req, timeout=_TIMEOUT) as resp:
        return resp.read()


def fetch(name: str) -> Molecule:
    name = (name or "").strip()
    if not name:
        raise MoleculeError("검색할 이름을 입력해 주세요.")
    quoted = urllib.parse.quote(name)
    title = name
    try:
        props = json.loads(_get(f"{_BASE}/{quoted}/property/Title,IsomericSMILES,SMILES/JSON"))
        record = props["PropertyTable"]["Properties"][0]
        title = record.get("Title", name)
        smiles = record.get("IsomericSMILES") or record.get("SMILES") or ""
    except urllib.error.HTTPError as exc:
        if exc.code in (400, 404):  # PubChem answers 400 for strings it cannot parse as a name
            raise MoleculeError(
                f"'{name}'을(를) SMILES로 해석하지 못했고, PubChem에서도 찾지 못했습니다. "
                "SMILES라면 괄호와 고리 번호를, 이름이라면 영문 철자를 확인해 주세요."
            ) from exc
        raise MoleculeError("PubChem 검색 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.") from exc
    except (urllib.error.URLError, TimeoutError, OSError) as exc:
        raise MoleculeError("PubChem에 연결하지 못했습니다. 인터넷 연결을 확인하거나 SMILES로 입력해 주세요.") from exc
    except (KeyError, IndexError, ValueError) as exc:
        raise MoleculeError("PubChem 응답을 해석하지 못했습니다.") from exc

    # Prefer PubChem's own 3D conformer; fall back to embedding the SMILES.
    try:
        sdf = _get(f"{_BASE}/{quoted}/SDF?record_type=3d").decode("utf-8", errors="replace")
        mol = from_molblock(sdf, name=title, source="PubChem 3D 구조")
        mol.smiles = smiles
        return mol
    except MoleculeError:
        raise
    except Exception as exc:
        if not smiles:
            raise MoleculeError("PubChem에 3D 구조가 없습니다.") from exc
        return from_smiles(smiles, name=title, source="PubChem SMILES")

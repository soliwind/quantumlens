# QuantumLens

웹 브라우저에서 분자 오비탈(MO)을 3D로 보는 교육용 앱입니다. 일반화학 수준의 MO 이론을 기준으로 만들었고, 고등학생도 볼 수 있도록 용어 설명을 함께 넣었습니다.

- 분자를 고르면 바로 확장 휘켈(EHT) 계산을 하고, 선택한 오비탈을 3D 등치면으로 보여 줍니다.
- 에너지 준위도에서 준위를 누르면 해당 오비탈로 바뀝니다. 이원자 분자는 원자 오비탈과 이어지는 상관 도표로 그립니다.
- 오비탈마다 σ/π, 결합성/반결합성, HOMO/LUMO를 판정하고, 무엇을 보면 되는지 문장으로 설명합니다.

## 실행

```bash
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt
streamlit run app.py
```

3D 뷰어의 빌드 결과물(`components/mo_viewer/frontend/build/`)이 저장소에 포함되어 있어서, 실행할 때 Node.js는 필요하지 않습니다.

## 기능

| 영역 | 내용 |
|---|---|
| 분자 라이브러리 | 동핵·이핵 이원자, 작은 다원자, π 공액계 27종. 분자마다 '볼 포인트' 한두 줄 |
| 직접 입력 | SMILES(RDKit으로 3D 구조 생성), 영문 이름(PubChem 3D 구조), XYZ/MOL/SDF 파일 |
| 3D 뷰어 | 위상별 등치면, 결합 차수가 보이는 ball-and-stick, 좌표축, 원자 번호, PNG 저장, 전체 화면, ←/→ 키로 오비탈 이동 |
| 에너지 준위도 | 축퇴 준위를 나란히 표시, 전자 화살표(훈트 규칙), HOMO–LUMO 간격, 이원자 분자의 AO–MO 상관 도표 |
| 오비탈 해설 | σ/π, g/u, 결합성/반결합성/비결합성 판정과 자동 설명문, 동핵 이원자의 결합 차수 |
| 분석 탭 | 원자별 기여도, 결합마다 겹침, 2D 단면(마디선 표시), 용어집, 계산 정보와 MO 목록 CSV |
| 수업 도구 | 발표 모드, 같은 화면으로 열리는 공유 링크와 QR 코드, 전하 조절(O₂⁺, O₂⁻ 비교 등) |

## 구조

계산과 화면 흐름은 모두 Python이 맡습니다. React 컴포넌트는 Python이 계산해서 보낸 메시와 준위를 그리기만 합니다.

```
app.py                         Streamlit 화면 구성
quantumlens/
  eht/        params.py        EHT 매개변수 (H_ii, ζ)
              basis.py         슬레이터형 원자 오비탈과 실공간 계산
              integrals.py     2중심 중첩 적분 (장구면 좌표 수치 적분 + Slater–Koster 회전)
              solver.py        해밀토니안, HC = SCE, 전자 배치(훈트 규칙)
  chem/       molecule.py      SMILES/파일/좌표 → 3D 구조, 표준 방향 정렬
              library.py       교육용 분자 라이브러리
              pubchem.py       PubChem 이름 검색
  analysis/   orbitals.py      멀리켄 기여도, σ/π·g/u·결합성 판정, 결합 차수
              describe.py      오비탈 설명문
  field/      grid.py          3D 격자와 2D 단면 위 Ψ
              isosurface.py    marching cubes 등치면
  content/    glossary.py      용어 설명
  ui/                          Streamlit 패널, 테마, 컴포넌트 연결
components/mo_viewer/frontend/ React + three.js 뷰어와 준위도 (빌드 결과 포함)
tests/                         검증 테스트
```

## 계산 방법

1. **구조**: 라이브러리의 이원자 분자는 실험 결합 길이를 씁니다. 그 밖의 분자는 RDKit ETKDG로 3D 구조를 만들고 MMFF(없으면 UFF)로 최적화합니다. 이후 관성 주축에 맞춰 정렬합니다. 선형 분자는 z축 위에, 평면 분자는 xy 평면에 놓이므로 π 오비탈이 교과서와 같은 방향으로 나옵니다.
2. **EHT**: 원자가 s·p 슬레이터형 오비탈을 기저로 씁니다.
   - 중첩 적분은 장구면 좌표에서 수치 적분합니다.
   - 해밀토니안은 가중 Wolfsberg–Helmholz 식(K = 1.75)으로 만듭니다.
   - 일반화 고유값 문제 HC = SCE를 풉니다.
   - 매개변수는 YAeHMOP(RDKit 내장)의 Hoffmann 계열 표준값입니다.
3. **3D 그림**: 계산에 쓴 바로 그 기저 함수로 격자 위의 Ψ(r)를 구합니다(원자 단위). marching cubes로 +/− 등치면을 만듭니다.
4. **해석**:
   - σ/π는 결합축 또는 분자 평면을 기준으로, g/u는 반전 대칭으로 판정합니다.
   - 결합성 여부는 원자 사이 겹침 인구의 부호로 판단합니다.
   - 동핵 이원자는 교과서 규칙(σg·πu 결합성)을 따릅니다.

## 검증

```bash
pip install -r requirements-dev.txt
pytest
```

- **RDKit 일치**: 같은 구조에서 RDKit `rdEHTTools`의 중첩 행렬(1e-4 이내), 해밀토니안, MO 에너지(0.05 eV 이내)와 비교합니다.
- **해석해**: 1s–1s, 2pπ–2pπ 중첩을 닫힌 식과 비교하고, 회전해도 결과가 같은지 확인합니다.
- **정규화**: 3D 격자 위에서 ∫|Ψ|² dV = 1인지 확인합니다. 단위나 정규화가 어긋나면 실패합니다.
- **교과서 결과**:
  - 이원자 분자 8종의 결합 차수와 홀전자 수(O₂·B₂ 상자성)
  - N₂의 σ2p > π2p 순서
  - 벤젠 π의 1-2-2-1 축퇴
  - H₂O·NH₃·H₂CO의 비결합성 HOMO
  - BH₃의 빈 2p LUMO
- **등치면**: 닫혀 있고 바깥쪽을 향하는지(부호 있는 부피), π 로브가 분자 평면 양쪽에 있는지 확인합니다.

## 한계

- EHT는 전자 사이 반발을 직접 계산하지 않는 정성 모델입니다. 오비탈 모양과 에너지 순서를 이해하는 데 쓰고, 에너지 값을 실험값처럼 해석하지 않는 것이 좋습니다.
- 지원하는 원소는 H, He, Li, Be, B, C, N, O, F, Na, Mg, Si, P, S, Cl, Br, I(s·p 원자가 껍질)이고, 수소를 포함해 48개 원자까지 계산합니다.
- σ/π 판정은 선형·평면 분자에서만 합니다. 나머지 분자에서는 결합성 여부만 표시합니다.
- 전하를 바꿔도 구조는 다시 최적화하지 않습니다.

## 뷰어 개발

```bash
cd components/mo_viewer/frontend
npm install
npm run dev        # http://localhost:3001
# 다른 터미널에서
QUANTUMLENS_VIEWER_DEV_URL=http://localhost:3001 streamlit run app.py
npm run build      # 배포 전 build/ 갱신
```

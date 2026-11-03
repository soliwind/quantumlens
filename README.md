# QuantumLens

교육용 3D 분자 오비탈 위상 시각화기입니다. 단일 `app.py`와 `requirements.txt`로 실행할 수 있습니다.

## 실행

```bash
python -m venv .venv
# macOS/Linux
source .venv/bin/activate
# Windows PowerShell: .venv\Scripts\Activate.ps1

python -m pip install -r requirements.txt
streamlit run app.py
```

기본 SMILES는 벤젠 `c1ccccc1`입니다. 사용할 수 있는 예제는 `CCO`(에탄올), `O`(물)입니다.

## 모델 범위와 한계

- 좌표: RDKit ETKDGv3; 가능한 경우 MMFF 또는 UFF로 구조 최적화를 시도합니다.
- MO 에너지: RDKit `rdEHTTools.RunMol(..., keepOverlapAndHamiltonianMatrices=True)`의 Extended Hückel Theory 계산 결과입니다.
- MO 계수: 보존된 해밀토니안/중첩 행렬로부터 일반화 고유값 문제 `H C = S C E`를 풀어 복원합니다. 복원 에너지가 RDKit 결과와 맞지 않으면 렌더링을 중단합니다.
- 3D 기저 함수: RDKit의 정확한 EHT AO 메타데이터가 공개 반환값에 포함되지 않으므로, 정규화된 STO-inspired 함수를 이용한 **정성적 근사**입니다. 에너지와 파동함수 모양의 계산 정확도는 구분해야 합니다.
- AO 매핑은 현재 H, B, C, N, O, F, Si, P, S, Cl, Br, I에 한정됩니다. 다른 원소는 잘못된 오비탈 그림을 만들지 않도록 계산을 거부합니다. AO 개수 검사는 행렬 차원만 확인하며 순서를 독립적으로 입증하지 않습니다.

RDKit EHT API 문서: https://www.rdkit.org/docs/source/rdkit.Chem.rdEHTTools.html

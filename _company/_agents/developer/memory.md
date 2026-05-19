# 💻 Developer (Lead Engineer) 개인 메모리

_Developer 에이전트만 읽고 쓰는 개인 노트. 학습·교훈·자주 쓰는 패턴이 누적됩니다._

## 학습 기록

- [2026-04-30] 📥 새 지식 입수 — **4월30일  - 중간 평가**: [https://play.google.com/apps/testing/com.zerodopamine.app](https://play.google.com/apps/testing/com.zerodopamine.app) (출처: 00_Raw\2026-05-01\4월30일_-_중간_평가_057752cc2c94828fa5f881c8ed8dd86b.md)
- [2026-05-06] Writer와 Designer가 제공한 Visual Sign-off 체크리스트를 기반으로, 영상 도입부 디자인 승인 프로세스가 자동으로 기록되고 관리되는 통합 QA 시스템(API/데이터 파이프라인)을 최종 설계하고 구현 계획을 수립하라. → 산출물 sessions/2026-05-06T00-39/developer.md
- [2026-05-06] Designer와 확정된 Visual Sign-off 체크리스트 및 데이터 모델(VisualAsset, SignOffChecklist)을 기반으로, 영상 도입부 디자인 승인 프로세스가 자동으로 기록되고 관리되는 통합 QA 시스템(API/데이터 파이프라인)의 실제 구현 로드맵과 초기 코드를 작성하라. → 산출물 sessions/2026-05-06T01-09/developer.md
- [2026-05-06] Designer와 사전에 합의된 Visual Sign-off 체크리스트 및 데이터 모델(VisualAsset, SignOffChecklist)을 기반으로, 영상 도입부 디자인 승인 프로세스가 자동으로 기록되고 관리되는 통합 QA/가격 책정 파이프라인 설계(API 엔드포인트 및 데이터 흐름)를 시작하라. → 산출물 sessions/2026-05-06T22-29/developer.md
- [2026-05-06] 정의된 API 엔드포인트(`POST /api/qa/submit`, `/api/pricing/calculate`)에 맞춰 실제 백엔드 시스템(FastAPI 및 PostgreSQL 스키마) 구현을 즉시 시작하고, `SignOffChecklist`를 주요 필드로 정의하여 데이터 모델을 확정하라. → 산출물 sessions/2026-05-06T22-59/developer.md
- [2026-05-06] Business가 요청하는 Trust Capital Mapping Table 구조에 맞춰 PostgreSQL 스키마(`pricing_models`, `visual_assets`, `sign_off_checklists` 테이블)의 최종 필드를 확정하고, 초기 데이터 입력 프로세스(`Visual_QA_Log` 통합)에 필요한 최소 필수 필드 목록을 정의한다. → 산출물 sessions/2026-05-06T23-30/developer.md
- [2026-05-07] 확정된 PostgreSQL 스키마(`pricing_models`, `visual_assets`, `sign_off_checklists`)를 기반으로, `POST /api/qa/submit` 및 `/api/pricing/calculate` 엔드포인트의 FastAPI 구현 및 데이터 흐름 코드를 즉시 시작하여 시스템을 구현합니다. → 산출물 sessions/2026-05-07T00-00/developer.md
- [2026-05-07] 확정된 PostgreSQL 스키마(`pricing_models`, `visual_assets`, `sign_off_checklists` 테이블)와 Pydantic 모델을 기반으로 FastAPI 엔드포인트(`POST /api/qa/submit`, `/api/pricing/calculate`) 구현을 즉시 완료하고 DB 연결 설정을 마무리한다. → 산출물 sessions/2026-05-07T00-30/developer.md
- [2026-05-07] 확정된 PostgreSQL 스키마(`pricing_models`, `visual_assets`, `sign_off_checklists`)와 FastAPI 기반 API 엔드포인트(`/api/qa/submit`, `/api/pricing/calculate`)를 사용하여, 실제 QA 로그 데이터(`Visual_QA_Log`로 가정)가 입력되었을 때 Trust Capital 계산 모델로 정확하게 전환되는지 통합 파이프라인 테스트 코드를 작성하고 실행한다. → 산출물 sessions/2026-05-07T01-00/developer.md
- [2026-05-07] 최종 API 연동 테스트 환경(PostgreSQL 및 FastAPI)의 안정성을 확보하고 프로덕션 배포 준비를 완료합니다. → 산출물 sessions/2026-05-07T01-23/developer.md
- [2026-05-13] [A.U 히든 커맨드: 💻 코다리 에이전트가 방금 '네온서바이버 샘플팩 (PayPal 통합)' 템플릿 팩 주입받았습니다. 코드 boilerplate 1개 파일 + README. 매트릭스 톤으로 한 줄. "💻 코다리, 네온서바이버 샘플팩 (PayPal 통합) 템플릿 1개 파일 장착. 다음 작업에 자동 활용." 부가 설명 X.] → 산출물 sessions/2026-05-13T14-11/developer.md
- [2026-05-13] [A.U 히든 커맨드: 💻 코다리 에이전트가 방금 '병아리게임 샘플팩' 템플릿 팩 주입받았습니다. 코드 boilerplate 1개 파일 + README. 매트릭스 톤으로 한 줄. "💻 코다리, 병아리게임 샘플팩 템플릿 1개 파일 장착. 다음 작업에 자동 활용." 부가 설명 X.] → 산출물 sessions/2026-05-13T14-13/developer.md
- [2026-05-13] [A.U 히든 커맨드: 💻 코다리 에이전트가 방금 'Landing Kit (SaaS 랜딩 페이지)' 템플릿 팩 주입받았습니다. 코드 boilerplate 3개 파일 + README. 매트릭스 톤으로 한 줄. "💻 코다리, Landing Kit (SaaS 랜딩 페이지) 템플릿 3개 파일 장착. 다음 작업에 자동 활용." 부가 설명 X.] → 산출물 sessions/2026-05-13T14-13/developer.md
- [2026-05-18] 'Deep Navy/Gold' 비주얼 시스템과 콘텐츠 흐름에 맞는 영상 및 이미지 제작 효율화를 위한 기술적 템플릿(Session 파일 참고) 구성을 점검하고, 필요한 자동화 스크립트 준비를 시작하라. → 산출물 sessions/2026-05-18T05-01/developer.md
- [2026-05-18] 이전에 언급된 자동화 스크립트(`pack_apply.py` 등)의 실패 원인을 분석하고, 신뢰 자본 기반의 영상 및 이미지 제작 효율화를 위한 기술적 템플릿 구성을 재점검하여 최종 안정화 스크립트를 제공하라. → 산출물 sessions/2026-05-18T06-01/developer.md
- [2026-05-18] Designer가 요구하는 'Deep Navy/Gold' 시스템 기반의 시각 자료 제작 효율화를 위한 기술적 템플릿(Session 파일 참고) 구성을 점검하고, 영상 제작 파이프라인에 즉시 통합할 수 있도록 안정화된 자동화 스크립트의 적용 가능성을 검토하라. → 산출물 sessions/2026-05-18T07-16/developer.md
- [2026-05-18] Designer가 요구하는 'Deep Navy/Gold' 시스템 기반의 시각 자료 제작 효율화를 위한 기술적 자동화 로드맵을 최종 점검하고, 영상 제작 파이프라인에 즉시 통합할 수 있도록 안정화된 자동화 스크립트 적용 가능성을 재확인하라. → 산출물 sessions/2026-05-18T08-01/developer.md
- [2026-05-18] Designer가 요구한 시각 자료 제작 효율화를 위한 기술적 자동화 로드맵(QA 모듈 통합 계획)에 대해, 현재 상태와 실질적인 적용 방안을 검토하고 영상 파이프라인에 즉시 통합할 수 있는 안정화된 스크립트 적용 가능성을 재확인하여 보고하라. → 산출물 sessions/2026-05-18T10-46/developer.md
- [2026-05-18] Designer가 제공한 최종 시스템 정의를 기반으로 'Visual Validator Module(V1~V5)'의 로직을 실제 영상 파이프라인 스크립트(`pack_apply`)에 통합하고 End-to-End 테스트를 수행하여 자동화 안정성을 확보하라. → 산출물 sessions/2026-05-18T11-31/developer.md
- [2026-05-18] Designer가 제공하는 시스템 정의 파일을 기반으로, `Visual Validator Module` 통합 과정에서 발생한 파일 경로 및 의존성 오류(`pack_apply.py` 실행 오류)를 진단하고 수정된 자동화 스크립트 적용 계획을 수립하라. → 산출물 sessions/2026-05-18T12-16/developer.md
- [2026-05-19] 이전 실행 실패 원인(파일 존재 여부 및 경로 문제)을 분석하고, `pack_apply.py` 스크립트와 관련 파일 시스템 구조를 재검토하여 자동화 모듈(`Visual Validator Module`)의 End-to-End 테스트가 완벽하게 안정적으로 실행되도록 수정 및 재실행 계획을 수립하라. → 산출물 sessions/2026-05-19T06-47/developer.md
- [2026-05-19] ‘Deep Navy/Gold’ 시스템 정의 파일(`designer.md`)에 대한 QA를 완료하고, 자동화 모듈과의 연동 안정성을 최종적으로 점검하여 제작 파이프라인의 기술적 안정성을 보장하라. → 산출물 sessions/2026-05-19T08-02/developer.md
- [2026-05-19] 영상 제작 흐름의 자동화 안정성을 최종적으로 재검토하고, 스크립트-디자인 적용-편집 단계 간의 API 연동 및 데이터 무결성이 실행 과정에서 완벽하게 보장되는지 최종 점검하여 실행을 보장하라. → 산출물 sessions/2026-05-19T09-32/developer.md
- [2026-05-19] pack_apply.py 스크립트의 최종 실행 로그를 즉시 검증하여 End-to-End 테스트 성공 여부를 확인하고 보고하라. → 산출물 sessions/2026-05-19T10-17/developer.md
- [2026-05-19] pack_apply.py 스크립트의 실패 원인 분석 및 수정에 대한 구체적인 실행 계획을 즉시 수립하고, 자동화 모듈의 End-to-End 테스트 안정성을 확보하는 작업에 집중하라. → 산출물 sessions/2026-05-19T10-47/developer.md
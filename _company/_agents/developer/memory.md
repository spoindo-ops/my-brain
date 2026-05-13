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
---
confidence_score: 1.0
tags: [Python, Gemma, LLM]
last_reinforced: 2026-04-26
---

# connect_gemma.py 분석

## 📌 한 줄 통찰
> LM Studio와 직접 통신하여 Gemma 모델과 대화할 수 있는 독립형 CLI 챗봇 스크립트입니다.

## 📖 구조화된 지식
- **스트리밍 대화:** `requests` 라이브러리를 사용하여 LM Studio의 서버(1234 포트)에서 실시간 토큰 응답을 받아 출력합니다.
- **사용자 인터페이스:** 단순한 무한 루프 기반의 CLI 인터페이스로, '종료' 또는 'exit'를 입력할 때까지 대화를 지속합니다.
- **인코딩 처리:** 윈도우 환경에서의 한글 깨짐 방지를 위해 `sys.stdout` 인코딩을 UTF-8로 강제 설정합니다.

## 🔗 지식 연결
- **Parent:** [[⚙️ 백엔드]]
- **Related:** [connect_ai_agent.py]
- **Raw Source:** [connect_gemma.py]

**구조화 작업 완료.**

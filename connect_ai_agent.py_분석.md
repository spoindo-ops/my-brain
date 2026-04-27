---
id: 분석
confidence_score: 1.0
tags: [Python, Backend, Proxy]
last_reinforced: 2026-04-26
---

# connect_ai_agent.py 분석

## 📌 한 줄 통찰
> Flask 기반의 프록시 서버로, LLM 요청 시 NotebookLM에서 학습된 핵심 투자 지식을 시스템 프롬프트에 자동으로 주입합니다.

## 📖 구조화된 지식
- **지식 주입:** `KNOWLEDGE_BASE` 변수에 저장된 주식 투자 원칙(대장주 공략, 이평선 매집 등)을 모든 채팅 요청에 포함시킵니다.
- **프록시 기능:** 웹사이트의 요청을 받아 로컬 LM Studio 서버로 전달하고 결과를 다시 반환합니다.
- **스트리밍 지원:** 실시간 응답을 위해 `stream_with_context`를 사용한 이벤트 스트림을 제공합니다.

## 🔗 지식 연결
- **Parent:** [[⚙️ 백엔드]]
- **Related:** [app.js], [connect_gemma.py]
- **Raw Source:** [connect_ai_agent.py]

**구조화 작업 완료.**

id: [app.js_로직]
---
confidence_score: 1.0
tags: [JavaScript, Logic]
last_reinforced: 2026-04-26
---

# app.js 로직

## 📌 한 줄 통찰
> 프론트엔드의 핵심 로직으로, 사용자 입력 처리, LLM API 통신(스트리밍), 그리고 지식 그래프 업데이트를 담당합니다.

## 📖 구조화된 지식
- **채팅 엔진:** Ollama(11434) 및 LM Studio(1234) API와 통신하여 실시간 스트리밍 응답을 처리합니다.
- **지식 추출:** LLM의 응답에서 `id:`, `Parent:`, `Related:` 패턴을 정규표현식으로 추출하여 실시간으로 구조화합니다.
- **시각화:** `vis-network` 라이브러리를 사용하여 추출된 지식을 노드와 엣지 형태의 그래프로 렌더링합니다.

## 🔗 지식 연결
- Parent: [central]
- **Related:** [index.html], [connect_ai_agent.py]
- **Raw Source:** [app.js]

**구조화 작업 완료.**

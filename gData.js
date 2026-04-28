/* Connect AI Knowledge Graph Data - 아까 본 17개 연결 지도랑 똑같이 띄우기 위한 버전 */

const nodes = [
  { id: "hub", label: "Connect AI Brain", title: "Connect AI Brain", category: "핵심 허브" },
  { id: "ai_1in", label: "AI 1인 기업 자동화", title: "AI 1인 기업 자동화", category: "AI · RAG" },
  { id: "rag_core", label: "RAG 핵심 원리", title: "RAG 핵심 원리", category: "AI · RAG" },
  { id: "agent_sys", label: "에이전트 시스템", title: "에이전트 시스템", category: "에이전트" },
  { id: "trading", label: "트레이딩 마스터 가이드", title: "트레이딩 마스터 가이드", category: "트레이딩" },
  { id: "hoga", label: "호가창 0.1초의 비기", title: "호가창 0.1초의 비기", category: "트레이딩" },
  { id: "chart_pattern", label: "초절정 매집차트 패턴", title: "초절정 매집차트 패턴", category: "트레이딩" },
  { id: "volume", label: "거래량의 비밀", title: "거래량의 비밀", category: "트레이딩" },
  { id: "time_trade", label: "시간대별 실전 공략", title: "시간대별 실전 공략", category: "트레이딩" },
  { id: "youtube", label: "MrBeast 유튜브 전략", title: "MrBeast 유튜브 전략", category: "콘텐츠" },
  { id: "video1", label: "Can a Window Stop...", title: "Can a Window Stop a Wrecking Ball?", category: "콘텐츠" },
  { id: "video2", label: "Don't Eat The Spicy...", title: "Don't Eat The Spicy Yoshi Egg", category: "콘텐츠" },
  { id: "video3", label: "50 Streamers Fight...", title: "50 Streamers Fight for $1,000,000", category: "콘텐츠" },
  { id: "combat_ai", label: "Combat AI 샘플팩", title: "Combat AI 샘플팩", category: "에이전트" },
  { id: "image_gen", label: "이미지 생성 가이드", title: "이미지 생성 가이드", category: "이미지·영상" },
  { id: "video_gen", label: "영상 직접 생성 과정", title: "영상 직접 생성 과정", category: "이미지·영상" },
  { id: "image_prompt", label: "이미지 프롬프트 구조화", title: "이미지 프롬프트 구조화", category: "이미지·영상" },
  { id: "test_pack", label: "테스트 브레인 팩", title: "테스트 브레인 팩", category: "시스템" }
];

const edges = [
  { from: "hub", to: "ai_1in", source: "hub", target: "ai_1in" },
  { from: "hub", to: "rag_core", source: "hub", target: "rag_core" },
  { from: "hub", to: "agent_sys", source: "hub", target: "agent_sys" },
  { from: "hub", to: "trading", source: "hub", target: "trading" },
  { from: "hub", to: "youtube", source: "hub", target: "youtube" },
  { from: "hub", to: "image_gen", source: "hub", target: "image_gen" },
  { from: "hub", to: "test_pack", source: "hub", target: "test_pack" },
  { from: "ai_1in", to: "rag_core", source: "ai_1in", target: "rag_core" },
  { from: "ai_1in", to: "agent_sys", source: "ai_1in", target: "agent_sys" },
  { from: "ai_1in", to: "image_gen", source: "ai_1in", target: "image_gen" },
  { from: "rag_core", to: "agent_sys", source: "rag_core", target: "agent_sys" },
  { from: "rag_core", to: "test_pack", source: "rag_core", target: "test_pack" },
  { from: "agent_sys", to: "combat_ai", source: "agent_sys", target: "combat_ai" },
  { from: "agent_sys", to: "youtube", source: "agent_sys", target: "youtube" },
  { from: "trading", to: "hoga", source: "trading", target: "hoga" },
  { from: "trading", to: "chart_pattern", source: "trading", target: "chart_pattern" },
  { from: "trading", to: "volume", source: "trading", target: "volume" },
  { from: "trading", to: "time_trade", source: "trading", target: "time_trade" },
  { from: "hoga", to: "chart_pattern", source: "hoga", target: "chart_pattern" },
  { from: "hoga", to: "volume", source: "hoga", target: "volume" },
  { from: "chart_pattern", to: "volume", source: "chart_pattern", target: "volume" },
  { from: "chart_pattern", to: "time_trade", source: "chart_pattern", target: "time_trade" },
  { from: "youtube", to: "video1", source: "youtube", target: "video1" },
  { from: "youtube", to: "video2", source: "youtube", target: "video2" },
  { from: "youtube", to: "video3", source: "youtube", target: "video3" },
  { from: "youtube", to: "combat_ai", source: "youtube", target: "combat_ai" },
  { from: "video1", to: "combat_ai", source: "video1", target: "combat_ai" },
  { from: "video3", to: "combat_ai", source: "video3", target: "combat_ai" },
  { from: "image_gen", to: "video_gen", source: "image_gen", target: "video_gen" },
  { from: "image_gen", to: "image_prompt", source: "image_gen", target: "image_prompt" },
  { from: "video_gen", to: "image_prompt", source: "video_gen", target: "image_prompt" }
];

// LIVE 패널이 변수명으로 gData를 읽을 수도, knowledgeGraph를 읽을 수도 있으므로 둘 다 선언해둡니다.
// 또한 edge 속성으로 from/to와 source/target을 모두 넣어 호환성을 극대화했습니다.
const gData = { nodes: nodes, edges: edges };
const knowledgeGraph = { nodes: nodes, edges: edges };

if (typeof window !== 'undefined') {
  window.gData = gData;
  window.knowledgeGraph = knowledgeGraph;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { gData, knowledgeGraph };
}

console.log("지능형 지식 맵 데이터 로드 완료: 노드와 연결선 업데이트 됨");
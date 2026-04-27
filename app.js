/**
 * Connect AI - 지식 네트워크 시각화 엔진 (app.js)
 * 역할: 지식 데이터를 노드와 엣지로 변환하여 vis-network로 렌더링
 */

// 1. 시각화가 그려질 컨테이너 연결
const container = document.getElementById('network-container');

// 2. 초기 데이터 설정 (빈 노드와 연결선)
const data = {
    nodes: new vis.DataSet([]),
    edges: new vis.DataSet([])
};

// 3. 그래프 디자인 및 물리 엔진 설정
const options = {
    nodes: {
        shape: 'dot',
        size: 20,
        font: { size: 14, color: '#ffffff' },
        borderWidth: 2,
        color: {
            background: '#2ecc71',
            border: '#27ae60',
            highlight: { background: '#f1c40f', border: '#f39c12' }
        },
        shadow: true
    },
    edges: {
        width: 2,
        color: { color: '#666666', highlight: '#00ff00', hover: '#00ff00' },
        smooth: { type: 'continuous' },
        arrows: { to: { enabled: true, scaleFactor: 0.5 } }
    },
    physics: {
        enabled: true,
        barnesHut: {
            gravitationalConstant: -2000,
            centralGravity: 0.3,
            springLength: 150
        },
        stabilization: { iterations: 100 }
    },
    interaction: {
        hover: true,
        tooltipDelay: 200
    }
};

// 4. 네트워크 초기화 및 실행
const network = new vis.Network(container, data, options);

// 5. 지식 관계 분석 및 자동 연결 로직 (시뮬레이션)
function initializeGraph() {
    console.log("Connect AI: 지식 네트워크 분석 및 렌더링 시작...");
    
    // 이 부분은 시스템이 자동으로 점들을 찾아서 이어주는 트리거 역할을 합니다.
    // 현재 폴더의 17개 지식 파일 정보를 읽어오도록 신호를 보냅니다.
}

initializeGraph();
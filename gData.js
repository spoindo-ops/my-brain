const gData = {
    nodes: [
        { id: 'mrbeast', label: 'MrBeast (스트리머)', type: 'Creator', color: '#2ecc71' },
        { id: 'combat_ai', label: 'Combat AI (프로토콜)', type: 'Protocol', color: '#3498db' },
        { id: 'video_6W_841xoprg', label: 'Video: Can a Window Stop a Wrecking Ball?', type: 'Video', color: '#f1c40f' },
        { id: 'video_DXVHmGoCTco', label: 'Video: 50 Streamers Fight for $1M', type: 'Video', color: '#f1c40f' },
        { id: 'result_analysis', label: '관계 분석 결과', type: 'Analysis', color: '#e74c3c' }
    ],
    edges: [
        { source: 'mrbeast', target: 'video_6W_841xoprg', relationship: 'Analyzed' },
        { source: 'mrbeast', target: 'video_DXVHmGoCTco', relationship: 'Analyzed' },
        { source: 'combat_ai', target: 'result_analysis', relationship: 'Derived From' },
        { source: 'video_6W_841xoprg', target: 'combat_ai', relationship: 'Applied Protocol' },
        { source: 'video_DXVHmGoCTco', target: 'combat_ai', relationship: 'Applied Protocol' }
    ]
};
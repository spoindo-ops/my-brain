# 4월 19일 제이멘트와 라이브 영상생성 학습 - Part 1

{
"title": "영상직접생성과정(260419)",
"description": "",
"version": "0.0.1",
"nodes": [
{
"id": "327f5e6b-9c20-4974-9513-c4675a59edcb",
"type": "embed://a2/generate.bgl.json#module:main",
"metadata": {
"title": "Improve Image",
"visual": {
"x": 900,
"y": 840
},
"userModified": true,
"expected_output": [
{
"description": "A generated image based on the input.",
"list": false,
"type": "image"
}
]
},
"configuration": {
"config$prompt": {
"role": "user",
"parts": [
{
"text": "   이 이미지가 사람이다 이미지 스타일을 그대로 유지하고 개선해서 이미지 생성   들고 있는건 풍선이야 . 그리고 이미지에 색깔도 입혀줘 "
}
]
},
"generation-mode": "image-pro",
"p-aspect-ratio": "16:9"
}
},
{
"id": "1ad6618e-8cb7-42d0-8794-f700bfc8c721",
"type": "embed://a2/generate.bgl.json#module:main",
"metadata": {
"title": "Generate 1",
"visual": {
"x": 1160,
"y": 1940
},
"userModified": false
},
"configuration": {
"config$prompt": {
"role": "user",
"parts": [
{
"text": "아이:  {{\"type\":\"asset\",\"path\":\"d0e00e29-de8c-47b6-be6e-15ac421b29e3.jpg\",\"mimeType\":\"image/jpeg\",\"title\":\"아이\"}}\n토끼: {{\"type\":\"asset\",\"path\":\"d36d35e2-7282-452c-8e58-b8f982c2d82e.jpg\",\"mimeType\":\"image/jpeg\",\"title\":\"토끼\"}}\n\n아이와 토끼가 바다에서 놀다가 새우를 발견했어. 새우가 엄청 큰데 붉은색으로 변하면서 바다 수면 위로 올라가. 스타일은 그대로 유지해주고\n\n {{\"type\":\"in\",\"path\":\"7b46fd98-cd00-4914-ab3e-8fe54c7bc83e\",\"title\":\"Generate 2\"}}에서 생성된 이미지를 참고해서 연결해"
}
]
},
"generation-mode": "image-pro",
"b-model-name": "veo-3.1",
"p-aspect-ratio": "16:9",
"p-disable-prompt-rewrite": false
}
},
{
"id": "26543c3e-b75c-4de6-a7cc-b71ff5cb8fb7",
"type": "embed://a2/a2.bgl.json#module:render-outputs",
"metadata": {
"title": "Output",
"visual": {
"x": 780,
"y": 2320
},
"userModified": false
},
"configuration": {
"text": {
"parts": [
{
"text": "{{\"type\":\"in\",\"path\":\"1ad6618e-8cb7-42d0-8794-f700bfc8c721\",\"title\":\"Generate 1\",\"invalid\":true}}생성된 영상을 다운로드받을수 있는 웹싸이트로  생성"
}
],
"role": "user"
},
"p-render-mode": "Auto",
"b-render-model-name": "gemini-flash",
"b-system-instruction": {
"role": "user",
"parts": [
{
"text": ""
}
]
}
}
},
{
"id": "7b46fd98-cd00-4914-ab3e-8fe54c7bc83e",
"type": "embed://a2/generate.bgl.json#module:main",
"metadata": {
"title": "Generate 2",
"visual": {
"x": 880,
"y": 1520
},
"userModified": false
},
"configuration": {
"config$prompt": {
"role": "user",
"parts": [
{
"text": "아이:  {{\"type\":\"asset\",\"path\":\"d0e00e29-de8c-47b6-be6e-15ac421b29e3.jpg\",\"mimeType\":\"image/jpeg\",\"title\":\"아이\"}} \n토끼: {{\"type\":\"asset\",\"path\":\"d36d35e2-7282-452c-8e58-b8f982c2d82e.jpg\",\"mimeType\":\"image/jpeg\",\"title\":\"토끼\"}} \n\n아이와 토끼가 바다에서 놀고 있어. 고래도 있어. \n스타일 그대로 유지하고 이미지 생성"
}
]
},
"generation-mode": "image-pro",
"p-aspect-ratio": "16:9"
}
}
],
"edges": [
{
"from": "7b46fd98-cd00-4914-ab3e-8fe54c7bc83e",
"to": "1ad6618e-8cb7-42d0-8794-f700bfc8c721",
"out": "context",
"in": "p-z-7b46fd98-cd00-4914-ab3e-8fe54c7bc83e"
}
],
"url": "drive:/11bR2RsUL11NXxZ8ClgDFjw6mO6SLBP-T",
"metadata": {
"visual": {
"presentation": {
"themes": {
"43d18ed0-3e47-4d19-9e39-ea7dd8420c84": {
"themeColors": {
"primaryColor": "#1a1a1a",
"secondaryColor": "#7a7a7a",
"backgroundColor": "#ffffff",
"textColor": "#1a1a1a",
"primaryTextColor": "#ffffff"
},
"template": "basic",
"isDefaultTheme": true,
"palette": {
"primary": {
"0": "#000000",
"5": "#001417",
"10": "#001f24",
"15": "#002b30",
"20": "#00363d",
"25": "#00424a",
"30": "#004f58",
"35": "#005b66",
"40": "#006874",
"50": "#008391",
"60": "#00a0b0",
"70": "#22bccf",
"80": "#4fd8eb",
"90": "#97f0ff",
"95": "#d0f8ff",
"98": "#edfcff",
"99": "#f6feff",
"100": "#ffffff"
},
"secondary": {
"0": "#000000",
"5": "#001417",
"10": "#051f23",
"15": "#10292d",
"20": "#1c3438",
"25": "#273f43",
"30": "#334b4f",
"35": "#3e565b",
"40": "#4a6267",
"50": "#637b80",
"60": "#7c959a",
"70": "#96b0b4",
"80": "#b1cbd0",
"90": "#cde7ec",
"95": "#dbf6fa",
"98": "#edfcff",
"99": "#f6feff",
"100": "#ffffff"
},
"tertiary": {
"0": "#000000",
"5": "#030f2c",
"10": "#0e1b37",
"15": "#192541",
"20": "#24304d",
"25": "#2f3b58",
"30": "#3b4664",
"35": "#465271",
"40": "#525e7d",
"50": "#6b7697",
"60": "#8490b2",
"70": "#9faace",
"80": "#bac6ea",
"90": "#dae2ff",
"95": "#eef0ff",
"98": "#faf8ff",
"99": "#fefbff",
"100": "#ffffff"
},
"neutral": {
"0": "#000000",
"5": "#0e1212",
"10": "#191c1d",
"15": "#232627",
"20": "#2e3132",
"25": "#393c3d",
"30": "#444748",
"35": "#505354",
"40": "#5c5f5f",
"50": "#747878",
"60": "#8e9192",
"70": "#a9acac",
"80": "#c4c7c7",
"90": "#e1e3e3",
"95": "#eff1f1",
"98": "#f8fafa",
"99": "#fafdfd",
"100": "#ffffff"
},
"neutralVariant": {
"0": "#000000",
"5": "#091214",
"10": "#141d1f",
"15": "#1e2729",
"20": "#293234",
"25": "#343d3f",
"30": "#3f484a",
"35": "#4b5456",
"40": "#576062",
"50": "#6f797a",
"60": "#899294",
"70": "#a3adaf",
"80": "#bfc8ca",
"90": "#dbe4e6",
"95": "#e9f2f4",
"98": "#f2fbfd",
"99": "#f6feff",
"100": "#ffffff"
},
"error": {
"0": "#000000",
"5": "#2d0001",
"10": "#410002",
"15": "#540003",
"20": "#690005",
"25": "#7e0007",
"30": "#93000a",
"35": "#a80710",
"40": "#ba1a1a",
"50": "#de3730",
"60": "#ff5449",
"70": "#ff897d",
"80": "#ffb4ab",
"90": "#ffdad6",
"95": "#ffedea",
"98": "#fff8f7",
"99": "#fffbff",
"100": "#ffffff"
}
}
}
},
"theme": "43d18ed0-3e47-4d19-9e39-ea7dd8420c84"
}
},
"parameters": {}
}

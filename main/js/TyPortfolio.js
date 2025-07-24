function openModal(imgElement) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imgElement.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function openModal(imgElement) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imgElement.src;

    // 画像ごとの解説（alt属性などを使って判定）
    const altText = imgElement.alt;
    let description = "この画面はゲームの一部を示しています。";

    if (altText.includes("難易度選択")) {
        description = "トップ画面では3つのモードを選択可能。色分けされたボタンで視覚的なわかりやすさを演出しています。";
    } else if (altText.includes("開始")) {
        description = "タイピング開始前の待機画面です。カウントダウン後にゲームがスタートします。";
    } else if (altText.includes("プレイ")) {
        description = "タイピング中の表示。ミスタイプ数や残り時間が見やすく表示され、正解文字には緑のハイライトを適用しています。";
    } else if (altText.includes("結果")) {
        description = "スコア・成績・経過時間が集約された結果画面。色でランクが表示され、ユーザーの達成感を高めます。";
    }

    document.getElementById("modalText").textContent = description;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color: '#F34900', pos: .2 },
                    { color: '#F38943', pos: .8 },
                    { color: '#F39500', pos: 1 }
                ], [
                    { color: '#FF914D', pos: 0 },
                    { color: '#F3D67A', pos: .2 },
                    { color: '#FFEDD1', pos: .75 }
                ],
            ]
        }
    }
});
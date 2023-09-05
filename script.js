

function rpsGame(user) {
    // コンピュータの手の画像ファイル名を配列に保存
    let npcRPS = ["rockScreen.png", "ScissorsScreen.png", "paperScreen.png"];
    // ユーザの手の画像ファイル名を配列に保存
    let userRPS = ["rockScreen.png", "ScissorsScreen.png", "paperScreen.png"];
    // コンピュータの手を乱数(0～2）で作成
    let npc = Math.floor(Math.random() * 3);
    // ユーザの手の画像を表示するimgタグをDOMツリーから検索
    let userImg = document.getElementById("userImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    userImg.src = "img/" + userRPS[user];
    document.querySelector("#userImg").style.visibility = "visible"
    // コンピュータの手の画像を表示するimgタグをDOMツリーから検索
    let npcImg = document.getElementById("npcImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    npcImg.src = "img/" + npcRPS[npc];
    document.querySelector("#npcImg").style.visibility = "visible"
    // ユーザから見た勝敗結果(文字列)を2次元配列に保存
    let result = [["Draw", "Your Victory", "Your Loss"],["Your Loss", "Draw", "Your Victory"],["Your Victory", "Your Loss", "Draw"]];
// 勝敗結果を
document.getElementById("result").textContent = result[user][npc];
}








function rpsGame(user) {
    const npcRPS = ["rockScreen.png", "ScissorsScreen.png", "paperScreen.png"];
    const userRPS = ["rockScreen.png", "ScissorsScreen.png", "paperScreen.png"];
    const npc = Math.floor(Math.random() * 3);
    const userImg = document.getElementById("userImg");
    userImg.src = "img/" + userRPS[user];
    document.querySelector("#userImg").style.visibility = "visible"
    const npcImg = document.getElementById("npcImg");
    npcImg.src = "img/" + npcRPS[npc];
    document.querySelector("#npcImg").style.visibility = "visible"
    let rpsResult;
    let rpsColor;
    if(user === npc){
        rpsResult="Draw"
        rpsColor = "yellow";
    } else if (user === 0 && npc === 1){
        rpsResult = "Your win"
        rpsColor = "red";
    } else if (user === 0 && npc === 2){
        rpsResult = "Your Loss"
        rpsColor = "blue";
    } else if (user === 1 && npc === 0){
        rpsResult = "Your Loss"
        rpsColor = "blue";
    } else if (user === 1 && npc === 2){
        rpsResult = "Your win"
        rpsColor = "red";
    } else if (user === 2 && npc === 0){
        rpsResult = "Your win"
        rpsColor = "red";
    } else if (user === 2 && npc === 1){
        rpsResult = "Your Loss"
        rpsColor = "blue";
    }
    document.getElementById("result").style.color = rpsColor;
    document.getElementById("result").innerText = rpsResult;
}




// function rpsGame(user) {
//     const npcRPS = ["rockScreen.png", "ScissorsScreen.png", "paperScreen.png"];
//     const userRPS = ["rockScreen.png", "ScissorsScreen.png", "paperScreen.png"];
//     const npc = Math.floor(Math.random() * 3);
//     const userImg = document.getElementById("userImg");
//     userImg.src = "img/" + userRPS[user];
//     document.querySelector("#userImg").style.visibility = "visible"
//     const npcImg = document.getElementById("npcImg");
//     npcImg.src = "img/" + npcRPS[npc];
//     document.querySelector("#npcImg").style.visibility = "visible"
//     const result = [["Draw", "Your win", "Your Loss"],["Your Loss", "Draw", "Your win"],["Your win", "Your Loss", "Draw"]];
// let rpsColor;
// if("Draw" === result[user][npc]){
//     rpsColor = "yellow";
// } else if("Your win" === result[user][npc]){
//     rpsColor = "red";
// } else {
//     rpsColor = "blue";
// }
// document.getElementById("result").style.color = rpsColor;
// document.getElementById("result").textContent = result[user][npc];
// }














// function rpsGame(user) {
//     // コンピュータの手の画像ファイル名を配列に保存
//     const npcRPS = ["rockScreen.png", "ScissorsScreen.png", "paperScreen.png"];
//     // ユーザの手の画像ファイル名を配列に保存
//     const userRPS = ["rockScreen.png", "ScissorsScreen.png", "paperScreen.png"];
//     // コンピュータの手を乱数(0～2）で作成
//     const npc = Math.floor(Math.random() * 3);
//     // ユーザの手の画像を表示するimgタグをDOMツリーから検索
//     const userImg = document.getElementById("userImg");
//     // 検索したimgタグのsrc属性に該当するファイル名を設定
//     userImg.src = "img/" + userRPS[user];
//     document.querySelector("#userImg").style.visibility = "visible"
//     // コンピュータの手の画像を表示するimgタグをDOMツリーから検索
//     const npcImg = document.getElementById("npcImg");
//     // 検索したimgタグのsrc属性に該当するファイル名を設定
//     npcImg.src = "img/" + npcRPS[npc];
//     document.querySelector("#npcImg").style.visibility = "visible"
//     // ユーザから見た勝敗結果(文字列)を2次元配列に保存
//     const result = [["Draw", "Your win", "Your Loss"],["Your Loss", "Draw", "Your win"],["Your win", "Your Loss", "Draw"]];
// // 勝敗結果を
// let rpsColor;
// if("Draw" === result[user][npc]){
//     rpsColor = "yellow";
// } else if("Your win" === result[user][npc]){
//     rpsColor = "red";
// } else {
//     rpsColor = "blue";
// }
// document.getElementById("result").style.color = rpsColor;
// document.getElementById("result").textContent = result[user][npc];
// }

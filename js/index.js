// カテゴリ名を配列でセットする
let category = ["othersService","educationService"];

// WEBページ上で変化があったら関数checkを呼び出す
window.addEventListener('change',check);

// チェックボックスを連動させる
function check(){
  for(let i = 0;i<category.length;i++){
    // 各業界を取得
    let industry = document.getElementById(category[i]);
    // 各業種を取得
    let industries = document.getElementById("category_"+category[i]);

    // 各業界でチェックされている項目を取得
    let checkChild = document.querySelectorAll('ul#'+ category[i] + '>li>input[type="checkbox"]:checked');

    if(checkChild.length != 0){
      // 各業界でチェックされている項目が0以上の場合、連動する業種のチェックを入れる
      industries.checked = true;
    }else{
      // 各業界でチェックされている項目が0の場合、連動する業種のチェックを外す
      industries.checked = false;
    } 
  }
}
// 業種・業界のカテゴリ名を配列でセットする
const CATEGORY = ["othersService","educationService","sales","telecommunications","transportation",
"foodsService","energy","finance","realEstate"];

// 業界エリアを取得する
let industry = document.getElementById("industry");
// 職種エリアを取得する
let jobCategory = document.getElementById("jobCategory");

let reset_btn = document.getElementById("reset_btn");

// 業界にチェックが入ったら関数industryCheckを呼び出す
industry.addEventListener("change",industryCheck);

// 業界・業種のチェックボックスを連動させる
function industryCheck(){
  for(let i = 0;i<CATEGORY.length;i++){
    // 各業種を取得
    let industries = document.getElementById("category_"+CATEGORY[i]);

    // 各業界でチェックされている項目を取得
    let checkChild = document.querySelectorAll("ul#"+ CATEGORY[i] + ">li>input[type='checkbox']:checked");

    if(checkChild.length != 0){
      // 各業界でチェックされている項目が0以上の場合、連動する業種のチェックを入れる
      industries.checked = true;
    }else{
      // 各業界でチェックされている項目が0の場合、連動する業種のチェックを外す
      industries.checked = false;
    }
    sessionStorage.setItem("categorychecked",JSON.stringify(checkChild));
  }
}
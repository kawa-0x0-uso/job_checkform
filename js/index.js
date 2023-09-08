// 業種・業界のカテゴリ名を配列でセットする
const CATEGORY = ["othersService","educationService","foodsService","finance"];
// 職種を配列でセットする
const JOBCATEGORY = ["tester_system","tester_app","tester_website","technical_support"];

// 業界エリアを取得する
let industry = document.getElementById('industry');
// 職種エリアを取得する
let jobCategory = document.getElementById('job_category');

// 業界にチェックが入ったら関数industryCheckを呼び出す
industry.addEventListener('change',industryCheck);
// 職種にチェックが入ったら関数を呼び出す
jobCategory.addEventListener('change',jobCategoryCheck);

// 業界・業種のチェックボックスを連動させる
function industryCheck(){
  for(let i = 0;i<CATEGORY.length;i++){
    // 各業界を取得
    let industry = document.getElementById(CATEGORY[i]);
    // 各業種を取得
    let industries = document.getElementById("category_"+CATEGORY[i]);

    // 各業界でチェックされている項目を取得
    let checkChild = document.querySelectorAll('ul#'+ CATEGORY[i] + '>li>input[type="checkbox"]:checked');

    if(checkChild.length != 0){
      // 各業界でチェックされている項目が0以上の場合、連動する業種のチェックを入れる
      industries.checked = true;
    }else{
      // 各業界でチェックされている項目が0の場合、連動する業種のチェックを外す
      industries.checked = false;
    } 
  }
}

// 職種・使用アプリのチェックボックスを連動させる
function jobCategoryCheck(){
  for(let i = 0;i<JOBCATEGORY.length;i++){
    let job = document.querySelectorAll('ul#job_category>li>input[type="checkbox"]:checked');
    console.log(i);
    console.log(job[i].value);


    switch(job[i].value){
      case 'tester_system':
        let tester_system = ["excel","powerpoint","word"];
        for(let i = 0;i<tester_system.length;i++){
          let tester_system_app = document.querySelectorAll('li>input#'+tester_system+'[type="checkbox"]')
          tester_system_app.checked = true;
        }
        break;

      default:
        let errorMessage = document.createElement('p');
        errorMessage.textContent = "職種を選択してください。";
        break;
    }
  }
}
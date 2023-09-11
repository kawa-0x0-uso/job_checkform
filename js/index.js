// 業種・業界のカテゴリ名を配列でセットする
const CATEGORY = ["othersService","educationService","foodsService","finance"];
// 職種を配列でセットする
const JOBCATEGORY = ["tester_system","tester_app","tester_website","technical_support"];

// 業界エリアを取得する
let industry = document.getElementById('industry');
// 職種エリアを取得する
let jobCategory = document.getElementById('job_category');

let reset_btn = document.getElementById('reset_btn');

// 業界にチェックが入ったら関数industryCheckを呼び出す
industry.addEventListener('change',industryCheck);
// 職種にチェックが入ったら関数を呼び出す
jobCategory.addEventListener('change',jobCategoryCheck);

// 業界・業種のチェックボックスを連動させる
function industryCheck(){
  for(let i = 0;i<CATEGORY.length;i++){
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

// 職種に連動させて使用アプリにチェックを入れる
function jobAppChecked(jobApp){
  for(let i = 0;i<jobApp.length;i++){
    // アプリの項目を取得
    let checkApp = document.getElementById(jobApp[i]);
    // チェックを入れる
    checkApp.checked = true;
  }
}

// 職種・使用アプリのチェックボックスを連動させる
function jobCategoryCheck(){
  let jobApp = [];
  for(let i = 0;i<JOBCATEGORY.length;i++){
    // 各職種を取得
    let job =  document.getElementById(JOBCATEGORY[i]);
    // 職種にチェックが入っているかを判定
    if(job.checked == true){
      // チェックが入っている場合、職種によってケースを分ける
      switch(job.value){
        case "tester_system" :
        case "tester_app" :
        case "tester_website" :
          // 使用するアプリを宣言
          jobApp = ["excel","powerpoint","word"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;

        case "technical_support" :
          // 使用するアプリを宣言
          jobApp = ["excel","powerpoint","word","mail_system"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;
      }
    }
  }
}

function jobAppReset(){
  let Appchecked = document.querySelectorAll('ul#job_app>li>input[type="checkbox"]:checked');
  Appchecked.checked = false;
}

reset_btn.addEventListener('click',jobAppReset);
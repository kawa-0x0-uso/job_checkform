// 業種・業界のカテゴリ名を配列でセットする
const CATEGORY = ["othersService","educationService","foodsService","finance","sales",
"telecommunications","realEstate","transportation","energy"];
// 職種を配列でセットする
const JOBCATEGORY = ["testerSystem","testerApp","testerWebsite","technicalSupport","telephoneSupport","systemDevelopment",
"appDevelopment","statMonitoring","webPageCreation","websiteOperation","websiteMaintenance","cmsOperation","cmsMaintenance",
"cmsBuilding","hmtlMailCreation","lpCreation","webDesignProduction","trainingSession","publicRelations","snsOperation",
"snsPlanning","illustrationProduction","dbBuilding","dbOperational","infrastructureOperational"];

// 業界エリアを取得する
let industry = document.getElementById('industry');
// 職種エリアを取得する
let jobCategory = document.getElementById('jobCategory');

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
        case "testerSystem" :
        case "testerApp" :
        case "testerWebsite" :
        case "statMonitoring" :
          // 使用するアプリを宣言
          jobApp = ["excel","powerpoint","word"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;

        case "technicalSupport" :
        case "telephoneSupport" :
          // 使用するアプリを宣言
          jobApp = ["excel","powerpoint","word","mailSystem"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;
        case "systemDevelopment" :
        case "appDevelopment" :
          // 使用するアプリを宣言
          jobApp = ["excel","googleSpreadsheet","googleDocument","visualStudioCode","sublimeText","adobeDreamweaver","versionManagement"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;
        case "webPageCreation" :
        case "websiteOperation" :
        case "websiteMaintenance" :
          // 使用するアプリを宣言
          jobApp = ["excel","googleSpreadsheet","googleDocument","visualStudioCode","sublimeText","adobeDreamweaver","versionManagement","adobePhotoshop"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;
        case "cmsOperation" :
        case "cmsMaintenance" :
        case "cmsBuilding" :
          // 使用するアプリを宣言
          jobApp = ["excel","googleSpreadsheet","googleDocument","wordpress"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;
        case "hmtlMailCreation" :
          // 使用するアプリを宣言
          jobApp = ["excel","googleSpreadsheet","googleDocument","visualStudioCode","sublimeText","adobeDreamweaver","adobePhotoshop"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;
        case "lpCreation" :
        case "webDesignProduction" :
        case "trainingSession" :
          // 使用するアプリを宣言
          jobApp = ["excel","googleSpreadsheet","googleDocument","visualStudioCode","sublimeText","adobeDreamweaver","adobePhotoshop","versionManagement"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;
        case "publicRelations" :
        case "snsOperation" :
        case "snsPlanning" :
          // 使用するアプリを宣言
          jobApp = ["googleSpreadsheet","googleDocument","twitter","instagram","facebook"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;
        case "illustrationProduction" :
          // 使用するアプリを宣言
          jobApp = ["adobePhotoshop"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;
        case "dbBuilding" :
        case "dbOperational" :  
          // 使用するアプリを宣言
          jobApp = ["MySQL","postgresql"];
          // 使用するアプリにチェックを入れる
          jobAppChecked(jobApp);
          break;
        case "infrastructureOperational" :  
        // 使用するアプリを宣言
        jobApp = ["excel","MySQL","postgresql"];
        // 使用するアプリにチェックを入れる
        jobAppChecked(jobApp);
        break;
      }
    }
  }
}

function jobAppReset(){
  let Appchecked = document.querySelectorAll('ul#jobApp>li>input[type="checkbox"]:checked');
  Appchecked.checked = false;
}

reset_btn.addEventListener('click',jobAppReset);
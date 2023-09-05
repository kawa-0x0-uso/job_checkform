// // ddのinput中カテ（業界）が変更された時
// $(".preflist dd input[type='checkbox']").change(function () {
//     var area = $(this).parents(".preflist").find("dt input[type='checkbox']");
//     // 選択された中カテ（業界）を変数に格納
//     if ($(this).is(":checked")) {
//         // チェックがついた時
//         area.prop("checked",true);
//       // 大カテ（業種）をチェックする
//     } else {
//         area.prop("checked",false);
//       // 選択した大カテ（業種）のチェックを外す
//     }
// });

let othersService = document.getElementsByName('othersService');
let category = document.getElementById('categoryOthersService');

category.addEventListener('change',check);

function check(){
  for(let i = 0;i<othersService.length;i++){
    othersService[i].checked = true;
    console.log(othersService[i]);
  }
}
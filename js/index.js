// dtのinput（都道府県）が変更された時
$(".preflist dd input[type='checkbox']").change(function () {
    var area = $(this).parents(".preflist").find("dt input[type='checkbox']");
    // 選択された都道府県の市区町村を変数に格納
    if ($(this).is(":checked")) {
        // チェックがついた時
        area.prop("checked",true);
      // 選択した都道府県の市区町村全てをチェックする
    } else {
        area.prop("checked",false);
      // 選択した都道府県の市区町村のチェックを全て外す
    }
});
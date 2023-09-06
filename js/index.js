let othersService = document.getElementById('othersService');
let category = document.getElementById('categoryOthersService');

othersService.addEventListener('change',check);

function check(){
  let othersService_child = document.querySelectorAll('ul#othersService>li>input[type="checkbox"]:checked');

  console.log(othersService_child.length);

  if(othersService_child.length != 0){
    category.checked = true;
  }else{
    category.checked = false;
  }
  
}
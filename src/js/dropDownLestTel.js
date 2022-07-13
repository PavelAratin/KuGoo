export function dropDownLestTel(){
  const linkDropDown = document.querySelector('.js-header-tel');
  const dropdownListTel = document.querySelector('.js-dropdown-list-tel')
  if(linkDropDown){
    linkDropDown.addEventListener('click',function(e){
      dropdownListTel.classList.toggle('active')
    });
  }
};
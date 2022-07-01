export function joicesCustome(){
  const elements = document.querySelectorAll('.js-choice');
  elements.forEach(function(el){
    const choices = new Choices(el,{
      searchEnabled: false,
      classNames:{
        containerOuter:'choices search-form__select'
      }
    });
  });
}
export function accordionFaq() {
  const accordionButtons = document.querySelectorAll('.js-accordion-button')
  if(accordionButtons.length){
    accordionButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        let content = btn.nextElementSibling
        if (content.style.maxHeight) {
          document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null)
          btn.classList.toggle('active')
        } else {
          document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null)
          content.style.maxHeight = content.scrollHeight + 'px';
          btn.classList.toggle('active')
        }
      });
    });
  }
}
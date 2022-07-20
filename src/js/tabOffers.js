export function tabOffes(){
  const offerButtons = document.querySelectorAll('[data-tab]');
  const tabContents = document.querySelectorAll(`[data-content]`);
  if(offerButtons.length){
    offerButtons.forEach((el,index)=>{
      if(index === 0){
        el.classList.add('active')
      }
      el.addEventListener('click',function(){
        const currentButton = this.dataset.tab;
        const tabContent = document.querySelector(`[data-content="${currentButton}"]`)
        offerButtons.forEach(function(btn){
          btn.classList.remove('active')
        });
        this.classList.add('active');
        tabContents.forEach((elem)=>{
          elem.classList.add('js-offers-tab-hidden')
        });
        tabContent.classList.remove('js-offers-tab-hidden');       
      });
    });
  }
}
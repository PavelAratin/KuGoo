export function customeSwiper(){
  const heroSwiper = document.querySelector('.js-hero-swiper')
  if(heroSwiper){
    new Swiper(heroSwiper, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.js-hero-swiper-button-next',
        prevEl: '.js-hero-swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  } 
}
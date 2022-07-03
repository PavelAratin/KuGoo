export function customeSwiper() {
  const heroSwiper = document.querySelector('.js-hero-swiper');
  const minPicSwipers = document.querySelectorAll('.js-product-card-swiper-minpic');
  if (heroSwiper) {
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
  if (minPicSwipers.length) {
    minPicSwipers.forEach(function (el) {
      new Swiper(el, {
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.js-min-pic-swiper-swiper-button-next',
          prevEl: '.js-min-pic-swiper-swiper-button-prev',
        }
      });
    });
  }
}
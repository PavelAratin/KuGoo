export function customeSwiper() {
  const heroSwiper = document.querySelector('.js-hero-swiper');
  const minPicSwipers = document.querySelectorAll('.js-product-card-swiper-minpic');
  const videoObserv = document.querySelector('.js-video-observ');
  const articlesSwiper = document.querySelector('.js-articles-swiper');
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
  if (videoObserv) {
    new Swiper(videoObserv, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 50,
      navigation: {
        nextEl: '.js-video-observ-button-next',
        prevEl: '.js-video-observ-button-prev',
      },
    });
  }
  if (articlesSwiper) {
    new Swiper(articlesSwiper, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 4,
      spaceBetween: 50,
      navigation: {
        nextEl: '.js-articles-button-next',
        prevEl: '.js-articles-button-prev',
      },
    });
  }
}
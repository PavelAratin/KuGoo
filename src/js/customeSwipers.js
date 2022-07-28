export function customeSwiper() {
  const heroSwiper = document.querySelector('.js-hero-swiper');
  const minPicSwipers = document.querySelectorAll('.js-product-card-swiper-minpic');
  const videoObserv = document.querySelector('.js-video-observ');
  const articlesSwiper = document.querySelector('.js-articles-swiper');
  const teamServiceSwiper = document.querySelector('.js-team-service-swiper');
  if (heroSwiper) {
    new Swiper(heroSwiper, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
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
      breakpoints:{
        320:{
          spaceBetween: 20,
          slidesPerView: 1,
        },
        768:{
          spaceBetween: 50
        }
      }
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
      breakpoints:{
        320:{
          slidesPerView: 1,
        },
        768:{
          spaceBetween: 20,
          slidesPerView: 3,
        },
        1200:{
          spaceBetween: 50,
          slidesPerView: 4,
        }
      }
    });
  }
  if (teamServiceSwiper) {
    new Swiper(teamServiceSwiper, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.js-team-service-button-next',
        prevEl: '.js-team-service-button-prev',
      },
      breakpoints:{
        320:{
          slidesPerView: 1,
        },
        768:{
          slidesPerView: 2,
        },
        900:{
          slidesPerView: 3,
        },
        1200:{
          slidesPerView: 'auto',
        }
      }
    });
  }
}
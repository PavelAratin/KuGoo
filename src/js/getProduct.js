import { customeSwiper } from './customeSwipers';
import {cart} from './cart';
export function getProduct() {
  const productCardWrapper = document.querySelector('.js-product-cards');

  const createTemplate = data => {
    return `
  <div class="product-cards__card">
  <div class="product-cards__imgbox">
    <div class="swiper js-product-card-swiper-minpic">
      <div class="swiper-wrapper js-swiper-wrapper">
        <div class="swiper-slide">
          <a class="product-cards__link-overlay" href="#">
            <img class="product-cards__img" src="${data.img[0]}" alt="Самокат">
          </a>
        </div>
        <div class="swiper-slide">
          <a class="product-cards__link-overlay" href="#">
            <img class="product-cards__img" src="${data.img[1]}" alt="Самокат">
          </a>
        </div>
        <div class="swiper-slide">
          <a class="product-cards__link-overlay" href="#">
            <img class="product-cards__img" src="${data.img[2]}" alt="Самокат">
          </a>
        </div>
      </div>
      <button class="swiper-button-prev js-min-pic-swiper-swiper-button-prev"></button>
      <button class="swiper-button-next js-min-pic-swiper-swiper-button-next"></button>
    </div>
    <span class="product-cards__shield product-cards__shield--red">ХИТ</span>
    <span class="product-cards__svg-box"></span>
  </div>
  <div class="product-cards__body">
    <h3 class="product-cards__title">${data.title}</h3>
    <div class="product-cards__info">
      <p class="product-cards__info-text product-cards__info-text--accum">${data.charge}</p>
      <p class="product-cards__info-text product-cards__info-text--power">${data.horsepower} л.с</p>
      <p class="product-cards__info-text product-cards__info-text--kmch">${data.speed} км/ч</p>
      <p class="product-cards__info-text product-cards__info-text--timer">${data.chargeTime} часов</p>
    </div>
    <div class="product-cards__actions">
      <div class="product-cards__inner">
        <span class="product-cards__price-actual">${data.actualPrice} ₽</span>
        <span class="product-cards__price-sale">${data.priceSale} ₽</span>
      </div>        
        <div class="product-cards__buttons">
          <button class="product-cards__btn product-cards__btn--incart js-product-add-to-cart"></button>
          <button class="product-cards__btn product-cards__btn--like"></button>
        </div>
    </div>
    <button class="product-cards__button">Купить в 1 клик</button>
  </div>
</div>
  `
}

// const creatTemplateSlide = (slideImg) => {
//     return  `
//     <div class="swiper-slide">
//       <a class="product-cards__link-overlay" href="#">
//         <img class="product-cards__img" src="img/img-swiper-card.png" alt="Самокат">
//       </a>
//     </div>
//     `
// }

  fetch('./db.json')
    .then(response => response.json())
    .then(body => {
      const slideWrapper = document.querySelector('.js-swiper-wrapper')
      if (body) {
        body.forEach(function (item) {
          productCardWrapper.innerHTML += createTemplate(item)
          customeSwiper();
          cart();
        })
      }
    })
    .catch(error => {
      console.log(error)
    })
}
import { customeSwiper } from './customeSwipers';
import { cart } from './cart';
export function getProduct() {
  const productCardWrapper = document.querySelector('.js-product-cards');
  const buttonProductWievAll = document.querySelector('.js-product-set-viewall');
  const productSetButtons = document.querySelectorAll('.js-product-set-button');
  if (productSetButtons.length) {
    productSetButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const currentBtn = btn.dataset.filter;
        filter(currentBtn)
      });
    });
  }

  function filter(category) {
    const productCards = document.querySelectorAll('.js-product-card')
    productCards.forEach(function (card) {
      const itemFiltered = !card.classList.contains(category);
      if (itemFiltered) {
        card.classList.add('hide')
      } else {
        card.classList.remove('hide')
      }
    });
  }

  const createTemplate = data => {
    return `
  <div class="product-cards__card js-product-card ${data.productShieldHit ? "hit" : ''} ${data.forTown ? "forTown" : ''} ${data.forAdults ? "forAdults" : ''} ${data.forChildren ? "forChildren" : ''}">
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
            <img class="product-cards__img" src="${data.img[1] ? data.img[1] : data.img[0]}" alt="Самокат">
          </a>
        </div>
        <div class="swiper-slide">
          <a class="product-cards__link-overlay" href="#">
            <img class="product-cards__img" src="${data.img[2] ? data.img[2] : data.img[0]}" alt="Самокат">
          </a>
        </div>
      </div>
      <button class="swiper-button-prev js-min-pic-swiper-swiper-button-prev"></button>
      <button class="swiper-button-next js-min-pic-swiper-swiper-button-next"></button>
    </div>
    ${data.productShieldHit ? '<span class="product-cards__shield product-cards__shield--red">ХИТ</span>' : ''}
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

  fetch('./db.json')
    .then(response => response.json())
    .then(body => {
      if (body) {
        for (let i = 0; i < 6; i++) {
          if (productCardWrapper) {
            productCardWrapper.innerHTML += createTemplate(body[i])
            customeSwiper();
            cart();
          }
        }
      }
    })
    .catch(error => {
      console.log(error)
    })

  if(buttonProductWievAll){
    buttonProductWievAll.addEventListener('click', function () {
      let visibleEl = productCardWrapper.children.length;
      let counterEl = visibleEl + 3;
      fetch('./db.json')
        .then((response) => response.json())
        .then((body) => {
          if (body) {
            for (let i = visibleEl; i < counterEl; i++) {
              productCardWrapper.innerHTML += createTemplate(body[i])
              customeSwiper();
              cart();
            }
            if ((counterEl + 1) === body.length) {
              this.style.display = 'none';
            }
          }
        })
    });
  }
}
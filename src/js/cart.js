export function cart() {
  const productBtns = document.querySelectorAll('.js-product-add-to-cart');
  const cartList = document.querySelector('.js-cart-list');
  const cartBtn = document.querySelector('.js-cart-btn');
  const cartBtnCounter = document.querySelector('.js-cart-btn .actions-user__cart-counter');
  const cartFullSum = document.querySelector('.js-cart-sum-number');
  let price = 0;
  //генереция случайного id
  const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  //убрать пробелы у цены товаров
  const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
  }
  //цена в человеском виде
  const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };

  const plusFullPrice = (currentPrice) => {
    return price += currentPrice
  };

  const minusFullPrice = (currentPrice) => {
    return price -= currentPrice
  };
  const printFullPrice = () => {
    cartFullSum.textContent = `${normalPrice(price)} ₽`;
  };
  const printQuantity = () => {
    let lenght = cartList.children.length;
    cartBtnCounter.textContent = lenght;
    lenght > 0 ? cartBtn.classList.add('active') : cartBtn.classList.remove('active')
  }
  //удаление товара из корзины
  const deleteProducts = (productParent) => {
    let id = productParent.dataset.id;
    document.querySelector(`.product-cards__card[data-id="${id}"]`).querySelector('.product-cards__btn--incart').disabled = false;
    let currentPrice = parseInt(priceWithoutSpaces(document.querySelector(`.product-cards__card[data-id="${id}"]`).querySelector('.product-cards__price-sale').textContent));
    minusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();
    printQuantity();
  }
  //генерирование разметки товара в корзине
  const generateCartProduct = (img, title, price, id) => {
    return `
    <li class="cart__item" data-id="${id}">
      <img class="cart__img" src="${img}" alt="Фото товара">
      <div class="cart__descriptions">
        <h4 class="cart__title">${title}</h4>
        <div class="cart__inner">
          <p class="cart__price-good">${price}</p>
          <p class="cart__counter-good"><span>1</span>шт.</p>
        </div>
      </div>
      <button class="cart__button-delete-good"></button>
    </li>
    `;
  };
  if(productBtns.length){
    productBtns.forEach(function (btn) {
      btn.closest('.product-cards__card').setAttribute('data-id', randomId());
      btn.addEventListener('click', function (e) {
        let self = e.currentTarget;
        let parent = self.closest('.product-cards__card');
        let id = parent.dataset.id;
        let img = parent.querySelector('.product-cards__img').getAttribute('src');
        let title = parent.querySelector('.product-cards__title').textContent;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product-cards__price-sale').textContent));
        plusFullPrice(priceNumber);
        cartList.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id))
        printFullPrice()
        printQuantity()
        //disabled btn
        self.disabled = true;
      });
    });
  }
  cartList.addEventListener('click', function (e) {
    if (e.target.classList.contains('cart__button-delete-good')) {
      deleteProducts(e.target.closest('.cart__item'))
    }
  });
};
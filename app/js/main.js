/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/accordionFaq.js":
/*!********************************!*\
  !*** ./src/js/accordionFaq.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accordionFaq": () => (/* binding */ accordionFaq)
/* harmony export */ });
function accordionFaq() {
  var accordionButtons = document.querySelectorAll('.js-accordion-button');

  if (accordionButtons.length) {
    accordionButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var content = btn.nextElementSibling;

        if (content.style.maxHeight) {
          document.querySelectorAll('.accordion__content').forEach(function (el) {
            return el.style.maxHeight = null;
          });
          btn.classList.toggle('active');
        } else {
          document.querySelectorAll('.accordion__content').forEach(function (el) {
            return el.style.maxHeight = null;
          });
          content.style.maxHeight = content.scrollHeight + 'px';
          btn.classList.toggle('active');
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cart": () => (/* binding */ cart)
/* harmony export */ });
function cart() {
  var productBtns = document.querySelectorAll('.js-product-add-to-cart');
  var cartList = document.querySelector('.js-cart-list');
  var cartBtn = document.querySelector('.js-cart-btn');
  var cartBtnCounter = document.querySelector('.js-cart-btn .actions-user__cart-counter');
  var cartFullSum = document.querySelector('.js-cart-sum-number');
  var price = 0; //генереция случайного id

  var randomId = function randomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }; //убрать пробелы у цены товаров


  var priceWithoutSpaces = function priceWithoutSpaces(str) {
    return str.replace(/\s/g, '');
  }; //цена в человеском виде


  var normalPrice = function normalPrice(str) {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };

  var plusFullPrice = function plusFullPrice(currentPrice) {
    return price += currentPrice;
  };

  var minusFullPrice = function minusFullPrice(currentPrice) {
    return price -= currentPrice;
  };

  var printFullPrice = function printFullPrice() {
    cartFullSum.textContent = "".concat(normalPrice(price), " \u20BD");
  };

  var printQuantity = function printQuantity() {
    var lenght = cartList.children.length;
    cartBtnCounter.textContent = lenght;
    lenght > 0 ? cartBtn.classList.add('active') : cartBtn.classList.remove('active');
  }; //удаление товара из корзины


  var deleteProducts = function deleteProducts(productParent) {
    var id = productParent.dataset.id;
    document.querySelector(".product-cards__card[data-id=\"".concat(id, "\"]")).querySelector('.product-cards__btn--incart').disabled = false;
    var currentPrice = parseInt(priceWithoutSpaces(document.querySelector(".product-cards__card[data-id=\"".concat(id, "\"]")).querySelector('.product-cards__price-sale').textContent));
    minusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();
    printQuantity();
  }; //генерирование разметки товара в корзине


  var generateCartProduct = function generateCartProduct(img, title, price, id) {
    return "\n    <li class=\"cart__item\" data-id=\"".concat(id, "\">\n      <img class=\"cart__img\" src=\"").concat(img, "\" alt=\"\u0424\u043E\u0442\u043E \u0442\u043E\u0432\u0430\u0440\u0430\">\n      <div class=\"cart__descriptions\">\n        <h4 class=\"cart__title\">").concat(title, "</h4>\n        <div class=\"cart__inner\">\n          <p class=\"cart__price-good\">").concat(price, "</p>\n          <p class=\"cart__counter-good\"><span>1</span>\u0448\u0442.</p>\n        </div>\n      </div>\n      <button class=\"cart__button-delete-good\"></button>\n    </li>\n    ");
  };

  if (productBtns.length) {
    productBtns.forEach(function (btn) {
      btn.closest('.product-cards__card').setAttribute('data-id', randomId());
      btn.addEventListener('click', function (e) {
        var self = e.currentTarget;
        var parent = self.closest('.product-cards__card');
        var id = parent.dataset.id;
        var img = parent.querySelector('.product-cards__img').getAttribute('src');
        var title = parent.querySelector('.product-cards__title').textContent;
        var priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product-cards__price-sale').textContent));
        plusFullPrice(priceNumber);
        cartList.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
        printFullPrice();
        printQuantity(); //disabled btn

        self.disabled = true;
      });
    });
  }

  cartList.addEventListener('click', function (e) {
    if (e.target.classList.contains('cart__button-delete-good')) {
      deleteProducts(e.target.closest('.cart__item'));
    }
  });
}
;

/***/ }),

/***/ "./src/js/customeGallerey.js":
/*!***********************************!*\
  !*** ./src/js/customeGallerey.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customeGallerey": () => (/* binding */ customeGallerey)
/* harmony export */ });
function customeGallerey() {
  var gallereBody = document.querySelector('.js-reviews-gallerey');

  if (gallereBody) {
    var setMouseGallereyStyle = function setMouseGallereyStyle() {
      var widthGallerey = gallereBody.offsetWidth;
      var widthDifferent = widthGallerey - document.documentElement.clientWidth;
      var distX = Math.floor(coordXpercent - positionX);
      positionX = positionX + distX * speed;
      var position = widthDifferent / 200 * positionX;
      gallereyBodyItem.style.cssText = "transform:translate3d(".concat(-position, "px,0,0);");
      gallereyBodyItem2.style.cssText = "transform:translate3d(".concat(-position, "px,0,0);");

      if (Math.abs(distX) > 0) {
        requestAnimationFrame(setMouseGallereyStyle);
      } else {
        gallereBody.classList.remove('init');
      }
    };

    var gallereyBodyItem = document.querySelector('.js-reviews-gallerey-row');
    var gallereyBodyItem2 = document.querySelector('.js-reviews-gallerey-row2'); //скорость анимации

    var speed = gallereBody.dataset.speed; //переменные

    var positionX = 0;
    var coordXpercent = 0;
    gallereyBodyItem.addEventListener('mousemove', function (e) {
      var widthGallerey = gallereBody.offsetWidth;
      var coordX = e.pageX - widthGallerey / 3;
      coordXpercent = Math.floor(coordX / widthGallerey * 350);

      if (!gallereBody.classList.contains('init')) {
        requestAnimationFrame(setMouseGallereyStyle);
        gallereBody.classList.add('init');
      }
    });
    gallereyBodyItem2.addEventListener('mousemove', function (e) {
      var widthGallerey = gallereBody.offsetWidth;
      var coordX = e.pageX - widthGallerey / 3;
      coordXpercent = Math.floor(coordX / widthGallerey * 350);

      if (!gallereBody.classList.contains('init')) {
        requestAnimationFrame(setMouseGallereyStyle);
        gallereBody.classList.add('init');
      }
    });
  }
}

/***/ }),

/***/ "./src/js/customeSwipers.js":
/*!**********************************!*\
  !*** ./src/js/customeSwipers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customeSwiper": () => (/* binding */ customeSwiper)
/* harmony export */ });
function customeSwiper() {
  var heroSwiper = document.querySelector('.js-hero-swiper');
  var minPicSwipers = document.querySelectorAll('.js-product-card-swiper-minpic');
  var videoObserv = document.querySelector('.js-video-observ');
  var articlesSwiper = document.querySelector('.js-articles-swiper');

  if (heroSwiper) {
    new Swiper(heroSwiper, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      navigation: {
        nextEl: '.js-hero-swiper-button-next',
        prevEl: '.js-hero-swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    });
  }

  if (minPicSwipers.length) {
    minPicSwipers.forEach(function (el) {
      new Swiper(el, {
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.js-min-pic-swiper-swiper-button-next',
          prevEl: '.js-min-pic-swiper-swiper-button-prev'
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
        prevEl: '.js-video-observ-button-prev'
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
          slidesPerView: 1
        },
        768: {
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
        prevEl: '.js-articles-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 3
        },
        1200: {
          spaceBetween: 50,
          slidesPerView: 4
        }
      }
    });
  }
}

/***/ }),

/***/ "./src/js/diagnosticAnimation.js":
/*!***************************************!*\
  !*** ./src/js/diagnosticAnimation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diagnosticAnimation": () => (/* binding */ diagnosticAnimation)
/* harmony export */ });
function diagnosticAnimation() {
  var diagnosticSection = document.querySelector('.js-diagnostic');
  var diagnosticItem = document.querySelectorAll('.js-diagnostic-item');
  var videoPlayButton = document.querySelector('.js-video-play-diagnostic');
  var videoBox = document.querySelector('.js-video-diagnostic');
  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var diagnosticCenter = diagnosticSection.offsetHeight / 2;

    if (scrollTop >= diagnosticCenter) {
      diagnosticItem.forEach(function (item) {
        item.classList.remove('diagnostic__item--translate-left');
        item.classList.remove('diagnostic__item--translate-right');
      });
      document.querySelector('.js-img-box').classList.remove('diagnostic__imgbox--opacity');
    }
  });
  videoPlayButton.addEventListener('click', function () {
    diagnosticItem.forEach(function (item) {
      item.classList.add('diagnostic__item--translate-left');
      item.classList.add('diagnostic__item--translate-right');
    });
    document.querySelector('.js-img-box').classList.add('diagnostic__imgbox--opacity');
    videoBox.insertAdjacentHTML("beforeend", '<iframe class="diagnostic__video" width="100%" height="100%" src="https://www.youtube.com/embed/1GVGWJqAWlQ?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  });
}
;

/***/ }),

/***/ "./src/js/dropDownLestTel.js":
/*!***********************************!*\
  !*** ./src/js/dropDownLestTel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropDownLestTel": () => (/* binding */ dropDownLestTel)
/* harmony export */ });
function dropDownLestTel() {
  var linkDropDown = document.querySelector('.js-header-tel');
  var dropdownListTel = document.querySelector('.js-dropdown-list-tel');

  if (linkDropDown) {
    linkDropDown.addEventListener('click', function (e) {
      dropdownListTel.classList.toggle('active');
    });
  }
}
;

/***/ }),

/***/ "./src/js/joicesCustome.js":
/*!*********************************!*\
  !*** ./src/js/joicesCustome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "joicesCustome": () => (/* binding */ joicesCustome)
/* harmony export */ });
function joicesCustome() {
  var elements = document.querySelectorAll('.js-choice');
  elements.forEach(function (el) {
    var choices = new Choices(el, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices search-form__select'
      }
    });
  });
}

/***/ }),

/***/ "./src/js/modals.js":
/*!**************************!*\
  !*** ./src/js/modals.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modals": () => (/* binding */ modals)
/* harmony export */ });
function modals() {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    var triggerModalCallback = document.querySelectorAll(triggerSelector);
    var modalCallback = document.querySelector(modalSelector);
    var buttonClose = document.querySelector(closeSelector); //.js-modal-callback-trigger
    //.js-modal-callback
    //.js-button-close

    triggerModalCallback.forEach(function (el) {
      el.addEventListener('click', function (e) {
        if (e.target) {
          e.preventDefault();
          modalCallback.style.display = 'flex';
          document.body.classList.add('js-modal-open');
        }
      });
    });
    buttonClose.addEventListener('click', function () {
      modalCallback.style.display = 'none';
      document.body.classList.remove('js-modal-open');
    });
    modalCallback.addEventListener('click', function (e) {
      if (e.target === modalCallback) {
        modalSelector.style.display = 'none';
        document.body.classList.remove('js-modal-open');
      }
    });
  }

  bindModal('.js-modal-callback-trigger', '.js-modal-callback', '.js-button-close');
}

/***/ }),

/***/ "./src/js/playVideo.js":
/*!*****************************!*\
  !*** ./src/js/playVideo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playVideo": () => (/* binding */ playVideo)
/* harmony export */ });
function playVideo() {
  var videoBoxes = document.querySelectorAll('.js-video');
  videoBoxes.forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (e.target.classList.contains('js-video-play')) ;
      el.insertAdjacentHTML("beforeend", '<iframe class="videos" width="100%" height="100%" src="https://www.youtube.com/embed/1GVGWJqAWlQ?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      el.querySelector('.js-video-play').remove();
    });
  });
}

/***/ }),

/***/ "./src/js/tabOffers.js":
/*!*****************************!*\
  !*** ./src/js/tabOffers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabOffes": () => (/* binding */ tabOffes)
/* harmony export */ });
function tabOffes() {
  var offerButtons = document.querySelectorAll('[data-tab]');
  var tabContents = document.querySelectorAll("[data-content]");

  if (offerButtons.length) {
    offerButtons.forEach(function (el, index) {
      if (index === 0) {
        el.classList.add('active');
      }

      el.addEventListener('click', function () {
        var currentButton = this.dataset.tab;
        var tabContent = document.querySelector("[data-content=\"".concat(currentButton, "\"]"));
        offerButtons.forEach(function (btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        tabContents.forEach(function (elem) {
          elem.classList.add('js-offers-tab-hidden');
        });
        tabContent.classList.remove('js-offers-tab-hidden');
      });
    });
  }
}

/***/ }),

/***/ "./src/js/tabTitles.js":
/*!*****************************!*\
  !*** ./src/js/tabTitles.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabTitles": () => (/* binding */ tabTitles)
/* harmony export */ });
function tabTitles() {
  var electrosamocatTitle = document.querySelectorAll('[data-title-electrosamocat]');
  var electrosamocatList = document.querySelectorAll('[data-controlers-electrosamocat]');
  var electrovelosipedTitle = document.querySelectorAll('[data-title-electrovelosiped]');
  var electrovelosipedList = document.querySelectorAll('[data-controlers-electrovelosiped]');
  var robotTitle = document.querySelectorAll('[data-title-robot]');
  var robotList = document.querySelectorAll('[data-controlers-robot]'); //активный класс удаляется у всех тайтлов , можно потом пофиксить или вообще оптимизировать этот код

  var electrosamocatParentWrapTitles = document.querySelectorAll('.titles-goods__item');
  electrosamocatTitle.forEach(function (title) {
    title.addEventListener('click', function () {
      var currentTab = title.dataset.titleElectrosamocat;
      var parentCurrentTab = title.closest('.titles-goods__item');
      var currentController = document.querySelector("[data-controlers-electrosamocat=\"".concat(currentTab, "\"]"));
      electrosamocatParentWrapTitles.forEach(function (li) {
        li.classList.remove('active');
      });

      if (parentCurrentTab.classList.contains('active')) {
        parentCurrentTab.classList.remove('active');
      } else {
        parentCurrentTab.classList.add('active');
      }

      electrosamocatList.forEach(function (item) {
        item.classList.add('js-hidden');
      });
      currentController.classList.remove('js-hidden');
    });
  });
  electrovelosipedTitle.forEach(function (title) {
    title.addEventListener('click', function () {
      var currentTab = title.dataset.titleElectrovelosiped;
      var parentCurrentTab = title.closest('.titles-goods__item');
      var currentController = document.querySelector("[data-controlers-electrovelosiped=\"".concat(currentTab, "\"]"));
      electrosamocatParentWrapTitles.forEach(function (li) {
        li.classList.remove('active');
      });

      if (parentCurrentTab.classList.contains('active')) {
        parentCurrentTab.classList.remove('active');
      } else {
        parentCurrentTab.classList.add('active');
      }

      electrovelosipedList.forEach(function (item) {
        item.classList.add('js-hidden');
      });
      currentController.classList.remove('js-hidden');
    });
  });
  robotTitle.forEach(function (title) {
    title.addEventListener('click', function () {
      var currentTab = title.dataset.titleRobot;
      var parentCurrentTab = title.closest('.titles-goods__item');
      var currentController = document.querySelector("[data-controlers-robot=\"".concat(currentTab, "\"]"));
      electrosamocatParentWrapTitles.forEach(function (li) {
        li.classList.remove('active');
      });

      if (parentCurrentTab.classList.contains('active')) {
        parentCurrentTab.classList.remove('active');
      } else {
        parentCurrentTab.classList.add('active');
      }

      robotList.forEach(function (item) {
        item.classList.add('js-hidden');
      });
      currentController.classList.remove('js-hidden');
    });
  });
}
;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _joicesCustome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./joicesCustome */ "./src/js/joicesCustome.js");
/* harmony import */ var _customeSwipers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customeSwipers */ "./src/js/customeSwipers.js");
/* harmony import */ var _tabOffers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabOffers */ "./src/js/tabOffers.js");
/* harmony import */ var _playVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playVideo */ "./src/js/playVideo.js");
/* harmony import */ var _customeGallerey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customeGallerey */ "./src/js/customeGallerey.js");
/* harmony import */ var _accordionFaq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordionFaq */ "./src/js/accordionFaq.js");
/* harmony import */ var _dropDownLestTel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropDownLestTel */ "./src/js/dropDownLestTel.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals */ "./src/js/modals.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart */ "./src/js/cart.js");
/* harmony import */ var _diagnosticAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./diagnosticAnimation */ "./src/js/diagnosticAnimation.js");
/* harmony import */ var _tabTitles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabTitles */ "./src/js/tabTitles.js");











window.addEventListener('DOMContentLoaded', function () {
  (0,_joicesCustome__WEBPACK_IMPORTED_MODULE_0__.joicesCustome)();
  (0,_customeSwipers__WEBPACK_IMPORTED_MODULE_1__.customeSwiper)();
  (0,_tabOffers__WEBPACK_IMPORTED_MODULE_2__.tabOffes)();
  (0,_playVideo__WEBPACK_IMPORTED_MODULE_3__.playVideo)();
  (0,_customeGallerey__WEBPACK_IMPORTED_MODULE_4__.customeGallerey)();
  (0,_accordionFaq__WEBPACK_IMPORTED_MODULE_5__.accordionFaq)();
  (0,_dropDownLestTel__WEBPACK_IMPORTED_MODULE_6__.dropDownLestTel)();
  (0,_modals__WEBPACK_IMPORTED_MODULE_7__.modals)();
  (0,_cart__WEBPACK_IMPORTED_MODULE_8__.cart)();
  (0,_diagnosticAnimation__WEBPACK_IMPORTED_MODULE_9__.diagnosticAnimation)();
  (0,_tabTitles__WEBPACK_IMPORTED_MODULE_10__.tabTitles)();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map

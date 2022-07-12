(()=>{"use strict";window.addEventListener("DOMContentLoaded",(function(){var e,t,o,n,i,r,s,a;document.querySelectorAll(".js-choice").forEach((function(e){new Choices(e,{searchEnabled:!1,classNames:{containerOuter:"choices search-form__select"}})})),e=document.querySelector(".js-hero-swiper"),t=document.querySelectorAll(".js-product-card-swiper-minpic"),o=document.querySelector(".js-video-observ"),n=document.querySelector(".js-articles-swiper"),e&&new Swiper(e,{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".js-hero-swiper-button-next",prevEl:".js-hero-swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),t.length&&t.forEach((function(e){new Swiper(e,{direction:"horizontal",loop:!0,navigation:{nextEl:".js-min-pic-swiper-swiper-button-next",prevEl:".js-min-pic-swiper-swiper-button-prev"}})})),o&&new Swiper(o,{direction:"horizontal",loop:!1,slidesPerView:"auto",spaceBetween:50,navigation:{nextEl:".js-video-observ-button-next",prevEl:".js-video-observ-button-prev"},breakpoints:{320:{spaceBetween:20,slidesPerView:1},768:{spaceBetween:50}}}),n&&new Swiper(n,{direction:"horizontal",loop:!1,slidesPerView:4,spaceBetween:50,navigation:{nextEl:".js-articles-button-next",prevEl:".js-articles-button-prev"},breakpoints:{320:{slidesPerView:1},768:{spaceBetween:20,slidesPerView:3},1200:{spaceBetween:50,slidesPerView:4}}}),i=document.querySelectorAll("[data-tab]"),r=document.querySelectorAll("[data-content]"),i.length&&i.forEach((function(e,t){0===t&&e.classList.add("active"),e.addEventListener("click",(function(){var e=this.dataset.tab,t=document.querySelector('[data-content="'.concat(e,'"]'));i.forEach((function(e){e.classList.remove("active")})),this.classList.add("active"),r.forEach((function(e){e.classList.add("js-offers-tab-hidden")})),t.classList.remove("js-offers-tab-hidden")}))})),s=document.querySelectorAll(".js-video"),document.querySelectorAll(".js-video-play"),s.forEach((function(e){e.addEventListener("click",(function(t){t.target.classList.contains("js-video-play")&&e.insertAdjacentHTML("beforeend",'<iframe class="videos" width="100%" height="100%" src="https://www.youtube.com/embed/1GVGWJqAWlQ?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),e.querySelector(".js-video-play").remove()}))})),function(){var e=document.querySelector(".js-reviews-gallerey");if(e){var t=document.querySelector(".js-reviews-gallerey-row"),o=document.querySelector(".js-reviews-gallerey-row2"),n=e.dataset.speed,i=0,r=0;function s(){var a=e.offsetWidth-document.documentElement.clientWidth,c=Math.floor(r-i),l=a/200*(i+=c*n);t.style.cssText="transform:translate3d(".concat(-l,"px,0,0);"),o.style.cssText="transform:translate3d(".concat(-l,"px,0,0);"),Math.abs(c)>0?requestAnimationFrame(s):e.classList.remove("init")}t.addEventListener("mousemove",(function(t){var o=e.offsetWidth,n=t.pageX-o/3;r=Math.floor(n/o*350),e.classList.contains("init")||(requestAnimationFrame(s),e.classList.add("init"))})),o.addEventListener("mousemove",(function(t){var o=e.offsetWidth,n=t.pageX-o/3;r=Math.floor(n/o*350),e.classList.contains("init")||(requestAnimationFrame(s),e.classList.add("init"))}))}}(),(a=document.querySelectorAll(".js-accordion-button")).length&&a.forEach((function(e){e.addEventListener("click",(function(){var t=e.nextElementSibling;t.style.maxHeight?(document.querySelectorAll(".accordion__content").forEach((function(e){return e.style.maxHeight=null})),e.classList.toggle("active")):(document.querySelectorAll(".accordion__content").forEach((function(e){return e.style.maxHeight=null})),t.style.maxHeight=t.scrollHeight+"px",e.classList.toggle("active"))}))}))}))})();
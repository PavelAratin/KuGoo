export function cart(){
  const linkCart = document.querySelector('.js-link-cart');
  const cart = document.querySelector('.js-cart');
  linkCart.addEventListener('click',function(){
    cart.classList.toggle('hidden')
  });
};
export function mapAnimate() {
  const mapDelivery = document.querySelector('.js-map-delivery');
  const mapDeliveryPaths = document.querySelectorAll('.map-delivery__path')
  const mapDeliveryDots = document.querySelectorAll('.js-map-delivery-dot')
  window.addEventListener('scroll', function () {
    if(mapDelivery){
      let windowCenter = (window.innerHeight / 2) + window.scrollY;
    if(windowCenter >= mapDelivery.offsetTop){
      mapDeliveryDots.forEach(function(dot){
        dot.classList.add('active')
      });
      mapDeliveryPaths.forEach(function(path){
        path.classList.add('active')
      });
    }else{
      mapDeliveryDots.forEach(function(dot){
        dot.classList.remove('active')
      });
      mapDeliveryPaths.forEach(function(path){
        path.classList.remove('active')
      });
    }
    }
  });
}
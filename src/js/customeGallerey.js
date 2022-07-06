export function customeGallerey() {
  const gallereBody = document.querySelector('.js-reviews-gallerey');
  if (gallereBody) {
    const gallereyBodyItem = document.querySelector('.js-reviews-gallerey-row')
    //скорость анимации
    const speed = gallereBody.dataset.speed;
    //переменные
    let positionX = 0;
    let coordXpercent = 0;
    function setMouseGallereyStyle() {
      let widthGallerey = gallereBody.offsetWidth;
      const widthDifferent = widthGallerey - document.documentElement.clientWidth;
      const distX = Math.floor(coordXpercent - positionX)
      positionX = positionX + (distX * speed)
      let position = widthDifferent / 200 * positionX
      gallereyBodyItem.style.cssText = `transform:translate3d(${-position}px,0,0);`;
      if (Math.abs(distX) > 0) {
        requestAnimationFrame(setMouseGallereyStyle)
      } else {
        gallereBody.classList.remove('init')
      }
    }
    gallereBody.addEventListener('mousemove', function (e) {
      let widthGallerey = gallereBody.offsetWidth;
      const coordX = e.pageX - widthGallerey / 3
      coordXpercent = Math.floor(coordX / widthGallerey * 350)
      if(!gallereBody.classList.contains('init')){
        requestAnimationFrame(setMouseGallereyStyle)
        gallereBody.classList.add('init')
      }
    });
  }
}
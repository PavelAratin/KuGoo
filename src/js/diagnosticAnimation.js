export function diagnosticAnimation(){
  const diagnosticSection = document.querySelector('.js-diagnostic');
  const diagnosticItem = document.querySelectorAll('.js-diagnostic-item');
  const videoPlayButton = document.querySelector('.js-video-play-diagnostic');
  const videoBox = document.querySelector('.js-video-diagnostic');
  window.addEventListener('scroll',function(){
    let scrollTop = window.scrollY
    let diagnosticCenter = diagnosticSection.offsetHeight / 2
    if(scrollTop >= diagnosticCenter){
      diagnosticItem.forEach(function(item){
        item.classList.remove('diagnostic__item--translate-left');
        item.classList.remove('diagnostic__item--translate-right');
      });
      document.querySelector('.js-img-box').classList.remove('diagnostic__imgbox--opacity')
    }
  });
  videoPlayButton.addEventListener('click',function(){
    diagnosticItem.forEach(function(item){
      item.classList.add('diagnostic__item--translate-left');
      item.classList.add('diagnostic__item--translate-right');
    });
    document.querySelector('.js-img-box').classList.add('diagnostic__imgbox--opacity')
    videoBox.insertAdjacentHTML("beforeend",'<iframe class="diagnostic__video" width="100%" height="100%" src="https://www.youtube.com/embed/1GVGWJqAWlQ?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  });
};
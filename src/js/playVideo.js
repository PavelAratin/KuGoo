export function playVideo(){
  const videoBoxes = document.querySelectorAll('.js-video');
  const videoPlayButtons = document.querySelectorAll('.js-video-play')
  videoBoxes.forEach(function(el){
    el.addEventListener('click',function(e){
      if(e.target.classList.contains('js-video-play'))
      el.insertAdjacentHTML("beforeend",'<iframe class="videos" width="100%" height="100%" src="https://www.youtube.com/embed/1GVGWJqAWlQ?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      el.querySelector('.js-video-play').remove()
    });
  });
}
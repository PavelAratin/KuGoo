export function playVideo(){
  const videoBox = document.querySelector('.js-video');
  const videoPlayButton = document.querySelector('.js-video-play')
  videoBox.addEventListener('click',function(e){
    console.log(e.target.className)
    if(e.target.classList.contains('js-video-play')){
      videoBox.insertAdjacentHTML("beforeend",'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/1GVGWJqAWlQ?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      videoPlayButton.remove();
    }
  });
}
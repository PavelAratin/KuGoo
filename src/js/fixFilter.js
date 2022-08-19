export function FixFilter() {
  const filterBlock = document.querySelector('.js-filter');
  const filterParent = document.querySelector('.js-filter-parent');
  const filterOffsetTop = filterParent.offsetTop;
  const smallOffset = 20;
  const marginBottom = 50;
  console.log(filterOffsetTop)

  const fixedScrollFilter = () => {
    let scrollDistance = window.scrollY
    let scrollDistance2 = window.scrollY - filterOffsetTop
    let scrollDistancOnBlock = scrollDistance2 + filterBlock.offsetHeight + smallOffset;
    let heightBlock = filterParent.offsetHeight - marginBottom
    if (scrollDistance > (filterOffsetTop - smallOffset) && scrollDistancOnBlock <= heightBlock) {
      filterBlock.classList.add('fixed')
    } else {
      filterBlock.classList.remove('fixed')
    }
    if(scrollDistancOnBlock >= heightBlock){
      filterBlock.classList.add('absolute')
    }else{
      filterBlock.classList.remove('absolute')

    }
  }

  window.addEventListener('scroll', fixedScrollFilter);
}
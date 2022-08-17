export function rangeSlider() {
  const rangeSlider = document.querySelector('.js-range-slider')
  const rangeSliderInput0 = document.querySelector('.js-range-input-0')
  const rangeSliderInput1 = document.querySelector('.js-range-input-1')
  const inputs = [rangeSliderInput0,rangeSliderInput1]
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [0, 50000],
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 50000
      }
    });
    rangeSlider.noUiSlider.on('update',function(values,handle){
     inputs[handle].value = Math.round(values[handle])
    })

    const setrangeSlider = (i,value) =>{
      let arr = [null,null];
      arr[i]= value;
      console.log(arr)
      rangeSlider.noUiSlider.set(arr)
    }

    inputs.forEach(function(input,index){
      input.addEventListener('change',(e)=>{
        setrangeSlider(index,e.currentTarget.value)

      })
    })
  }
}
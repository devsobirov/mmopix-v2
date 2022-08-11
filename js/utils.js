const rangeInputs = document.querySelectorAll('.input-range')

function handleInputChange(e) {
  let target = e.target
  
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

if (rangeInputs && rangeInputs.length) {
    rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange)
    })
}

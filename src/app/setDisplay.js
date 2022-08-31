import { domElements } from './domElements.js'
const { guessInput, sendBtn } = domElements
let { hundred, ten, unit, threeDisplays } = domElements

export function setErrorValue(statusCode) {
  const errorArray = statusCode.toString().split('')
  hundred.defaultValue = errorArray[0]
  ten.defaultValue = errorArray[1]
  unit.defaultValue = errorArray[2]
}

function setInputValue() {
  const num = guessInput.value
  let numArray = num.toString().split('')

  /* Delete all 0's until the first non-0 number if more than 2 digits */
  while (numArray[0] === '0' && numArray.length > 1) {
    numArray.shift()
  }

  switch (numArray.length) {
    case 3:
      hundred.defaultValue = numArray[0]
      ten.defaultValue = numArray[1]
      unit.defaultValue = numArray[2]

      for (let display of threeDisplays) {
        display.classList.remove('none')
      }
      break

    case 2:
      hundred.defaultValue = ''
      threeDisplays[0].classList.add('none')
      threeDisplays[1].classList.remove('none')
      ten.defaultValue = numArray[0]
      unit.defaultValue = numArray[1]
      break

    case 1:
      hundred.defaultValue = ''
      ten.defaultValue = ''
      unit.defaultValue = numArray[0]

      for (let i = 0; i < 2; i++) {
        threeDisplays[i].classList.add('none')
      }
      break
  }
}

sendBtn.addEventListener('click', setInputValue)

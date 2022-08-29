import { domElements } from './domElements.js'
const { guessInput, sendBtn } = domElements
let { hundred, ten, unit } = domElements

export function setErrorValue(statusCode) {
  const errorArray = statusCode.toString().split('')
  hundred.defaultValue = errorArray[0]
  ten.defaultValue = errorArray[1]
  unit.defaultValue = errorArray[2]
}

function setInputValue() {
  const num = guessInput.value
  let numArray = num.toString().split('')

  /* Delete all 0's in front of 
  the first non-zero number: */
  while (numArray[0] === '0') {
    numArray.shift()
  }

  switch (numArray.length) {
    case 3:
      hundred.defaultValue = numArray[0]
      ten.defaultValue = numArray[1]
      unit.defaultValue = numArray[2]
      break

    case 2:
      hundred.defaultValue = ''
      ten.defaultValue = numArray[0]
      unit.defaultValue = numArray[1]
      break

    case 1:
      hundred.defaultValue = ''
      ten.defaultValue = ''
      unit.defaultValue = numArray[0]
      break
  }
}

sendBtn.addEventListener('click', setInputValue)

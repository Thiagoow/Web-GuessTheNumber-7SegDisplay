import { domElements } from './domElements.js'
const { sendBtn, sendValue } = domElements
sendBtn.addEventListener('click', startGame)

import getRandomNumber from './fetchAPI.js'
const randomNumber = await getRandomNumber()
import { setErrorValue } from './setDisplay.js'

function startGame() {
  if (randomNumber > sendValue.value) {
    alert('É maior')
  } else if (randomNumber < sendValue.value) {
    alert('É menor')
  } else {
    alert('YOU WIN!')
  }
}

if (typeof randomNumber === 'object') {
  setErrorValue(randomNumber.StatusCode)
} else {
  console.log(randomNumber)
}

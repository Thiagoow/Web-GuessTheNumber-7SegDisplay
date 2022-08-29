import { domElements } from './domElements.js'
const { guessInput, sendBtn, guessStatus } = domElements

import getRandomNumber from './fetchAPI.js'
const randomNumber = await getRandomNumber()
import { setErrorValue } from './setDisplay.js'

function errorHappened() {
  guessStatus.textContent = `Erro - ${randomNumber.Error}`
  guessStatus.classList.add('appError')
  setErrorValue(randomNumber.StatusCode)
}

function startGame() {
  if (guessInput.value.length !== 0) {
    if (randomNumber > guessInput.value) {
      guessStatus.textContent = 'É maior'
    } else if (randomNumber < guessInput.value) {
      guessStatus.textContent = 'É menor'
    } else {
      guessStatus.textContent = 'Você acertou!!!!'
      guessStatus.classList.add('rightGuess')
    }
  }
}

if (typeof randomNumber === 'object') {
  errorHappened()
} else {
  console.log(randomNumber)
  sendBtn.addEventListener('click', startGame)
}

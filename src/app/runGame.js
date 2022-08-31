import { domElements } from './domElements.js'
const { guessInput, sendBtn, guessStatus, root, rootStyles } = domElements

import getRandomNumber from './fetchAPI.js'
const randomNumber = await getRandomNumber()
import { setErrorValue } from './setDisplay.js'

if (typeof randomNumber === 'object') {
  errorHappened()
} else {
  sendBtn.addEventListener('click', startGame)
}

function errorHappened() {
  changeDisplayColor('appError')
  guessStatus.textContent = `Erro - ${randomNumber.Error}`
  setErrorValue(randomNumber.StatusCode)
}

function restartGame() {
  guessInput.value = ''
  guessStatus.removeAttribute('class')
}

function startGame() {
  const guess = Number(guessInput.value)
  restartGame()

  if (guess.length !== 0) {
    if (randomNumber > guess) {
      guessStatus.textContent = 'É maior'
    } else if (randomNumber < guess) {
      guessStatus.textContent = 'É menor'
    } else {
      changeDisplayColor('rightGuess')
      guessStatus.textContent = 'Você acertou!!!!'
    }
  }
}

function changeDisplayColor(status) {
  const yeyColor = rootStyles.getPropertyValue(`--yeyNumColor`)
  const errorColor = rootStyles.getPropertyValue(`--errorNumColor`)

  switch (status) {
    case 'rightGuess':
      guessStatus.classList.add('rightGuess')
      root.style.setProperty('--activeNumColor', yeyColor)
      break

    case 'appError':
      guessStatus.classList.add('appError')
      root.style.setProperty('--activeNumColor', errorColor)
      break

    default:
      console.error('Invalid display color params!!')
      break
  }
}

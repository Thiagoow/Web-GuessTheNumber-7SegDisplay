import getRandomNumber from './fetchAPI.js'
import { setErrorValue } from './setDisplay.js'
import { domElements } from './domElements.js'
const {
  threeDisplays,
  ten,
  guessInput,
  sendBtn,
  guessStatus,
  root,
  rootStyles,
  newGameBtn
} = domElements

let randomNumber = await getRandomNumber()

if (typeof randomNumber === 'object') {
  errorHappened()
} else {
  emptyDisplay()
  sendBtn.addEventListener('click', startGame)
  newGameBtn.addEventListener('click', startNew)
}

function emptyDisplay() {
  guessInput.value = ''
  threeDisplays[0].classList.add('none')
  ten.defaultValue = 0
  threeDisplays[2].classList.add('none')
}

async function startNew() {
  restartGame()
  emptyDisplay()
  guessStatus.textContent = ''
  setDisplayColor('active')
  randomNumber = await getRandomNumber()
}

function disabledBtnInput() {
  newGameBtn.classList.remove('none')
  sendBtn.classList.add('disabledBtn')
  guessInput.classList.add('disabledInput')
}

function errorHappened() {
  disabledBtnInput()
  setDisplayColor('appError')
  guessStatus.textContent = `ERRO - ${randomNumber.Error}`
  setErrorValue(randomNumber.StatusCode)

  newGameBtn.addEventListener('click', () => {
    location.reload()
  })
}

function restartGame() {
  sendBtn.removeAttribute('class')
  newGameBtn.classList.add('none')
  guessInput.removeAttribute('class')
  guessStatus.removeAttribute('class')
}

function startGame() {
  const guess = Number(guessInput.value)
  threeDisplays[2].classList.remove('none')
  restartGame()

  if (guess.length !== 0) {
    if (randomNumber > guess) {
      guessStatus.textContent = 'É maior'
    } else if (randomNumber < guess) {
      guessStatus.textContent = 'É menor'
    } else {
      disabledBtnInput()
      guessInput.value = ''
      setDisplayColor('rightGuess')
      guessStatus.textContent = 'Você acertou!!!!'
    }
  }
}

const defaultColor = rootStyles.getPropertyValue('--activeNumColor')
//☝🏽 Defined out of scope to avoid redefining when function is called
function setDisplayColor(status) {
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

    case 'active':
      root.style.setProperty('--activeNumColor', defaultColor)
      break

    default:
      console.error('Invalid display color params!!')
      break
  }
}

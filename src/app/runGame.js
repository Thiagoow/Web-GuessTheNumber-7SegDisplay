import getRandomNumber from './fetchAPI.js'
import { setErrorValue } from './setDisplay.js'

const randomNumber = await getRandomNumber()

if (typeof randomNumber === 'object') {
  setErrorValue(randomNumber.StatusCode)
} else {
  console.log(randomNumber)
}

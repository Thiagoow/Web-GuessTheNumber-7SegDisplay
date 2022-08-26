const sendValue = document.querySelector('#sendValue')
const sendBtn = document.querySelector('#sendBtn')

//7 segment displays:
let hundred = document.getElementById('hundred')
let ten = document.getElementById('ten')
let unit = document.getElementById('unit')

function setDisplayValue() {
  const num = sendValue.value
  let numArray = num.split('')

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

sendBtn.addEventListener('click', setDisplayValue)

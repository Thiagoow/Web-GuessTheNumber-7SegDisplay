export const domElements = {
  guessStatus: document.querySelector('#guessStatus'),
  guessInput: document.querySelector('#guessInput'),
  sendBtn: document.querySelector('#sendBtn'),

  //7 segment displays:
  hundred: document.getElementById('hundred'),
  ten: document.getElementById('ten'),
  unit: document.getElementById('unit'),
  //To change segment colors:
  rootStyles: getComputedStyle(document.querySelector(':root')),
  root: document.querySelector(':root')
}

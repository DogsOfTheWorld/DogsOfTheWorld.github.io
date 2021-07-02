const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')

const additionInput = document.querySelector('#addition')
const subtractionInput = document.querySelector('#subtraction')
const multiplicationInput = document.querySelector('#multiplication')
const divisionInput = document.querySelector('#division')

const output = document.querySelector('#output')
const color_toggle = document.querySelector('#color_toggle')
additionInput.addEventListener('click', e => {
  output.innerHTML = parseInt(input1.value) + parseInt(input2.value)
})

subtractionInput.addEventListener('click', e => {
output.innerHTML = parseInt(input1.value) - parseInt(input2.value)
})

multiplicationInput.addEventListener('click', e => {
output.innerHTML = parseInt(input1.value) * parseInt(input2.value)
})

divisionInput.addEventListener('click', e => {
output.innerHTML = parseInt(input1.value) / parseInt(input2.value)
})

color_toggle.addEventListener('click', e => {
  document.querySelector('body').classList.toggle('dark');
})

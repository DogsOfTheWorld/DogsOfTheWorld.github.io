const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')

const additionInput = document.querySelector('#addition')
const subtractionInput = document.querySelector('#subtraction')
const multiplicationInput = document.querySelector('#multiplication')
const divisionInput = document.querySelector('#division')

const output = document.querySelector('#output')

additionInput.addEventListener('click', e => {
  alert("clicked")
  output.innerHTML = input1.value + input2.value
})

subtractionInput.addEventListener('click', e => {

})

multiplicationInput.addEventListener('click', e => {

})

divisionInput.addEventListener('click', e => {

})

color_toggle.addEventListener('click', e => {
  document.querySelector('body').classList.toggle('dark');
})

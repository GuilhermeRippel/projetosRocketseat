import { modal } from './modal.js'

/*variáveis*/
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const alertError = document.querySelector('#error')

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if(showAlertError){
        alertError.classList.add('open')
        return;
    } else {
        alertError.classList.remove('open')
    }

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`
    modal.message.innerText = message

    modal.open()
}

function notANumber(value){
    return isNaN(value) || value == ""
}

function IMC(weight, height){
    return ( weight / ((height / 100) ** 2)).toFixed(2)
}




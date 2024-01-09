let firstNumber = prompt('Digite o primeiro número:')
let secondNumber = prompt('Digite o segundo número:')

let soma = Number(firstNumber) + Number(secondNumber)
let subtracao = Number(firstNumber) - Number(secondNumber)
let multiplicacao = Number(firstNumber) * Number(secondNumber)
let divisao = Number(firstNumber) / Number(secondNumber)
let restoDivisao = Number(firstNumber) % Number(secondNumber)

alert(`A soma dos números é igual à: ${soma}`)
alert(`A subtração dos números é igual à: ${subtracao}`)
alert(`A multiplicação dos números é igual à: ${multiplicacao}`)
alert(`A divisão dos números é igual à: ${divisao}`)
alert(`O resto da divisão dos números é igual à: ${restoDivisao}`)

if(soma % 2 == 0){
    alert('A soma dos números é par')
} else {
    alert('A soma dos números é ímpar')
}

if(Number(firstNumber) === Number(secondNumber)){
    alert('Os números inseridos são iguais')
} else {
    alert ('Os números inseridos são diferentes')
}



let operacao = prompt("Digite qual operação você deseja, + - / *")
let number1, number2
switch(operacao){
    case "+":
        number1 = prompt("Digite o primeiro valor:")
        number2 = prompt("Digite o segundo valor:")
        alert(`O resultado da soma é: ${Number(number1) + Number(number2)}`)
        break
    case "-":
        number1 = prompt("Digite o primeiro valor:")
        number2 = prompt("Digite o segundo valor:")
        alert(`O resultado da subtração é: ${Number(number1) - Number(number2)}`)
        break
    case "*":
        number1 = prompt("Digite o primeiro valor:")
        number2 = prompt("Digite o segundo valor:")
        alert(`O resultado da multiplicação é: ${Number(number1) * Number(number2)}`)
        break
    case "/":
        number1 = prompt("Digite o primeiro valor:")
        number2 = prompt("Digite o segundo valor:")
        alert(`O resultado da divisão é: ${Number(number1) / Number(number2)}`)
        break
}
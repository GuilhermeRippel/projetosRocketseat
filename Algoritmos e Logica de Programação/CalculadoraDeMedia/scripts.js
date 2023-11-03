let nota1 = prompt('Digite sua primeira nota')
let nota2 = prompt('Digite sua segunda nota')
let nota3 = prompt('Digite sua terceira nota')

let resultado = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

if(resultado < 6){
    alert(`Sua nota foi de ${resultado.toFixed(2)}, reprovado`)
} else {
    alert(`Sua nota foi de ${resultado.toFixed(2)}, aprovado`)
}

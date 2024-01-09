let students = [
    {
        nome: 'Gui',
        nota1: 8,
        nota2: 6,
    },

    {
        nome: 'Maria',
        nota1: 7,
        nota2: 2,
    },

    {
        nome: 'João',
        nota1: 7,
        nota2: 7
    }
]

for(let index = 0; index < students.length; index++){
    let media = (students[index].nota1 + students[index].nota2) / 2
    if(media >= 7){
        alert(`Parabéns ${students[index].nome} você está aprovado(a) com média ${media}`)
    } else{
        alert(`Desculpe ${students[index].nome} você está reprovado(a) com média ${media}`)
    }
}
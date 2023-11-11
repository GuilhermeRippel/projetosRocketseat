let randomNumber = Math.round(Math.random() * 10);
let correct = document.querySelector('h2')
let xAttempts = 1;

function handleClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    if(inputNumber.value >= 0 && inputNumber.value <= 10){
        if(Number(inputNumber.value) == randomNumber){
            document.querySelector(".screen1").classList.add("hide")
            document.querySelector(".screen2").classList.remove("hide")

            correct.innerText = `Parabéns você acertou em ${xAttempts} tentativas`
        } 

        inputNumber.value = ''
        xAttempts++
    } else {
        alert('Digite um número entre 0 e 10')
    }
}


function playAgain(){
    document.querySelector('.screen1').classList.remove('hide')
    document.querySelector('.screen2').classList.add('hide')

    randomNumber = Math.round(Math.random() * 10);
    xAttempts = 1
}
const displayComputerChoice = document.getElementById('computer-choice');
const myChoice = document.getElementById('my-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    myChoice.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    displayComputerChoice.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!'
    }
    resultDisplay.innerHTML = result
};
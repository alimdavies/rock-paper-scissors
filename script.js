let humanScore = 0
let computerScore = 0

const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')
const buttonsContainer = document.querySelector('#buttonsContainer')



function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    switch (choice) {
        case 1:
            return "rock"
            break
        case 2:
            return "paper"
            break
        case 3:
            return "scissors"
            break
    }
}

function getHumanChoice() {
    buttonsContainer.addEventListener('click', (e) => {
        e.preventDefault()
        return e.target.name
    })
}


function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    if(confirm("No one wins"))
                    break
                case "paper":
                    if(confirm("You lost")) computerScore++
                    break
                case "scissors":
                    if(confirm("You won")) humanScore++
                    break
                default:
                    break
            }
            break
        case "paper":
            switch (computerChoice) {
                case "rock":
                    if(confirm("You won")) humanScore++
                    break
                case "paper":
                    if(confirm("No one wins"))
                    break
                case "scissors":
                    if(confirm("You lost")) computerScore++
                    break
                default:
                    break
            }
            break
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    if(confirm("You lost")) computerScore++
                    break
                case "paper":
                    if(confirm("You won")) humanScore++
                    break
                case "scissors":
                    if(confirm("No one wins"))
                    break
                default:
                    break
            }
        default:
            break
    }
}

function playGame() {
    if(confirm("Game started. The first one to win 5 rounds wins the game."))
    while(computerScore < 5 && humanScore < 5) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    if(humanScore == 5) {
        confirm("You won the game!")
    } else if (computerScore == 5) {
        confirm("You lost the game.")
    }
}
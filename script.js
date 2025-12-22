let humanScore = 0
let computerScore = 0

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
    let input = prompt("Rock, paper, scissors. Choose:")
    let choice
    if(input == "rock" || input == "Rock" || input == "ROCK" || input == "RocK") {
        return "rock"
    } else if (input == "paper" || input == "Paper" || input == "PAPER" || input == "PapeR") {
        return "paper"
    } else if (input == "scissors" || input == "Scissors" || input == "SCISSORS" || input == "ScissorS") {
        return "scissors"
    }
}


function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    confirm("No one wins")
                    break
                case "paper":
                    confirm("You lost")
                    computerScore++
                    break
                case "scissors":
                    confirm("You won")
                    humanScore++
                    break
                default:
                    break
            }
            break
        case "paper":
            switch (computerChoice) {
                case "rock":
                    confirm("You won")
                    humanScore++
                    break
                case "paper":
                    confirm("No one wins")
                    break
                case "scissors":
                    confirm("You lost")
                    computerScore++
                default:
                    break
            }
            break
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    confirm("You lost")
                    computerScore++
                    break
                case "paper":
                    confirm("You won")
                    humanScore++
                    break
                case "scissors":
                    confirm("No one wins")
                default:
                    break
            }
        default:
            break
    }
}

function playGame() {
    confirm("Game started. The first one to win 5 rounds wins the game.")
    while(computerScore < 5 && humanScore < 5) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    if(humanScore == 5) {
        confirm("You won the game!")
    } else if (computerScore == 5) {
        confirm("You lost the game.")
    }
}

playGame()
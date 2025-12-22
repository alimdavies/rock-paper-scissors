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
    return prompt("Rock, paper, scissors. Choose:")
}


function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("No one wins")
                    break
                case "paper":
                    console.log("You lost")
                    break
                case "scissors":
                    console.log("You won")
                    break
                default:
                    break
            }
            break
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You won")
                    break
                case "paper":
                    console.log("No one wins")
                    break
                case "scissors":
                    console.log("You lost")
                default:
                    break
            }
            break
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You lost")
                    break
                case "paper":
                    console.log("You won")
                    break
                case "scissors":
                    console.log("No one wins")
                default:
                    break
            }
        default:
            break
    }
}

playRound(getHumanChoice(), getComputerChoice())

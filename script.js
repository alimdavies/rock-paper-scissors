let humanScore = 0
let computerScore = 0

const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')
const buttonsContainer = document.querySelector('#buttonsContainer')
const results = document.querySelector('#results')
const scoreBoard = document.querySelector('#scoreBoard')
const humanScoreBoard = document.querySelector('#humanScore')
const computerScoreBoard = document.querySelector('#computerScore')

const playAgainBtn = document.createElement('button')
playAgainBtn.textContent = "Play again"

rockBtn.disabled = false

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

buttonsContainer.addEventListener('click', (e) => {
    e.preventDefault()
    playRound(e.target.name, getComputerChoice())
})

function playAgain() {
    document.body.appendChild(playAgainBtn)
    playAgainBtn.addEventListener('click', () => {
        rockBtn.disabled = false
        paperBtn.disabled = false
        scissorsBtn.disabled = false
        results.textContent = ""
        document.body.removeChild(playAgainBtn)
        humanScore = 0
        computerScore = 0
    })
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    results.textContent = "No one wins"
                    break
                case "paper":
                    results.textContent = "You loose"
                    computerScore++
                    break
                case "scissors":
                    results.textContent = "You win"
                    humanScore++
                    break
                default:
                    break
            }
            break
        case "paper":
            switch (computerChoice) {
                case "rock":
                    results.textContent = "You win" 
                    humanScore++
                    break
                case "paper":
                    results.textContent = "No one wins"
                    break
                case "scissors":
                    results.textContent = "You loose" 
                    computerScore++
                    break
                default:
                    break
            }
            break
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    results.textContent = "You loose" 
                    computerScore++
                    break
                case "paper":
                    results.textContent = "You win" 
                    humanScore++
                    break
                case "scissors":
                    results.textContent = "No one wins"
                    break
                default:
                    break
            }
            break
        default:
            break
    }
    humanScoreBoard.textContent = humanScore
    computerScoreBoard.textContent = computerScore
    if(humanScore === 5) {
        results.textContent = "You won the game"
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true
        playAgain()
    } else if (computerScore === 5) {
        results.textContent = "You lost the game"
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true
        playAgain()
    }
}
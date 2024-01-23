let userChoice;
let computerChoice = getComputerChoice()
let userScore = 0
let computerScore = 0


function getComputerChoice()  {

    let randomNumber = Math.floor(Math.random()*3)
    
    switch (randomNumber) {
        case 0 :
            return "Rock"
        case 1 :
            return "Paper"
        case 2 :
            return "Scissors"
    }
}

function playRound(userChoice, computerChoice) {

    userChoice = window.prompt("Rock, Paper or Scissors ?")

    if ((userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")) {

        console.log("You win !")
        return userScore++

    } else if (userChoice === computerChoice) {
        console.log("It's a tie")
        return "It's a tie !"

    } else {
        console.log("You loose !")
        return computerScore++ 
    }
}

function game() {
    playRound(userChoice,computerChoice)
    playRound(userChoice,computerChoice)
    playRound(userChoice,computerChoice)
    playRound(userChoice,computerChoice)
    playRound(userChoice,computerChoice)
}

game()

console.log(userScore)
console.log(computerScore)
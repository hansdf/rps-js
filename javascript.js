let userGuess
let userScore = 0
let cpuScore = 0
let rounds = 0

function getCpuChoice(max) { // get random number from 0 to max
    randomNumber = Math.floor(Math.random() * max)
    return randomNumber
}
// 0=paper 1=rock 2=scissors

function playerChosePaper() {
    alert("You chose paper!");
    userGuess = "paper";
    console.log("userGuess is currently " + userGuess);
}

function playerChoseScissors() {
    alert("You chose scissors!");
    userGuess = "scissors";
    console.log("userGuess is currently " + userGuess);
}

function playRound(userGuess, cpuChoice) {
    console.log("User chose " + userGuess + " and CPU chose " + cpuChoice)
    if (userGuess == "rock" & cpuChoice == 2) {
        rounds = rounds+1
        userScore = userScore+1
        alert("User wins!")
    } else if (userGuess == "rock" & cpuChoice == 0) {
        rounds = rounds+1
        cpuScore = cpuScore+1
        alert("CPU Wins!")
    } else if (userGuess == "rock" & cpuChoice == 1) {
        rounds = rounds+1
        cpuScore = cpuScore+1
        alert("CPU Wins!")
    } else if (userGuess == "paper" & cpuChoice == 1) {
        rounds = rounds+1
        userScore = userScore+1
        alert("User wins!")
    } else if (userGuess == "paper" & cpuChoice == 0) {
        rounds = rounds+1
        cpuScore = cpuScore+1
        alert("CPU Wins!")
    } else if (userGuess == "paper" & cpuChoice == 2) {
        rounds = rounds+1
        cpuScore = cpuScore+1
        alert("CPU Wins!")
    } else if (userGuess == "scissors" & cpuChoice == 0) {
        rounds = rounds+1
        userScore = userScore+1
        alert("User wins!")
    } else if (userGuess == "scissors" & cpuChoice == 1) {
        rounds = rounds+1
        cpuScore = cpuScore+1
        alert("CPU Wins!")
    } else {
        rounds = rounds+1
        cpuScore = cpuScore+1
        alert("CPU Wins!")
    }
    
}


const rockButton = document.querySelector("#rockBtn");
rockButton.addEventListener("click", function() {
    let cpuChoice = getCpuChoice(3)
    userGuess = "rock";
    playRound(userGuess,cpuChoice)
});

const paperButton = document.querySelector("#paperBtn");
paperButton.addEventListener("click", function() {
    let cpuChoice = getCpuChoice(3)
    userGuess = "paper";
    playRound(userGuess,cpuChoice)
})

const scissorsButton = document.querySelector("#scissorsBtn");
scissorsButton.addEventListener("click", function() {
    let cpuChoice = getCpuChoice(3)
    userGuess = "scissors";
    playRound(userGuess,cpuChoice)
})



// userGuess = prompt("Please enter your guess for this rounds : rock / paper / scissors", "")
// console.log("user won " + userScore + " rounds")
// console.log("cpu won " + cpuScore + " rounds")
alert("This is a Rock Paper Sicssors game \nIt will be played in 5 rounds!")

function getCpuChoice(max) {
    randomNumber = Math.floor(Math.random() * max)
    return randomNumber
}

let cpuChoice = getCpuChoice(3)
console.log(cpuChoice)

// 0 = paper
// 1 = rock
// 2 = scissors

let userGuess
let userScore = 0
let cpuScore = 0
let rounds = 0
console.log(userGuess)

while (rounds < 5) {
    userGuess = prompt("Please enter your guess for this rounds : rock / paper / scissors", "")

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

console.log("user won " + userScore + " rounds")
console.log("cpu won " + cpuScore + " rounds")
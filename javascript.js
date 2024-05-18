/* 
set random choice for computer
use math random *1 up to 3, each number == one option
get user input, use prompt()
check if user input x and computer y, user wins...
console log result
*/

console.log("Hello World")

function getCpuChoice(max) {
    randomNumber = Math.floor(Math.random() * max)
    return randomNumber
}

let cpuChoice = getCpuChoice(3)
console.log(cpuChoice)

// 0 = paper
// 1 = rock
// 2 = scissors

let userGuess = prompt("Please enter your guess(rock / paper / scissors)", "")
console.log(userGuess)

if (userGuess == "rock" & cpuChoice == 2) {
    alert("User wins!")
} else if (userGuess == "rock" & cpuChoice == 0) {
    alert("CPU Wins!")
} else if (userGuess == "rock" & cpuChoice == 1) {
    alert("CPU Wins!")
} else if (userGuess == "paper" & cpuChoice == 1) {
    alert("User wins!")
} else if (userGuess == "paper" & cpuChoice == 0) {
    alert("CPU Wins!")
} else if (userGuess == "paper" & cpuChoice == 2) {
    alert("CPU Wins!")
} else if (userGuess == "scissors" & cpuChoice == 0) {
    alert("User wins!")
} else if (userGuess == "scissors" & cpuChoice == 1) {
    alert("CPU Wins!")
} else {
    alert("CPU Wins!")
}
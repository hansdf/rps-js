let userGuess;
let rounds = 0;
let resultWord;
let cpuChoiceWord;
let result = false; // true for player win and false for CPU win

function getCpuChoice(max) {
    // get random number from 0 to max
    let randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
} // 0=paper 1=rock 2=scissors

function playRound(userGuess, cpuChoice) {
    console.log("User chose " + userGuess + " and CPU chose " + cpuChoice);

    if (userGuess == "rock" && cpuChoice == 2) {
        result = true;
        cpuChoiceWord = "scissors";
    } else if (userGuess == "rock" && cpuChoice == 0) {
        result = false;
        cpuChoiceWord = "paper";
    } else if (userGuess == "rock" && cpuChoice == 1) {
        result = false;
        cpuChoiceWord = "rock";
    } else if (userGuess == "paper" && cpuChoice == 1) {
        result = true;
        cpuChoiceWord = "rock";
    } else if (userGuess == "paper" && cpuChoice == 0) {
        result = false;
        cpuChoiceWord = "paper";
    } else if (userGuess == "paper" && cpuChoice == 2) {
        result = false;
        cpuChoiceWord = "scissors";
    } else if (userGuess == "scissors" && cpuChoice == 0){
        result = true;
        cpuChoiceWord = "paper";
    } else if (userGuess == "scissors" && cpuChoice == 1){
        result = false;
        cpuChoiceWord = "rock";
    } else if (userGuess == "scissors" && cpuChoice == 2){
        result = false;
        cpuChoiceWord = "scissors";
    }

    if (result == true) {
        resultWord = "won!"
    } else if (result == false) {
        resultWord = "lost :("
    }

}
const container = document.querySelector(".container");
const rockButton = document.querySelector("#rockBtn");

rockButton.addEventListener("click", function() {
    let cpuChoice = getCpuChoice(3);
    userGuess = "rock";
    playRound(userGuess, cpuChoice);

    let resultElement = document.createElement("h1");
    resultElement.textContent = "Computer chose " + cpuChoiceWord + ", you " + resultWord;
    container.appendChild(resultElement);
});

const paperButton = document.querySelector("#paperBtn");

paperButton.addEventListener("click", function() {
    let cpuChoice = getCpuChoice(3);
    userGuess = "paper";
    playRound(userGuess, cpuChoice);

    let resultElement = document.createElement("h1");
    resultElement.textContent = "Computer chose " + cpuChoiceWord + ", you " + resultWord;
    container.appendChild(resultElement);
});

const scissorsButton = document.querySelector("#scissorsBtn");

scissorsButton.addEventListener("click", function() {
    let cpuChoice = getCpuChoice(3);
    userGuess = "scissors";
    playRound(userGuess, cpuChoice);

    let resultElement = document.createElement("h1");
    resultElement.textContent = "Computer chose " + cpuChoiceWord + ", you " + resultWord;
    container.appendChild(resultElement);
});

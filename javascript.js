let userGuess;
let userScore = 0;
let cpuScore = 0;
let rounds = 0;
let resultWord;
let cpuChoiceWord;
let result = ""; // "win", "lose", or "draw"

function getCpuChoice(max) {
    // get random number from 0 to max
    let randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
} // 0=paper 1=rock 2=scissors

function playRound(userGuess, cpuChoice) {
    console.log("User chose " + userGuess + " and CPU chose " + cpuChoice);

    if (userGuess === "rock" && cpuChoice === 2) {
        result = "win";
        cpuChoiceWord = "scissors";
    } else if (userGuess === "rock" && cpuChoice === 0) {
        result = "lose";
        cpuChoiceWord = "paper";
    } else if (userGuess === "rock" && cpuChoice === 1) {
        result = "draw";
        cpuChoiceWord = "rock";
    } else if (userGuess === "paper" && cpuChoice === 1) {
        result = "win";
        cpuChoiceWord = "rock";
    } else if (userGuess === "paper" && cpuChoice === 0) {
        result = "draw";
        cpuChoiceWord = "paper";
    } else if (userGuess === "paper" && cpuChoice === 2) {
        result = "lose";
        cpuChoiceWord = "scissors";
    } else if (userGuess === "scissors" && cpuChoice === 0) {
        result = "lose";
        cpuChoiceWord = "rock";
    } else if (userGuess === "scissors" && cpuChoice === 1) {
        result = "win";
        cpuChoiceWord = "paper";
    } else if (userGuess === "scissors" && cpuChoice === 2) {
        result = "draw";
        cpuChoiceWord = "scissors";
    }

    if (result === "win") {
        resultWord = "won!";
    } else if (result === "lose") {
        resultWord = "lost :(";
    } else if (result === "draw") {
        resultWord = "drew.";
    }
}

const container = document.querySelector(".container");

const rockButton = document.querySelector("#rockBtn");
rockButton.addEventListener("click", function() {
    let cpuChoice = getCpuChoice(3);
    userGuess = "rock";
    playRound(userGuess, cpuChoice);

    let resultElement = document.createElement("h1");
    resultElement.textContent = "You chose rock and the computer chose " + cpuChoiceWord + ", you " + resultWord;
    container.appendChild(resultElement);
});

const paperButton = document.querySelector("#paperBtn");
paperButton.addEventListener("click", function() {
    let cpuChoice = getCpuChoice(3);
    userGuess = "paper";
    playRound(userGuess, cpuChoice);

    let resultElement = document.createElement("h1");
    resultElement.textContent = "You chose paper and the computer chose " + cpuChoiceWord + ", you " + resultWord;
    container.appendChild(resultElement);
});

const scissorsButton = document.querySelector("#scissorsBtn");
scissorsButton.addEventListener("click", function() {
    let cpuChoice = getCpuChoice(3);
    userGuess = "scissors";
    playRound(userGuess, cpuChoice);

    let resultElement = document.createElement("h1");
    resultElement.textContent = "You chose scissors and the computer chose " + cpuChoiceWord + ", you " + resultWord;
    container.appendChild(resultElement);
});

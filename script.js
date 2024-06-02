let humanScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const result = document.querySelector(".result-text");

function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

rockButton.addEventListener("click", () => {
  playGame("Rock");
});

paperButton.addEventListener("click", () => {
  playGame("Paper");
});

scissorsButton.addEventListener("click", () => {
  playGame("Scissors");
});

function playGame(playerChoice) {
  let computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    result.innerText = "It's a tie!";
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    computerScore++;
    result.innerText = "You lose! Rock loses to Paper.";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++;
    result.innerText = "You win! Rock beats Scissors.";
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    result.innerText = "You lose! Paper loses to Scissors.";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    result.innerText = "You win! Paper beats Rock.";
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    computerScore++;
    result.innerText = "You lose! Scissors loses to Rock.";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    humanScore++;
    result.innerText = "You win! Scissors beats Paper.";
  }
}

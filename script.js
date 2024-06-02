let humanScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];
const rounds = 5;

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

const result = document.querySelector(".result-text");
const gameOver = document.querySelector(".game-over-text");
const gameState = document.querySelector(".game-state-text");

function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function resetGameOverText() {
  gameOver.innerText = "";
}

rockButton.addEventListener("click", () => {
  resetGameOverText();
  playGame("Rock");
});

paperButton.addEventListener("click", () => {
  resetGameOverText();
  playGame("Paper");
});

scissorsButton.addEventListener("click", () => {
  resetGameOverText();
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

  gameState.innerText = `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === rounds) {
    humanScore = 0;
    computerScore = 0;
    gameOver.innerText =
      "You won the game! Press any of the buttons to play again!";
  } else if (computerScore === rounds) {
    humanScore = 0;
    computerScore = 0;
    gameOver.innerText =
      "You lost the game! Press any of the buttons to play again!";
  }
}

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

function getHumanChoice() {
  for (;;) {
    let playerChoice = prompt("Choose Rock, Paper or Scissors: ").toUpperCase();
    if (playerChoice === "ROCK") {
      playerChoice = ROCK;
      return playerChoice;
    } else if (playerChoice === "PAPER") {
      playerChoice = PAPER;
      return playerChoice;
    } else if (playerChoice === "SCISSORS") {
      playerChoice = SCISSORS;
      return playerChoice;
    } else {
      alert('Please enter valid input "Rock" "Paper" or "Scissors"');
    }
  }
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * SCISSORS) + ROCK;
  return computerChoice;
}

console.log(getHumanChoice());
console.log(getComputerChoice());

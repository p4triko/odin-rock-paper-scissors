let humanScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const result = document.querySelector(".result-text");

function getComputerChoice() {
  const computerChoice = Math.floor(Math(random) * choices.length);
  return computerChoice;
}

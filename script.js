// Declare values for "Rock", "Paper" and "Scissors"
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

// Declare player and computer score variables
let humanScore = 0;
let computerScore = 0;

// Logic to get the human choice
function getHumanChoice() {
  for (;;) {
    let playerResult = prompt("Choose Rock, Paper or Scissors: ").toUpperCase();
    if (playerResult === "ROCK") {
      playerResult = ROCK;
      return playerResult;
    } else if (playerResult === "PAPER") {
      playerResult = PAPER;
      return playerResult;
    } else if (playerResult === "SCISSORS") {
      playerResult = SCISSORS;
      return playerResult;
    } else {
      alert('Please enter valid input "Rock" "Paper" or "Scissors"');
    }
  }
}

// Logic to get the compute choice
function getComputerChoice() {
  let computerResult = Math.floor(Math.random() * SCISSORS) + ROCK;
  return computerResult;
}

// Rock beat Scissors, Rock L Paper, Rock TIE Rock
// Paper beat Rock, Paper L Scissors, Paper TIE Paper
// Scissors beat Paper, Scissors L Rock, Scissors TIE Scissors

function playRound(humanChoice, computerChoice) {
  // Rock game conditions
  if (humanChoice === ROCK && computerChoice === SCISSORS) {
    humanScore++;
    console.log(`You win`);
  } else if (humanChoice === ROCK && computerChoice === PAPER) {
    computerScore++;
    console.log(`You lose`);
  } else if (humanChoice === ROCK && computerChoice === ROCK) {
    console.log(`You tie`);
  }
  // Scissor game conditions
  else if (humanChoice === PAPER && computerChoice === ROCK) {
    humanScore++;
    console.log(`You win`);
  } else if (humanChoice === PAPER && computerChoice === SCISSORS) {
    computerScore++;
    console.log(`You lose`);
  } else if (humanChoice === PAPER && computerChoice === PAPER) {
    console.log(`You tie`);
  }
  // Scissor game conditions
  else if (humanChoice === SCISSORS && computerChoice === PAPER) {
    humanScore++;
    console.log(`You win`);
  } else if (humanChoice === SCISSORS && computerChoice === ROCK) {
    computerScore++;
    console.log(`You lose`);
  } else if (humanChoice === SCISSORS && computerChoice === SCISSORS) {
    console.log(`You tie`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

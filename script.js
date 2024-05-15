// Declare values for "Rock", "Paper" and "Scissors"
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const ROCK_STRING = "Rock";
const PAPER_STRING = "Paper";
const SCISSORS_STRING = "Scissors";

const ROUNDS = 5;

// Declare player and computer score variables
let humanScore = 0;
let computerScore = 0;

console.log("playGame() to start!");

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

// Logic for rounds
function playRound(humanChoice, computerChoice) {
  // Rock game conditions
  if (humanChoice === ROCK && computerChoice === SCISSORS) {
    console.log(`You chose ${ROCK_STRING} | Computer chose ${SCISSORS_STRING}`);
    console.log(`${ROCK_STRING} beats ${SCISSORS_STRING}`);
    humanScore++;
    console.log(`You won the round`);
  } else if (humanChoice === ROCK && computerChoice === PAPER) {
    console.log(`You chose ${ROCK_STRING} | Computer chose ${PAPER_STRING}`);
    console.log(`${ROCK_STRING} loses to ${SCISSORS_STRING}`);
    computerScore++;
    console.log(`You lost the round`);
  } else if (humanChoice === ROCK && computerChoice === ROCK) {
    console.log(`You chose ${ROCK_STRING} | Computer chose ${ROCK}`);
    console.log(`${ROCK_STRING} ties with ${ROCK}`);
    console.log(`You tied this round`);
  }
  // Scissor game conditions
  else if (humanChoice === PAPER && computerChoice === ROCK) {
    console.log(`You chose ${PAPER_STRING} | Computer chose ${ROCK_STRING}`);
    console.log(`${PAPER_STRING} beats ${ROCK_STRING}`);
    humanScore++;
    console.log(`You won the round`);
  } else if (humanChoice === PAPER && computerChoice === SCISSORS) {
    console.log(`You chose ${PAPER_STRING} | Computer chose ${SCISSORS_STRING}`);
    console.log(`${PAPER_STRING} loses to ${PAPER_STRING}`);
    computerScore++;
    console.log(`You lost the round`);
  } else if (humanChoice === PAPER && computerChoice === PAPER) {
    console.log(`You chose ${PAPER_STRING} | Computer chose ${PAPER_STRING}`);
    console.log(`${PAPER_STRING} ties with ${PAPER_STRING}`);
    console.log(`You tied this round`);
  }
  // Scissor game conditions
  else if (humanChoice === SCISSORS && computerChoice === PAPER) {
    console.log(`You chose ${SCISSORS_STRING} | Computer chose ${PAPER_STRING}`);
    console.log(`${SCISSORS_STRING} beats ${PAPER_STRING}`);
    humanScore++;
    console.log(`You won the round`);
  } else if (humanChoice === SCISSORS && computerChoice === ROCK) {
    console.log(`You chose ${SCISSORS_STRING} | Computer chose ${ROCK_STRING}`);
    console.log(`${SCISSORS_STRING} loses to ${ROCK_STRING}`);
    computerScore++;
    console.log(`You lost the round`);
  } else if (humanChoice === SCISSORS && computerChoice === SCISSORS) {
    console.log(`You chose ${SCISSORS_STRING} | Computer chose ${SCISSORS_STRING}`);
    console.log(`${SCISSORS_STRING} ties with ${SCISSORS_STRING}`);
    console.log(`You tied this round`);
  }
}

// Logic for the game itself
function playGame() {
  for (let i = 1; i < ROUNDS + 1; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Round ${i} of ${ROUNDS}`);
    playRound(humanSelection, computerSelection);
  }
  console.log(`HUMAN: ${humanScore} | COMPUTER: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You won");
  } else if (humanScore < computerScore) {
    console.log("You lost");
  } else {
    console.log("You tied");
  }
  console.log("playGame() to try again!");
}

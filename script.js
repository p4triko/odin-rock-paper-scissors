const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

function getComputerChoice(min, max) {
  let result = Math.floor(Math.random() * max) + min;
  return result;
}

console.log(getComputerChoice(ROCK, SCISSORS));

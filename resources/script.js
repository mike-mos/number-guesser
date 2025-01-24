let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
const compareGuesses = (humanGuess, compGuess, targetGuess) => {
  if (humanGuess < 0 || humanGuess > 9) {
    return window.alert ('Wrong Number');
  }
  const humanDiff = Math.abs(targetGuess - humanGuess);
  const compDiff = Math.abs(targetGuess - compGuess);
  return humanDiff <= compDiff ? true : false;
}
const updateScore = winner => {
  if (winner === 'human') {
  humanScore++;
  } else if (winner === 'computer') {
  computerScore++;
  }
}
const advanceRound = () => currentRoundNumber++;
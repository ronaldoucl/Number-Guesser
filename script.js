let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
  return Math.floor(Math.random() * 10 + 1);
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  let humanDifference = Math.abs(humanGuess - secretTarget);
  let computerDifference = Math.abs(computerGuess - secretTarget);

  if (humanDifference <= computerDifference) return true
  else return false
}

const updateScore = winner => {
  if (winner === 'human') humanScore++;
  else computerScore++;
}

const advanceRound = () => {
  currentRoundNumber++;
}
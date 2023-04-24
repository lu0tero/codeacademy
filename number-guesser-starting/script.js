let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (user, computer, secretNumber) => {
  let userDifference = Math.abs(user - secretNumber);
  let computerDifference = Math.abs(computer - secretNumber);

  if (userDifference < computerDifference) {
    return true;
  } else if (userDifference > computerDifference) {
    return false;
  } else {
    return 'user win'
  }
} 

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

const advanceRound = () => currentRoundNumber += 1;


import gameLogic from '../index.js';

const generateRound = () => {
  const question = Math.floor(Math.random() * 100);
  const result = [];
  for (let i = 1; i <= question; i += 1) {
    if (question % i === 0) {
      result.push(i);
    }
  }

  let correctAnswer;
  if (result.length === 2) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

const primeGame = () => {
  gameLogic('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
};

export default primeGame;
import runLogic from '../index.js';
import { makeRandomNum100 } from '../utils.js';

const generateRound = () => {
  const question = makeRandomNum100();
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

const startGame = () => {
  runLogic('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
};

export default startGame;

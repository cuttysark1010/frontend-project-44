import runLogic from '../index.js';
import { makeRandomNum100 } from '../utils.js';

const isEqualsTwo = (number) => {
  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result.length === 2;
};

const generateRound = () => {
  const question = makeRandomNum100();
  let correctAnswer;
  if (isEqualsTwo(question) === true) {
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

import runLogic from '../index.js';
import { makeRandomNum100 } from '../utils.js';

const isMultiple = (num1, num2) => {
  const result = [];
  let i = 1;
  while (i <= num1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      result.push(i);
      i += 1;
    } else {
      i += 1;
    }
  }
  return result;
};

const generateRound = () => {
  const randomNumber1 = makeRandomNum100();
  const randomNumber2 = makeRandomNum100();
  const question = `${randomNumber1} ${randomNumber2}`;
  const intermediateResult = isMultiple(randomNumber1, randomNumber2);
  const answer = intermediateResult[intermediateResult.length - 1];
  const correctAnswer = String(answer);
  return [question, correctAnswer];
};

const startGame = () => {
  runLogic('Find the greatest common divisor of given numbers.', generateRound);
};

export default startGame;

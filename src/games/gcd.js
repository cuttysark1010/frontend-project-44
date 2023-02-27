import runLogic from '../index.js';
import { makeRandomNum100 } from '../utils.js';

const generateRound = () => {
  const randomNumber1 = makeRandomNum100();
  const randomNumber2 = makeRandomNum100();
  const question = `${randomNumber1} ${randomNumber2}`;
  const intermediateResult = [];
  let i = 1;
  while (i <= randomNumber1) {
    if ((randomNumber1 % i === 0) && (randomNumber2 % i === 0)) {
      intermediateResult.push(i);
      i += 1;
    } else {
      i += 1;
    }
  }
  const answer = intermediateResult[intermediateResult.length - 1];
  const correctAnswer = String(answer);
  return [question, correctAnswer];
};

const startGame = () => {
  runLogic('Find the greatest common divisor of given numbers.', generateRound);
};

export default startGame;

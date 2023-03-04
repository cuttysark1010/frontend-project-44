import runLogic from '../index.js';
import getRandomNumber from '../utils.js';

const getGcd = (num1, num2) => {
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
  return String(result[result.length - 1]);
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGcd(randomNumber1, randomNumber2);
  return [question, correctAnswer];
};

const startGame = () => {
  runLogic('Find the greatest common divisor of given numbers.', generateRound);
};

export default startGame;

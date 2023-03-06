import runLogic from '../index.js';
import getRandomNumber from '../utils.js';

const getGcd = (number1, number2) => {
  const result = [];
  let i = 1;
  while (i <= number1) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      result.push(i);
      i += 1;
    } else {
      i += 1;
    }
  }
  return result[result.length - 1];
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = getGcd(randomNumber1, randomNumber2);
  const correctAnswer = String(answer);
  return [question, correctAnswer];
};

const startGame = () => {
  runLogic('Find the greatest common divisor of given numbers.', generateRound);
};

export default startGame;

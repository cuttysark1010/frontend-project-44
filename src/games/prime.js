import runLogic from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result.length === 2;
};

const generateRound = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isPrime(question) === true ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  runLogic('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
};

export default startGame;

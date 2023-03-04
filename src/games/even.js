import runLogic from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) === true ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startGame = () => {
  runLogic('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
};

export default startGame;

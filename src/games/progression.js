import runLogic from '../index.js';
import getRandomNumber from '../utils.js';

const makeProgression = (firstNumber, step, length) => {
  const array = [firstNumber];
  let nextNumber;
  for (let i = 1; i <= length; i += 1) {
    nextNumber = firstNumber + step * i;
    array.push(nextNumber);
  }
  return array;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 10);
  const length = 10;
  const progression = makeProgression(firstNumber, step, length);
  const randomIndex = getRandomNumber(0, length - 1);
  const answer = progression[randomIndex];
  const correctAnswer = String(answer);

  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => {
  runLogic('What number is missing in the progression?', generateRound);
};

export default startGame;

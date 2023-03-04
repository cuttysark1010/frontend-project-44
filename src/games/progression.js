import runLogic from '../index.js';
import getRandomNumber from '../utils.js';

const makeProgression = (number1, step, numberOfValues) => {
  const array = [number1];
  let nextNumber;
  for (let i = 1; i < numberOfValues; i += 1) {
    nextNumber = number1 + step * i;
    array.push(nextNumber);
  }
  return array;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 10);
  const length = 10;
  const progression = makeProgression(firstNumber, step, length);
  const randomIndex = getRandomNumber(0, 10);
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

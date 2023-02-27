import runLogic from '../index.js';
import { makeRandomNum10 } from '../utils.js';

const generateRound = () => {
  const firstNum = makeRandomNum10();
  const step = makeRandomNum10();
  const array = [firstNum];
  let nextNumber;
  const numberOfValues = 10;
  for (let i = 1; i < numberOfValues; i += 1) {
    nextNumber = firstNum + step * i;
    array.push(nextNumber);
  }

  const randomIndex = makeRandomNum10();
  let index;
  if (randomIndex === 0) {
    index = randomIndex;
  } else {
    index = randomIndex - 1;
  }
  const answer = array[index];
  const correctAnswer = String(answer);

  array[index] = '..';
  const finalArray = array.join(' ');
  const question = finalArray;
  return [question, correctAnswer];
};

const startGame = () => {
  runLogic('What number is missing in the progression?', generateRound);
};

export default startGame;

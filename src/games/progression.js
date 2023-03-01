import runLogic from '../index.js';
import { makeRandomNum10 } from '../utils.js';

const makeProgression = (arr, num1, step, numberOfValues) => {
  let nextNumber;
  for (let i = 1; i < numberOfValues; i += 1) {
    nextNumber = num1 + step * i;
    arr.push(nextNumber);
  }
  return arr;
};

const generateRound = () => {
  const firstNum = makeRandomNum10();
  const step = makeRandomNum10();
  const array = [firstNum];
  const numberOfValues = 10;
  const intermediateArray = makeProgression(array, firstNum, step, numberOfValues);
  const randomIndex = makeRandomNum10();
  let index;
  if (randomIndex === 0) {
    index = randomIndex;
  } else {
    index = randomIndex - 1;
  }
  const answer = intermediateArray[index];
  const correctAnswer = String(answer);

  intermediateArray[index] = '..';
  const finalArray = intermediateArray.join(' ');
  const question = finalArray;
  return [question, correctAnswer];
};

const startGame = () => {
  runLogic('What number is missing in the progression?', generateRound);
};

export default startGame;

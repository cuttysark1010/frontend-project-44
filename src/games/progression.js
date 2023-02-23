import gameLogic from '../index.js';

const generateRound = () => {
  const firstNum = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const array = [firstNum];
  let nextNumber;
  for (let i = 1; i < 10; i += 1) {
    nextNumber = firstNum + step * i;
    array.push(nextNumber);
  }

  const randomIndex = Math.floor(Math.random() * 10);
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

const progressionGame = () => {
  gameLogic('What number is missing in the progression?', generateRound);
};

export default progressionGame;

import runLogic from '../index.js';
import { makeRandomNum100 } from '../utils.js';

const generateRound = () => {
  const question = makeRandomNum100();
  let correctAnswer;
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
const startGame = () => {
  runLogic('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
};

export default startGame;

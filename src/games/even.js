import gameLogic from '../index.js';

const generateRound = () => {
  const question = Math.floor(Math.random() * 100);
  let correctAnswer;
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
const evenGame = () => {
  gameLogic('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
};

export default evenGame;

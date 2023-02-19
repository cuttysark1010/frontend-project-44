import gameLogic from '../index.js';

const generateRound = () => {
  const randomNumber1 = Math.floor(Math.random() * 10);
  const randomNumber2 = Math.floor(Math.random() * 10);
  const operations = ['+', '-', '*'];
  const random = Math.floor(Math.random() * operations.length);
  const randomOperation = operations[random];
  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  let answer;
  switch (randomOperation) {
    case '+': answer = randomNumber1 + randomNumber2;
      break;
    case '-': answer = randomNumber1 - randomNumber2;
      break;
    default: answer = randomNumber1 * randomNumber2;
  }
  const correctAnswer = String(answer);
  return [question, correctAnswer];
};

const calcGame = () => {
  gameLogic('What is the result of the expression?', generateRound);
};
export default calcGame;

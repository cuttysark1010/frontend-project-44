import runLogic from '../index.js';
import getRandomNumber from '../utils.js';

const calculate = (operation, number1, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(0, 10);
  const randomNumber2 = getRandomNumber(0, 10);
  const operations = ['+', '-', '*'];
  const random = getRandomNumber(0, operations.length - 1);
  const randomOperation = operations[random];
  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  const answer = calculate(randomOperation, randomNumber1, randomNumber2);
  const correctAnswer = String(answer);
  return [question, correctAnswer];
};

const startGame = () => {
  runLogic('What is the result of the expression?', generateRound);
};
export default startGame;

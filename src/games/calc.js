import readlineSync from 'readline-sync';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const operations = ['+', '-', '*'];
    const random = Math.floor(Math.random() * operations.length);
    const randomOperation = operations[random];
    console.log(`Question: ${randomNumber1} ${randomOperation} ${randomNumber2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    let correctAnswer;
    switch (randomOperation) {
      case '+': correctAnswer = randomNumber1 + randomNumber2;
        break;
      case '-': correctAnswer = randomNumber1 - randomNumber2;
        break;
      default: correctAnswer = randomNumber1 * randomNumber2;
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calc;

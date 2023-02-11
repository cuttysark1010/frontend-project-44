import readlineSync from 'readline-sync';

const sayName = () => {
  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
};

export default sayName;

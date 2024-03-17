import { getName, getAnswer } from './cli.js';

export const operators = ['+', '-', '*'];

export const getRandomNumber = () => Math.round(Math.random() * 10);

export const getRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  return name;
};

export const round = (question, rightAnswer) => {
  console.log(`Question: ${question}`);

  const answer = getAnswer();

  if (answer === String(rightAnswer)) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

export const finalMessage = (isVictory, name) => {
  if (isVictory) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export const start = (condition, getQuestion) => {
  const name = greeting();

  console.log(condition);

  let isVictory = true;

  for (let i = 0; i < 3; i += 1) {
    const gameData = getQuestion();
    const [question, rightAnswer] = gameData;

    isVictory = round(question, rightAnswer);

    if (!isVictory) {
      break;
    }
  }
  finalMessage(isVictory, name);
};

import readlineSync from 'readline-sync';

const amountIterations = 3;

export const getRandomNumber = (num = 10) => Math.round(Math.random() * num);

export const round = (question, rightAnswer) => {
  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');

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
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log(condition);

  let isVictory = true;

  for (let i = 0; i < amountIterations; i += 1) {
    const gameData = getQuestion();
    const [question, rightAnswer] = gameData;

    isVictory = round(question, rightAnswer);

    if (!isVictory) {
      break;
    }
  }
  finalMessage(isVictory, name);
};

import { getAnswer } from './cli.js';
import { isEven, getRandomNumber } from './helper.js';

export const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export const isCorrectAnswer = (num, answer) => (answer === getCorrectAnswer(num));

export const brainEvenGame = (name) => {
  const countForVictory = 3;
  for (let i = 0; i < countForVictory; i += 1) {
    const number = getRandomNumber();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${number}`);

    const answer = getAnswer();

    if (isCorrectAnswer(number, answer)) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(number)}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

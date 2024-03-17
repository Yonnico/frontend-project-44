import { getRandomNumber, start } from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => {
  const question = getRandomNumber();
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => start(condition, getQuestion);

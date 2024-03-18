import { getRandomNumber, start } from '../index.js';

const condition = 'What number is missing in the progression?';

const getProgression = (number, step, answerIndex) => {
  const collection = [];

  collection.push(number);

  let hiddenElement = 0;

  for (let i = 1; i <= 10; i += 1) {
    collection.push(collection[i - 1] + step);

    if (i === answerIndex) {
      hiddenElement = collection.pop();
      collection.push('..');
      collection.push(hiddenElement + step);
      i += 1;
    }
  }

  const question = collection.join(' ');

  return [question, hiddenElement];
};

const getQuestion = () => {
  const number = getRandomNumber();
  const step = getRandomNumber();
  const answerIndex = getRandomNumber(8);

  const [question, rightAnswer] = getProgression(number, step, answerIndex);

  return [question, rightAnswer];
};

export default () => start(condition, getQuestion);

#!/usr/bin/env node

import { getName } from '../src/cli.js';
import { greeting } from '../src/helper.js';
import { brainEvenGame } from '../src/even-game.js';

const name = getName();

console.log('Welcome to the Brain Games!');
console.log(greeting(name));
console.log(brainEvenGame(name));

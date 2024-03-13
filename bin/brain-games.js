#!/usr/bin/env node

import { greeting } from '../src/helper.js';
import { getName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log(greeting(getName()));

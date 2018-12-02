/* eslint no-console: 0 */

import CommandLineArgs from 'command-line-args';
import { readFileSync } from 'fs';
import { join } from 'path';

import Day01 from './day_01/index';
import Day02 from './day_02/index';

const optionDefinitions = [
  { name: 'command', defaultOption: true },
];

const options = CommandLineArgs(optionDefinitions, { stopAtFirstUnknown: true });

switch (options.command) {
  case 'day01': {
    const data = readFileSync(join(__dirname, 'day_01', 'data.txt'), 'utf8').replace(/\n/g, ', ');
    const result = Day01.run(data);
    console.log(`Result: ${result}`);
    const b = Day01.run2(data);
    console.log(`Result 2: ${b}`);
    break;
  }
  case 'day02': {
    const data = readFileSync(join(__dirname, 'day_02', 'data.txt'), 'utf8').replace(/\n/g, ', ');
    const result = Day02.checksum(data);
    console.log(`Result: ${result}`);

    const result2 = Day02.findId(data);
    console.log(`Result 2: ${result2}`);
    break;
  }
  default:
    console.log(`Unknown command: ${options.command}`);
}

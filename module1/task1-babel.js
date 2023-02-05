/* 
    HOMEWORK 1 => TASK 3
    * Write a program which reads a string from the standard input stdin,
      reverses it and then writes it to the standard output stdout. Running with babel
*/

import { stdout, stdin } from 'process';

function revertString(stringToReverse) {
  return stringToReverse.split('').reverse().join('');
}

stdout.write('Enter a string to reverse: ');

stdin.on('data', (inputString) => {
  stdout.write('Reverse String--> ');
  stdout.write(revertString(inputString.toString()));
  stdout.write('\n');
  stdout.write('Enter a string to reverse: ');
});


var fs = require('fs');
var THE_RANDOM_STRING = fs.readFileSync('./input.txt', { encoding: 'utf-8', flag: 'r' }); // 100000014
var RANGE = 14;

/*
Find the first range of 14 character that have no repeating characters and report the index after the range
> index starting with 0

Example:
  - for a range of 5 instead of 14

  The string: asasas112345Xasasasa

  The unique string: 12345

  Report the index of X: 12

You can test by running: node main.js
*/

console.log('first');

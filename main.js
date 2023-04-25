var fs = require('fs');
var THE_RANDOM_STRING = fs.readFileSync('./input.txt', { encoding: 'utf-8', flag: 'r' }); // 10000001va4
// var THE_RANDOM_STRING = 'asasas112345Xasasasa';
var RANGE = 14;
var evalA = 'a'.charCodeAt(0);
var checker = 0;
var counter = 0;
var i = 0;

while(counter != RANGE) {
  var bitAtIndex = THE_RANDOM_STRING[i++].charCodeAt(0) - evalA;   
  
  // if that bit is already set
  // in checker, return false
  
  if ((checker & shiftRight(bitAtIndex)) > 0) {
      counter = checker = 0;
  }
  counter++;
  checker = checker | shiftRight(bitAtIndex);
}

function shiftRight(bitAtIndex) {
  return 1 << bitAtIndex;
}

console.log(i);
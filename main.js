function uniqueCharacters(str, evalA, len)
    {
        // Assuming string can have
        // characters a-z this has
        // 32 bits set to 0
          
        let checker = 0;
        let i = 0;

        while( i < str.length) {
            let bitAtIndex = str[i].charCodeAt(0) - evalA;
            i++;
  
            // if that bit is already set
            // in checker, return false
            if ((checker & (1 << bitAtIndex)) > 0) {
                return i;
            }
  
            // otherwise update and continue by
            // setting that bit in the checker
            checker = checker | (1 << bitAtIndex);
        }
  
        // no duplicates encountered,
        // return true
        
        return -1;
    }


var fs = require('fs');
var THE_RANDOM_STRING = fs.readFileSync('./input.txt', { encoding: 'utf-8', flag: 'r' }); // 10000001va4
// var THE_RANDOM_STRING = 'asas112345Xasasasa';
var RANGE = 14;
const evalA = 'a'.charCodeAt(0);

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


var i = 0, len = THE_RANDOM_STRING.length;
    while (i < len) {
        var sub = THE_RANDOM_STRING.substring(i, i+RANGE);
        var res = uniqueCharacters(sub, evalA)
        if(res < 0) {
          console.log(i+RANGE);
          break;
        }
        i+=res;
    }

// var endTime = performance.now()

// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)



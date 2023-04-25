var fs = require("fs");
var THE_RANDOM_STRING = fs.readFileSync("./input.txt", { encoding: "utf-8", flag: "r" }); // 100000014
var RANGE = 14;
let index = null;
const maxRange = THE_RANDOM_STRING.length - RANGE - 1;

let charSet = new Set();
let left = 0;
let right = 0;

while (right < maxRange) {
  if (!charSet.has(THE_RANDOM_STRING[right]) && right - left + 1 <= RANGE) {
    charSet.add(THE_RANDOM_STRING[right]);
    right++;
  } else {
    charSet.delete(THE_RANDOM_STRING[left]);
    left++;
  }

  if (charSet.size === RANGE) {
    index = right;
    break;
  }
}

// for (let i = 0; i < maxRange; i++) {
//   let charRange = [];
//   for (let j = i; j < i + RANGE; j++) {
//     charRange.push(THE_RANDOM_STRING[j]);
//   }

//   let newSet = new Set(charRange);
//   if (charRange.length === newSet.size) {
//     index = i + RANGE;
//     break;
//   }
// }

console.log(index);

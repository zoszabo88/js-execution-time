var fs = require("fs");
var THE_RANDOM_STRING = fs.readFileSync("./input.txt", { encoding: "utf-8", flag: "r" }); // 100000014
var RANGE = 14;

const maxRange = THE_RANDOM_STRING.length - RANGE - 1;
let index = -1;
let left = 0;
let right = 0;
let charSet = new Set();

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

console.log(index);

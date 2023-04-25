const { log } = require("console");
var fs = require("fs");
var THE_RANDOM_STRING = fs.readFileSync("./input.txt", {
	encoding: "utf-8",
	flag: "r",
}); // 100000014
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
let result_index = 0;
let subarray = THE_RANDOM_STRING[0];
for (let i = 1; i < THE_RANDOM_STRING.length; i++) {
	result_index = i;

	if (subarray.indexOf(THE_RANDOM_STRING[i]) > -1) {
		i = i - subarray.length;
		subarray = "";
	} else {
		subarray += THE_RANDOM_STRING[i];
		if (subarray.length == 14) {
			console.log("INDEX resulted: " + (result_index + 1) + "\n");
			break;
		}
	}
}

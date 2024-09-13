require("./print.js");
const { calculateSum, hello, multiply } = require("./calculate");

const util = require("node:util");

console.log(calculateSum(5, 10));
console.log(multiply(5, 10));
console.log(hello);

console.log(global === globalThis);

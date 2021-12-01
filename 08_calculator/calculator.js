const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

//
const sum = function (arr) {
  return arr.reduce((sumArr, val) => sumArr + val, 0);
};

// console.log(sum([5, 2, 3, 4, 5]));

// what does the second parameter of reduce function do?
//
const multiply = function (arr) {
  return arr.reduce((multiArr, val) => multiArr * val);
};

// console.log(multiply([1, 2, 3, 4]));

const power = function (number, base) {
  return number ** base;
};

const factorial = function (n) {
  let result = 1;
  let input = n;
  while (input > 1) {
    result *= input;
    input -= 1;
  }
  return result;
};

// console.log(factorial(4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

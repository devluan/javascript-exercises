const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((total, value) => total + value, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, value) => total * value, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	return new Array(n).fill().reduce((acc, cur, idx) => acc * (idx + 1), 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const assert = require('assert');

const multiplyHelper = (small, big, memo) => {
  if (small === 0) return 0;
  if (small === 1) return big;

  const s = small >> 1;
  let side2;

  if (!memo[small]) {
    memo[small] = multiplyHelper(s, big, memo);
  }
  const side1 = memo[small];
  side2 = side1;

  if (small % 2 === 1) {
    if (!memo[small - s]) {
      memo[small - s] = multiplyHelper(small - s, big, memo);
    }
    side2 = memo[small - s];
  }

  return side1 + side2;
};


const multiply = (a, b) => {
  if (!a === undefined || !b === undefined) throw new Error('Not enough numbers provided');

  const memo = {};
  const bigger = Math.max(a, b);
  const smaller = Math.min(a, b);

  return multiplyHelper(smaller, bigger, memo);
};

assert.equal(multiply(10, 0), 0);
assert.equal(multiply(1234, 9876), 19514976);
assert.equal(multiply(99, 1), 99);

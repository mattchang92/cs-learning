// 8.1 CtCi Triple Step
const howManyPaths = (steps, memo = []) => {
  if (steps === 0) return 0;
  if (steps === 1) return 1;
  if (steps === 2) return 2;
  if (steps === 3) return 4;

  if (!memo[steps - 3]) memo[steps - 3] = howManyPaths(steps - 3, memo);
  if (!memo[steps - 2]) memo[steps - 2] = howManyPaths(steps - 2, memo);
  if (!memo[steps - 1]) memo[steps - 1] = howManyPaths(steps - 1, memo);

  return memo[steps - 3] + memo[steps - 2] + memo[steps - 1];
};

const bookAnswer = (steps, memo = []) => {
  if (steps < 0) {
    return 0;
  } else if (steps === 0) {
    return 1;
  } else if (memo[steps]) {
    return memo[steps];
  }
  memo[steps] = bookAnswer(steps - 1, memo)
              + bookAnswer(steps - 2, memo)
              + bookAnswer(steps - 3, memo);
  return memo[steps];
};

// const test = bookAnswer(100);

// 8.5 CtCI Recursive Multiply
const multiply = (a, b, memo = {}) => {
  if (a === 1) return b;
  // const half = Math.floor(a/b);
  // const key = [a, b].sort().join('');
  const key = `${a}${b}`;
  if (a % b === 0) {
    console.log(key);
    if (!memo[key]) memo[key] = multiply(a / 2, b, memo) << 1;
  } else {
    console.log(key);
    const half = Math.floor(a / 2);
    if (half === 1) {
      memo[key] = (multiply(1, b, memo) << 1) + multiply(1, b, memo);
    } else if (!memo[key]) {
      memo[key] = (multiply(half, b, memo) << 1) + multiply(a % half, b, memo);
    }
  }
  console.log(memo[key]);
  return memo[key];
};

const test = multiply(8, 9);
console.log(test);

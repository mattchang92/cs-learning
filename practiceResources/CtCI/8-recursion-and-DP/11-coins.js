const coinCombos = (val) => {
  const memo = {};

  const sum = (n) => {
    if (n < 0) return 0;
    if (n === 0) return 1;

    if (memo[n]) return memo[n];

    memo[n] = sum(n - 25) + sum(n - 10) + sum(n - 5) + sum(n - 1);
    return memo[n];
  };

  return sum(val);
};


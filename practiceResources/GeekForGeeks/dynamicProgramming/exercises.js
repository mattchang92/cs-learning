// Given a set of non-negative integers, and a value sum, determine
// if there is a subset of the given set with sum equal to given sum.

const table = {};
const isSubsetSum = (arr, n, sum) => {
  if (!table[sum]) table[sum] = {};
  if (sum === 0) return true;
  if (n === 0) return false;

  if (table[sum][n]) return table[sum][n];

  if (arr[n - 1] > sum) {
    table[sum][n] = isSubsetSum(arr, n - 1, sum);
    return table[sum][n];
  }

  table[sum][n] = isSubsetSum(arr, n - 1, sum) || isSubsetSum(arr, n - 1, sum - arr[n]);

  return table[sum][n];
};


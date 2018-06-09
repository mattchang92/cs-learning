// Maximum subarrays Theta(n lg n)
/* Solution must lie to the left, the right or across the middle. Recursively
search through the left and the right to find the greatest length */
const findMaxCrossingSubarray = (arr, low, mid, high) => {
  let rightSum = -Infinity;
  let leftSum = -Infinity;
  let tempSum = 0;
  let maxLeft;
  let maxRight;

  for (let i = mid; i >= low; --i) {
    tempSum += arr[i];
    if (tempSum > leftSum) {
      leftSum = tempSum;
      maxLeft = i;
    }
  }

  tempSum = 0;
  for (let i = mid + 1; i < high; i++) {
    tempSum += arr[i];
    if (tempSum > rightSum) {
      rightSum = tempSum;
      maxRight = i;
    }
  }

  return [maxLeft, maxRight, (leftSum + rightSum)];
};


const findMaxSubarray = (arr, low, high) => {
  if (high === low) {
    return [low, high, arr[low]];
  }
  const mid = Math.floor((low + high) / 2);
  const leftSubArr = findMaxSubarray(arr, low, mid);
  const rightSubArr = findMaxSubarray(arr, (mid + 1), high);
  const crossSubArr = findMaxCrossingSubarray(arr, low, mid, high);

  if (leftSubArr[2] >= rightSubArr[2] && leftSubArr[2] >= crossSubArr[2]) {
    return leftSubArr;
  } else if (rightSubArr[2] >= leftSubArr[2] && rightSubArr[2] >= crossSubArr[2]) {
    return rightSubArr;
  }
  return crossSubArr;
};


// Find 2 elements in array that add up to a given sum
function findElements(arr, sum) {
  const hash = {};
  for (const i in arr) {
    hash[arr[i]] = i;
    if (hash[sum - arr[i]] !== undefined) {
      return [i, hash[sum - arr[i]]];
    }
  }
  return 'no elements add to given sum';
}

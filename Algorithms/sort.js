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

// Insertion sort O(n^2)
// Works best for small lists, works like sorting a hand of cards as you pick up one at a time. Start from second postion in array and keep comparing/swapping previous numbers until in sorted position (in reality more like moving arr[0..i] right one spot until sorted). Left side of i is always sorted and right side of i is always in default position.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let index = i - 1;
    while (index >= 0 && arr[index] > key) {
      arr[index + 1] = arr[index];
      index--;
      arr[index + 1] = key;
    }
  }
  return arr;
}

// Merge sort O(n log n) or O(1) if n <= c
// Divide and conquer, recursively. Keeps splitting array in half until array of length 1 is achieved (already sorted). Then work your way backwards through the stacking merging the split arrays since the by this time the subarrays have already been sorted.
const mergeSort = (arr) => {
  const midIndex = Math.floor(arr.length / 2);
  if (arr.length === 1) return arr;
  const arr1 = mergeSort(arr.slice(0, midIndex));
  const arr2 = mergeSort(arr.slice(midIndex, arr.length));
  return merge(arr1, arr2);
};


const merge = (arr1, arr2) => {
  const mergedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      mergedArr.push(arr1.shift());
    } else {
      mergedArr.push(arr2.shift());
    }
  }
  return arr1.length ? mergedArr.concat(arr1) : mergedArr.concat(arr2);
};

// Maximum subarrays Theta(n lg n)
// Solution must lie to the left, the right or across the middle. Recursively search through the left and the right to find the greatest length
const findMaxCrossingSubarray = (arr, low, mid, high) => {
  let rightSum = -Infinity;
  let leftSum = -Infinity;
  let tempSum = 0;
  let maxLeft,
    maxRight;

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


// Quicksort
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, leftIndex, rightIndex) => {
  const pivotValue = arr[leftIndex];
  let partitionIndex = leftIndex + 1;

  for (let i = leftIndex + 1; i <= rightIndex; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, leftIndex, partitionIndex - 1);
  return partitionIndex;
};

const quickSort = (arr, leftIndex, rightIndex) => {
  let pivot,
    partitionIndex;
  pivot = Math.floor(Math.random() * (rightIndex - leftIndex) + leftIndex);

  if (leftIndex < rightIndex) {
    swap(arr, pivot, leftIndex);
    partitionIndex = partition(arr, leftIndex, rightIndex);

    quickSort(arr, leftIndex, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, rightIndex);
  }
  return arr;
};

const linearTimeSelection = (arr, desiredIndex, leftIndex, rightIndex) => {
  if (rightIndex - leftIndex < 2) return arr[0];
  const pivot = Math.floor(Math.random() * (rightIndex - leftIndex) + leftIndex);
  swap(arr, pivot, leftIndex);
  const partitionIndex = partition(arr, leftIndex, rightIndex);

  if (partitionIndex === desiredIndex) {
    return arr[partitionIndex];
  } else if (partitionIndex > desiredIndex) {
    return linearTimeSelection(arr, desiredIndex, leftIndex, partitionIndex - 1);
  } else if (partitionIndex < desiredIndex) {
    return linearTimeSelection(arr, desiredIndex, partitionIndex + 1, rightIndex);
  }
};

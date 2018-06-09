// Merge sort O(n log n) or O(1) if n <= c
/* Divide and conquer, recursively. Keeps splitting array in half until array of length 1 is
achieved (already sorted). Then work your way backwards through the stacking merging the split
arrays since the by this time the subarrays have already been sorted. */
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

const mergeSort = (arr) => {
  const midIndex = Math.floor(arr.length / 2);
  if (arr.length === 1) return arr;
  const arr1 = mergeSort(arr.slice(0, midIndex));
  const arr2 = mergeSort(arr.slice(midIndex, arr.length));
  return merge(arr1, arr2);
};

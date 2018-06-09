// Merge sort O(n log n) or O(1) if n <= c
/* Does not sort in place and so incurs extra memory use. However, the divide and conquer
nature makes it useful with large datasets that don't fit into memory */
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

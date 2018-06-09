/* Requires more memory in the form os stack space due to its recursive nature
Generally faster because its constant factors are smaller than other sorting
algorithms (partitioning is fast) */

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
  let partitionIndex;
  const pivot = Math.floor(Math.random() * (rightIndex - leftIndex) + leftIndex);

  if (leftIndex < rightIndex) {
    swap(arr, pivot, leftIndex);
    partitionIndex = partition(arr, leftIndex, rightIndex);

    quickSort(arr, leftIndex, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, rightIndex);
  }
  return arr;
};

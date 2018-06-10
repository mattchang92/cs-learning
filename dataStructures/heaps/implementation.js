// All heaps index start at 1. The 0 index is reserved for storing the heap size.

// O (log N)
const maxHeapify = (arr, i) => {
  const l = i * 2;
  const r = (i * 2) + 1;
  const heapSize = arr[0];
  let largest = i;

  if (l <= heapSize && arr[l] > arr[i]) largest = l;
  if (r <= heapSize && arr[r] > arr[largest]) largest = r;

  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(arr, largest);
  }
};

// O (N log N) First element in max-heap is reserved for heap size
const buildMaxHeap = (arr) => {
  const heapSize = arr.length;
  arr.unshift(heapSize);

  for (let i = Math.ceil(arr.length / 2); i >= 1; i--) {
    maxHeapify(arr, i);
  }
  return arr;
};


// Priority Queue
/* Similiar to a queue but instead of FIFO, the element with the the largest/smallested key
gets extracted first */
const heapExtractMax = (arr) => {
  if (arr[0] < 1) throw new Error('Heap underflow');
  const max = arr[1];
  const heapSize = arr[0];
  arr[1] = arr[heapSize];
  arr[0]--;
  maxHeapify(arr, 1);
  return max;
};

const heapIncreaseKey = (arr, i, key) => {
  if (key < arr[i]) throw new Error('New key is smaller than current key');
  arr[i] = key;
  let parent = Math.floor(i / 2);
  while (i > 1 && arr[parent] < arr[i]) {
    const temp = arr[i];
    arr[i] = arr[parent];
    arr[parent] = temp;
    i = parent;
    parent = Math.floor(i / 2);
  }
};

const maxHeapInsert = (arr, key) => {
  arr[0]++;
  const heapSize = arr[0];
  arr[heapSize] = -Infinity;
  heapIncreaseKey(arr, heapSize, key);
};


module.exports = {
  maxHeapify,
  buildMaxHeap,
  heapExtractMax,
};

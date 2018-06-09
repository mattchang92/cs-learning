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

const heapExtractMax = (arr) => {
  if (arr[0] < 1) throw new Error('Heap underflow');
  const max = arr[1];
  arr[1] = arr[arr[0]];
  arr[0]--;
  maxHeapify(arr, 1);
  return max;
};

module.exports = {
  maxHeapify,
  buildMaxHeap,
  heapExtractMax,
};

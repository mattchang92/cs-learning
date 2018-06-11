const { buildMaxHeap, maxHeapify } = require('../../dataStructures/heaps/implementation');

/* Minimal memory usage since sorting is doing iteratively and in place. It also exhibits
consistent performance in all cases. But it is also an unstable sort, it does not guarantee
the order of elements with the same value. Heap maintenance more expensive than partitioning
(ie Quick Sort) Useful when you care more about worst case performance */
const heapSort = (arr) => {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i >= 2; i--) {
    const temp = arr[1];
    arr[1] = arr[i];
    arr[i] = temp;
    arr[0]--;
    maxHeapify(arr, 1);
  }
  return arr.slice(1);
};

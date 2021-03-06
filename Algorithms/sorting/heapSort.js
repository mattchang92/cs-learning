const { PriorityQueueNode } = require('../../dataStructures/priorityQueue/implementation');
const { buildMaxHeap, maxHeapify } = require('../../dataStructures/heaps/implementation');

/* Minimal memory usage since sorting is doing iteratively and in place. It also exhibits
consistent performance in all cases. But it is also an unstable sort, it does not guarantee
the order of elements with the same value. Heap maintenance more expensive than partitioning
(ie Quick Sort) Useful when you care more about worst case performance */
const heapSortNode = (arr) => {
  const queue = new PriorityQueueNode(arr);
  for (let i = queue.heap.length - 1; i >= 2; i--) {
    const temp = queue.heap[1];
    queue.heap[1] = queue.heap[i];
    queue.heap[i] = temp;
    queue.heap[0]--;
    queue.heapify(1);
  }
  return queue.heap.slice(1);
};

const heapSortArray = (arr) => {
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


module.exports = {
  heapSortNode,
};

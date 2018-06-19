const { PriorityQueueNode } = require('../dataStructures/priorityQueue/implementation');
const { heapSortNode } = require('../algorithms/sorting/heapSort');

class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// const tree = createBalancedBinaryTree(Node);

// maxHeapifyNode(tree);
const test = [7,4,2,6,1,3,5,7]
const sorted = heapSortNode(test);
console.log(sorted);

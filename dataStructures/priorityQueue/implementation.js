const Node = require('../trees/basicNode');

// Note: node implementation much more expensive memory wise
class PriorityQueueNode {
  constructor(values) {
    this.heap = [0];
    if (values) this.buildHeap(values);
  }

  // O(log N)
  insert(value) {
    const node = new Node(value);
    this.heap[0]++;
    this.heap.push(node);
    let currentIndex = this.heap[0];
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex >= 1 && node.val > this.heap[parentIndex].val) {
      this.heap[currentIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = node;
      currentIndex = parentIndex;
      parentIndex = Math.floor(parentIndex / 2);
    }
  }

  // O(N log N)
  buildHeap(values) {
    values.forEach(value => this.insert(value));
  }

  // O(log N)
  heapify(i) {
    const left = i * 2;
    const right = (i * 2) + 1;
    const heapSize = this.heap[0];
    let largest = i;
    if (left <= heapSize && this.heap[left].val > this.heap[largest].val) largest = left;
    if (right <= heapSize && this.heap[right].val > this.heap[largest].val) largest = right;
    if (largest !== i) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[largest];
      this.heap[largest] = temp;
      this.heapify(largest);
    }
  }

  // O(log N)
  extractTop() {
    const heapSize = this.heap[0];
    if (heapSize < 1) throw new Error('Error: heap underflow');
    const node = this.heap[1];
    this.heap[1] = this.heap[heapSize];
    this.heap[0]--;
    this.heapify(1);
    return node;
  }
}

module.exports = {
  PriorityQueueNode,
};

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

// Implementation with tail pointer
class LinkedList {
  constructor(head) {
    this.head = head || null;
    this.size = head ? 1 : 0;
    this.tail = head || null;
  }

  _getNodeAt(index, offset) {
    let currentIndex = 0;
    let node = this.head;
    while ((currentIndex + offset < index) && node) {
      node = node.next;
      currentIndex++;
    }
    return node;
  }

  // O(1)
  getSize() {
    return this.size;
  }
  empty() {
    return this.size === 0;
  }
  front() {
    return this.head.val;
  }
  back() {
    return this.tail.val;
  }

  // O(1)
  push_front(val) {
    this.size++;
    const node = new Node(val, this.head);
    this.head = node;
    if (!this.tail) this.tail = node;
  }
  // O(1)
  pop_front() {
    this.size--;
    const node = this.head;
    this.head = node.next;
    return node.val;
  }
  // O(1)
  push_back(val) {
    this.size++;
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      const node = new Node(val);
      this.tail.next = node;
      this.tail = node;
    }
  }
  // O(n)
  pop_back() {
    this.size--;
    let node = this.head;
    while (node.next !== this.tail) {
      node = node.next;
    }
    const tailValue = this.tail.val;
    node.next = null;
    this.tail = node;
    return tailValue;
  }
  // O(n)
  value_at(index) {
    const node = this._getNodeAt(index, 0);
    return node ? node.val : new Error('Index does not exist in current list');
  }

  // O(n)
  insert(index, value) {
    const previousNode = this._getNodeAt(index, 1);
    if (previousNode) {
      const currentNode = previousNode.next;
      const node = new Node(value, currentNode);
      previousNode.next = node;
      this.size++;
    }
  }

  // O(n)
  erase(index) {
    const previousNode = this._getNodeAt(index, 1);
    if (previousNode && previousNode.next) {
      previousNode.next = previousNode.next.next;
      this.size--;
    }
  }

  // O(n)
  value_n_from_end(n) {
    const diff = this.size - n;
    const node = this._getNodeAt(diff, 0);
    return node.val;
  }

  // O(n)
  remove_value(value) {
    let pointer = this.head;
    let runner = pointer.next;
    while (runner) {
      if (runner.val === value) {
        pointer.next = runner.next;
        return;
      }
      pointer = pointer.next;
      runner = runner.next;
    }
  }

  // O(n)
  reverse() {
    const values = [];
    let newHead;
    let pointer = this.head;
    while (pointer) {
      values.push(pointer.val);
      pointer = pointer.next;
    }

    while (values.length) {
      const currentVal = values.pop();
      const node = new Node(currentVal);
      if (!newHead) {
        newHead = node;
      } else {
        pointer.next = node;
      }
      pointer = node;
    }

    this.head = newHead;
    this.tail = pointer;
  }
}

module.exports = LinkedList;

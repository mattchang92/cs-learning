class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

// Linked list implementation
class ListQueue {
  constructor(head) {
    this.head = head || null;
    this.tail = head || null;
  }

  enqueue(val) {
    const node = new Node(val);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (this.head) {
      const { val } = this.head;
      this.head = this.head.next;
      return val;
    }
    return null;
  }

  empty() {
    return !this.head;
  }
}

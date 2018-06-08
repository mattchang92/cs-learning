// Implement a binary tree with insert, find, delete and getRandomNode
class BinaryTreeNode {
  constructor(val, parent) {
    this.val = val || null;
    this.parent = parent || null;
    this.left = null;
    this.right = null;
  }

  find(val) {
    return this._binarySearch(val);
  }

  minimum() {
    let node = this;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  maximum() {
    let node = this;
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  insert(val) {
    let pointer = this;
    let parent;
    while (pointer) {
      parent = pointer;
      if (val < pointer.val) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }

    const node = new BinaryTreeNode(val, parent);
    if (val < parent.val) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }

  remove(val) {
    const node = this._binarySearch(val);
    if (!node.left) {
      this._transplant(node, node.right);
    } else if (!node.right) {
      this._transplant(node, node.left);
    } else {
      const nextMin = this.minimum(node.right);
      if (nextMin.parent !== node) {
        this._transplant(nextMin, nextMin.right);
        nextMin.right = node.right;
        nextMin.right.parent = nextMin;
      }
      this._transplant(node, nextMin);
      nextMin.left = node.left;
      nextMin.left.parent = nextMin;
    }
  }

  getRandomNode() {
    let randomNode;
    let numNodes = 1;

    const DFS = (node) => {
      if (!node) return;
      if (Math.floor(Math.random() * numNodes) === 0) {
        randomNode = node;
      }

      numNodes++;
      DFS(node.left);
      DFS(node.right);
    };
    return randomNode;
  }

  _binarySearch(val) {
    let node = this;
    while (node) {
      if (node.val === val) return node;
      node = val < node.val ? node.left : node.right;
    }
    return null;
  }

  _transplant(node1, node2 = null) {
    if (node1 === node1.parent.left) {
      node1.parent.left = node2;
    } else {
      node1.parent.right = node2;
    }
    if (node2) node2.parent = node1.parent;
  }
}


const { printInOrder } = require('../../Test/helpers');
const { createBalancedBinaryTree } = require('../../Test/setup');

const tree = createBalancedBinaryTree(BinaryTreeNode);
console.log(tree);
console.log(printInOrder(tree));


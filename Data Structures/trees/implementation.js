// Implement a binary tree with insert, find, delete and getRandomNode
class BinaryTreeNode {
  constructor() {
    this.val = null;
    this.left = null;
    this.right = null;
  }

  find(val) {
    return this._binarySearch(val);
  }

  insert(val) {
    if (val <= this.val) {
      if (!this.left) {
        this.left = new BinaryTreeNode(val);
      } else {
        this.insert(this.left);
      }
    } else if (!this.right) {
      this.right = new BinaryTreeNode(val);
    } else {
      this.insert(this.right);
    }
  }

  remove(val) {
    const nodes = this._doublePointerSearch(val);
    const parent = nodes.pointer1;
    const node = nodes.pointer2;
    const direction = val < parent.val ? 'left' : 'right';

    if (!node.left) {
      parent[direction] = node.right;
    } else if (!node.right) {
      parent[direction] = node.left;
    } else if (!node.left && !node.right) {
      parent[direction] = null;
    } else {
      let smallestRightNode = node.right.left;
      let smallestNodeParent = node.right;
      while (smallestRightNode) {
        smallestRightNode = smallestRightNode.left;
        smallestNodeParent = smallestNodeParent.left;
      }

      if (smallestRightNode) {
        const newNode = new BinaryTreeNode(smallestRightNode.val);
        newNode.left = node.left;
        newNode.right = node.right;
        smallestNodeParent.left = null;
        parent[direction] = newNode;
      } else {
        smallestNodeParent.left = node.left;
        parent[direction] = smallestNodeParent;
      }
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

  _doublePointerSearch(val) {
    let pointer1;
    let pointer2;

    const search = (node) => {
      if (!node) return null;
      if (node.val === val) {
        pointer2 = node;
        return;
      }

      const nodeToSearch = val < node.val ? node.left : node.right;
      if (search(nodeToSearch)) pointer1 = node;
    };

    search(this);
    return { pointer1, pointer2 };
  }
}


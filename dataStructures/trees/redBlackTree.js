class Node {
  constructor(key, parent, color) {
    this.left = this.right = null;
    this.val = val;
    this.parent = parent;
    this.color = color;
  }
}

class RBTree {
  constructor(root) {
    this.nil = new Node(null, null, 'black');
    this.root = root || this.nil;
  }

  leftRotate(node) {
    const rightNode = node.right;
    node.right = rightNode.left;

    if (rightNode.left !== this.nil) {
      rightNode.left.parent = node;
    }

    rightNode.parent = node.parent;
    if (node.parent === this.nil) {
      this.root = rightNode;
    } else if (node === rightNode.parent.left) {
      node.parent.left = rightNode;
    } else {
      node.parent.right = rightNode;
    }

    rightNode.left = node;
    node.parent = rightNode;
  }

  rbInsertFixup(node) {
    return node;
  }

  rbInsert(node) {
    let parent = this.nil;
    let pointer = this.root;

    while (pointer !== this.nil) {
      parent = pointer;
      if (node.val < pointer.val) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }

    node.parent = parent;
    if (parent === this.nil) {
      this.root = node;
    } else if (node.val < parent.val) {
      parent.left = node;
    } else {
      parent.right = node;
    }

    node.left = this.nil;
    node.right = this.nil;
    node.color = 'red';

    this.rbInsertFixup(node);
  }
}

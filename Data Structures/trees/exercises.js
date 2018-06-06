// Preorder traversal
const preorderTraversal = (root) => {
  const values = [];
  if (!root) return values;
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    values.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return values;
};

// Inorder traversal
const inorderTraversal = (root) => {
  const values = [];
  const stack = [];
  let currentNode = root;

  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();
    values.push(currentNode.val);
    currentNode = currentNode.right;
  }
  return values;
};


const postOrderTraversal = (root) => {
  const values = [];
  if (!root) return values;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    values.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return values.reverse();
};

const postOrderTraversalAlt = (root) => {
  const values = [];
  if (!root) return values;
  const stack1 = [root];
  const stack2 = [];
  while (stack1.length) {
    const node = stack1.pop();
    if (node.left) stack1.push(node.left);
    if (node.right) stack1.push(node.right);
    stack2.push(node);
  }

  while (stack2.length) {
    values.push(stack2.pop().val);
  }

  return values;
};

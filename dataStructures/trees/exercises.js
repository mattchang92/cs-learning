// Preorder traversal
// Pop and process a node immediately then push the children into the stack

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

// Have a currentNode pointer and traverse to the left most leaf before you pop a node
// Push node value into result and set currentNode to right node
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

// Neat trick, follow steps are preorder traversal but flip left/right order and reverse result at the end
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

// Have 2 stacks, one to traverse the tree and another to hold the nodes in the proper order
// Go with the proper order (not flipped) when filling stack1 since stack2 will reverse the order
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

const { TreeNode } = require('../../dataStructures/trees/binaryTree');

const preOrderInput = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];
const inOrderInput = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];

const buildTreePreOrder = (values, maxDepth, depth = 1) => {
  if (!maxDepth) maxDepth = Math.ceil(Math.log2(values.length));
  if (!values || !values.length || depth > maxDepth) return null;
  const head = new TreeNode(values.shift());

  head.left = buildTreePreOrder(values, maxDepth, depth + 1);
  head.right = buildTreePreOrder(values, maxDepth, depth + 1);

  return head;
};

const buildTreeInOrder = (values, maxDepth, depth = 1) => {
  if (!maxDepth) maxDepth = Math.ceil(Math.log2(values.length));
  if (!values || !values.length || depth > maxDepth) return null;

  const head = new TreeNode();

  head.left = buildTreeInOrder(values, maxDepth, depth + 1);
  head.val = values.shift();
  head.right = buildTreeInOrder(values, maxDepth, depth + 1);

  return head;
};

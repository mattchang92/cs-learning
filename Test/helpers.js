const printInOrder = (root) => {
  const result = [];
  const inOrderTraversal = (node) => {
    if (!node) return;
    inOrderTraversal(node.left);
    result.push(node.val);
    inOrderTraversal(node.right);
  };
  inOrderTraversal(root);
  return result;
};

const printPreOrder = (root) => {
  const result = [];
  const preOrderTraversal = (node) => {
    if (!node) return;
    result.push(node.val);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  };
  preOrderTraversal(root);
  return result;
};


const printPostOrder = (root) => {
  const result = [];
  const postOrderTraversal = (node) => {
    if (!node) return;
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    result.push(node.val);
  };
  postOrderTraversal(root);
  return result;
};

module.exports = {
  printInOrder,
  printPostOrder,
  printPreOrder,
};

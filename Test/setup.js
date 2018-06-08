const createBalancedBinaryTree = (Model) => {
  const head = new Model(4);
  const two = new Model(2, head);
  const six = new Model(6, head);
  two.left = new Model(1, two);
  two.right = new Model(3, two);
  six.left = new Model(5, six);
  six.right = new Model(7, six);
  head.left = two;
  head.right = six;
  return head;
};

module.exports = {
  createBalancedBinaryTree,
};

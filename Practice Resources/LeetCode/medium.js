const Node = require('../../dataStructures').TreeNode;

/* Add two numbers given in the form of a linked list with the most
significant digit as the head. Return the number as a linked list */
const addTwoNumbers = (l1, l2) => {
  const listLength = (list) => {
    if (!list.next) return 1;
    return 1 + listLength(list.next);
  };

  const padZeroes = (list, levels) => {
    if (levels === 0) return list;
    const newHead = new Node(0);
    newHead.next = list;
    return padZeroes(newHead, levels - 1);
  };

  const length1 = listLength(l1);
  const length2 = listLength(l2);
  const diff = Math.abs(length1 - length2);
  let shortList;
  let longList;

  if (length1 > length2) {
    longList = l1;
    shortList = padZeroes(l2, diff);
  } else {
    longList = l2;
    shortList = padZeroes(l1, diff);
  }

  const addNumbers = (list1, list2) => {
    if (!list1 || !list2) return { node: null, carry: 0 };

    const result = addNumbers(list1.next, list2.next);
    const sum = list1.val + list2.val + result.carry;
    const carry = Math.floor(sum / 10);
    const node = new Node(sum % 10);
    node.next = result.node;

    return {
      node,
      carry,
    };
  };

  const result = addNumbers(longList, shortList);
  const { node, carry } = result;

  if (carry) {
    const carriedHead = new Node(1);
    carriedHead.next = node;
    return carriedHead;
  }
  return node;
};

// 144. Binary Tree Preorder Traversal
const preorderTraversal = (root) => {
  const result = [];
  if (!root) return result;
  const stack = [root];
  while (stack.length) {
    const head = stack.pop();
    let currentNode = head;
    currentNode.visited = true;
    result.push(currentNode.val);
    while (currentNode) {
      currentNode = currentNode.left;
      if (currentNode && !currentNode.visited) {
        currentNode.visited = true;
        stack.push(currentNode);
      }
    }
    if (head.right) stack.push(head.right);
  }
};


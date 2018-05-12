// 2.1 CtCI Remove Dupes from Unsorted Linked List (how to solve without using extra space?)
const removeDupes = (head) => {
  if (!head) return null;
  if (!head.next) return head;

  const consumedValues = {};
  let pointer = null;
  let runner = head;
  while (runner) {
    if (!consumedValues[runner.val]) {
      consumedValues[runner.val] = true;
      runner = runner.next;
      pointer.next = runner;
    } else {
      runner = runner.next;
    }
  }

  return head;
}
// For a sorted list
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  head.next = deleteDuplicates(head.next);
  return head.val === head.next.val ? head.next : head;
};

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 2.2 CtCI Find k-th to last node in linked list
const findNLastNode = (head, n) => {
  if (!head || (n <= 0)) return null;
  let pointer = null;
  let runner = head;
  let counter = 1;

  while (runner.next) {
    if (counter === n) {
      pointer = head;
    } else {
      counter++;
      runner = runner.next;
      if (pointer) pointer = pointer.next;
    }
  }
  return pointer;j
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 2.4 CtCI Partition a linked list around a value
const partitionList = (head, val) => {
  if (!head || !head.next) return head;
  let leftHead = new Node();
  let rightHead = new Node();
  let leftRunner = leftHead;
  let rightRunner = rightHead;

  while (head) {
    if (head.val >= val) {
      if (rightHead.val) {
        rightRunner.next = new Node(head.val);
        rightRunner = rightRunner.next;
      } else {
        rightHead.val = head.val;
      }
    } else {
      if (leftHead.val) {
        leftRunner.next = new Node(head.val);
        leftRunner = leftRunner.next;
      } else {
        leftHead.val = head.val;
      }
    }
  }

  leftRunner.next = rightHead;
  return leftHead;
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 2.5 Sum Lists
const sumList = (l1, l2) => {
  const listToInt = (node, level = 0) => {
    if (!node) return 0;
    return (node.val * (10 ** level)) + listToInt(node.next, level + 1);
  }

  const sum = listToInt(l1) + listToInt(l2);

  const numToList = (num) => {
    if (!num) return null;
    const node = new Node(num % 10);
    node.next = numToList(Math.floor(num / 10));

    return node;
  }

  return numToList(sum);
}
// Sum list forwards (can be easily implemented with a stack)
const forwardsListSum = (l1, l2) => {
  const listLength = (list) => {
    if (!list.next) return 1;
    return 1 + listLength(list.next);
  };
  
  const padZeroes = (list, levels) => {
    if (levels === 0) return list;
    const newHead = new ListNode(0);
    newHead.next = list;
    return padZeroes(newHead, levels - 1);
  }
  
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
    const node = new ListNode(sum % 10);
    node.next = result.node;
    console.log(result.carry)
    return {
      node: node,
      carry: carry,
    }
  }
  
  const result = addNumbers(longList, shortList);
  const node = result.node;
  const carry = result.carry;
  
  if (carry) {
    const carriedHead = new ListNode(1);
    carriedHead.next = node;
    return carriedHead;
  }
  return node;
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 2.6 Palindrome
const isPalindrome = (head) => {
  if (!head || !head.next) return true;
  let pointer = head;

  let values = [];
  while (pointer) {
    values.push(pointer.val);
    pointer = pointer.next;
  }

  while (head) {
    if (head.val !== values.pop()) return false;
    head = head.next;
  }

  return true;
};

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 2.7 Find the intersection of a linked list
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;

  const listLength = (list) => {
    if (!list.next) return 1;
    return 1 + listLength(list.next);
  }

  const aLength = listLength(headA);
  const bLength = listLength(headB);

  let longList;
  let shortList;
  let lengthDiff;

  if (aLength > bLength) {
    longList = headA;
    shortList = headB;
    lengthDiff = aLength - bLength;
  } else {
    longList = headB;
    shortList = headA;
    lengthDiff = bLength - aLength;
  }

  while (longList) {
    if (lengthDiff) {
      longList = longList.next;
      lengthDiff--;
    } else {
      if (longList === shortList) return longList;
      longList = longList.next;
      shortList = shortList.next;
    }
  }

  return null;

};
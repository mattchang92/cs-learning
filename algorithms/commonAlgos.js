const reverseLinkedListIterative = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    const tempNext = current.next;
    current.next = prev;
    prev = current;
    current = tempNext;
  }

  return prev;
};

const reverseLinkedListRecursive = (head) => {
  if (!head || !head.next) return head;

  const newHead = reverseLinkedListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};


// Counting primes O (n log log n) - Sieve of Eratosthenes
const countPrimes = (n) => {
  const primesArr = new Array(n).fill(true);

  for (let i = 2; i * i < n; i++) { // number to start crossing off multiples
    if (primesArr[i]) continue;
    for (let j = i * i; j < n; j += i) { // start at square since lower multiples already handled in previous outer loop
      primesArr[j] = false;
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (primesArr[i]) count++;
  }
  return count;
};

const mergeLinkedList = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeLinkedList(l1.next, l2);
    return l1;
  }
  l2.next = mergeLinkedList(l1, l2.next);
  return l2;
};


const genericFindSubstring = (string) => {
  vector<int> map(128,0);
  let  counter; // check whether the substring is valid
  let  begin=0, end=0; //two pointers, one point to tail and one  head
  let  d; //the length of substring

  for() { /* initialize the hash map here */ }

  while(end < string.length){
      if(map[string[end++]]-- ?){  /* modify counter here */ }
      while(/* counter condition */){
          /* update d here if finding minimum*/
        //increase begin to make it invalid/valid again
        if(map[string[begin++]]++ ?){ /*modify counter here*/ }
      }
      /* update d here if finding maximum*/
  }
  return d;
};

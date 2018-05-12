// Sunday April 1st. Given an array of integers, return a mapped array where each element is the product of all the other elements. Do this in O(n) time.
const productArray = (arr) => {
  const prefixArr = [];
  let suffixArr = [];
  const end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (!prefixArr.length || !suffixArr.length) {
      prefixArr.push(arr[i]);
      suffixArr.push(arr[end - i]);
    } else {
      prefixArr.push(prefixArr[i - 1] * arr[i]);
      suffixArr.push(suffixArr[i - 1] * arr[end - i]);
    }
  }

  suffixArr = suffixArr.reverse();

  return arr.map((num, i) => {
    if (i === 0) return suffixArr[1];
    if (i === end) return prefixArr[end - 1];

    return prefixArr[i - 1] * suffixArr[i + 1];
  })
}

//Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
const findNextPositive = (arr) => {
  if (!arr || !arr.length) return null;
  if (!arr.length === 1) return arr[0] === 1 ? 2 : 1;

  let negativePointer = 0;
  for (let i in arr) {
    if (arr[i] <= 0) {
      const temp = arr[i];
      arr[i] = arr[pointer];
      arr[pointer] = temp;
      pointer++; 
    }
  }

  const max = arr.length - negativePointer + 1;

  for (let i = negativePointer; i < arr.length; i++) {
    if (arr[i] > max) {
      arr[i] = 0;
    } else {
      arr[arr[i] - 1] = arr[i];
    }
  }

  for (let i = negativePointer; i < arr.length; i++) {
    if (arr[i] !== (i - negativePointer + 1)) return i - negativePointer + 1;
  }

  return max + 1;
}
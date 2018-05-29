/* Sunday April 1st. Given an array of integers, return a mapped array where each element
is the product of all the other elements. Do this in O(n) time. */
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
  });
};

// With no extra space
const productArrayConstantSpace = (nums) => {
  const n = nums.length;
  const result = [1];
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  return result;
};

/* Given an array of integers, find the first missing positive integer in linear time and constant
space. In other words, find the lowest positive integer that does not exist in the array. The
array can contain duplicates and negative numbers as well. */

// TODO: Need to fix code
// const findNextPositive = (arr) => {
//   if (!arr || !arr.length) return null;
//   if (!arr.length === 1) return arr[0] === 1 ? 2 : 1;

//   const negativePointer = 0;
//   for (const i in arr) {
//     if (arr[i] <= 0) {
//       const temp = arr[i];
//       arr[i] = arr[pointer];
//       arr[pointer] = temp;
//       pointer++;
//     }
//   }

//   const max = arr.length - negativePointer + 1;

//   for (let i = negativePointer; i < arr.length; i++) {
//     if (arr[i] > max) {
//       arr[i] = 0;
//     } else {
//       arr[arr[i] - 1] = arr[i];
//     }
//   }

//   for (let i = negativePointer; i < arr.length; i++) {
//     if (arr[i] !== (i - negativePointer + 1)) return i - negativePointer + 1;
//   }

//   return max + 1;
// };

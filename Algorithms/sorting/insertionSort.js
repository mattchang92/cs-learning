// Insertion sort O(n^2)
/* Works best for small lists, works like sorting a hand of cards as you pick up one at a time.
Start from second postion in array and keep comparing/swapping previous numbers until in sorted
position (in reality more like moving arr[0..i] right one spot until sorted). Left side of i is
always sorted and right side of i is always in default position. */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let index = i - 1;
    while (index >= 0 && arr[index] > key) {
      arr[index + 1] = arr[index];
      index--;
      arr[index + 1] = key;
    }
  }
  return arr;
};

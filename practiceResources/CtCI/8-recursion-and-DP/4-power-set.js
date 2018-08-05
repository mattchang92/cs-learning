const assert = require('assert');

const getSubsets = (set, index = 0) => {
  if (!set) return null;
  let allSubsets;
  if (index === set.length) {
    allSubsets = [[]];
  } else {
    allSubsets = getSubsets(set, index + 1);
    const item = set[index];
    const moreSubsets = [];
    allSubsets.forEach((subset) => {
      const newSubset = subset.concat(item);
      moreSubsets.push(newSubset);
    });
    allSubsets = allSubsets.concat(moreSubsets);
  }
  return allSubsets;
};


assert.equal(getSubsets(), null);
assert.deepEqual(getSubsets([1, 2, 3]), [[], [3], [2], [3, 2], [1], [3, 1], [2, 1], [3, 2, 1]]);
assert.deepEqual(getSubsets([]), [[]]);

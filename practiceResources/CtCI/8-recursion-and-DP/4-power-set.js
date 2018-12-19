const assert = require('assert');

const getPowerSet = (nums) => {
  if (!nums) return null;
  const getSubsets = (index) => {
    if (index < 0) {
      return [[]];
    }
    const allCurrentSubsets = getSubsets(index - 1);
    const num = nums[index];
    const newSubsets = allCurrentSubsets.map(subset => subset.concat(num));

    return allCurrentSubsets.concat(newSubsets);
  };

  return getSubsets(nums.length - 1);
};


assert.equal(getPowerSet(), null);
assert.deepEqual(getPowerSet([1, 2, 3]), [[], [3], [2], [3, 2], [1], [3, 1], [2, 1], [3, 2, 1]]);
assert.deepEqual(getPowerSet([]), [[]]);

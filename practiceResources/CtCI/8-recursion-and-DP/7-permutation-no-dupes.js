// slow brute force solution. Actually runs faster than
const findPermutationsBrute = (string) => {
  const strMap = string.split('');
  const validChars = strMap.map(() => true);
  const results = [];

  const permutate = (buffer = []) => {
    if (buffer.length === string.length) {
      return results.push(buffer.join(''));
    }

    strMap.forEach((char, i) => {
      if (validChars[i]) {
        validChars[i] = false;
        buffer.push(char);
        permutate(buffer);
        buffer.pop();
        validChars[i] = true;
      }
    });
  };

  permutate();

  return results;
};


const findPermutations = (string) => {
  const memo = {};

  const singleCharPermutate = (str, char) => {
    const permutations = [];
    permutations.push(char.concat(str));
    permutations.push(str.concat(char));

    for (let i = 1; i < str.length; i++) {
      permutations.push(str.substr(0, i).concat(char).concat(str.substr(i)));
    }

    return permutations;
  };

  const permutate = (arr, n) => {
    if (n === 0) return [arr[0]];
    let result = [];

    if (!memo[n]) memo[n] = permutate(arr, n - 1);
    memo[n].forEach((permutation) => {
      result = result.concat(singleCharPermutate(permutation, arr[n]));
    });
    return result;
  };

  return permutate(string, string.length - 1);
};


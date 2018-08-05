// Brute force, slow solution
const printValidParens = (num) => {
  const foundPermutations = {};

  const getPermutations = (parens) => {
    const brackets = '()';
    const results = [];

    for (let i = 0; i <= parens.length; i++) {
      const permutation = parens.substr(0, i).concat(brackets).concat(parens.substr(i));
      if (!foundPermutations[permutation]) {
        foundPermutations[permutation] = true;
        results.push(permutation);
      }
    }
    return results;
  };

  const getValidParens = (n) => {
    if (n === 1) return ['()'];
    let results = [];
    const prevValidCombos = getValidParens(n - 1);

    prevValidCombos.forEach((parens) => {
      results = results.concat(getPermutations(parens));
    });

    return results;
  };

  return getValidParens(num);
};


// Faster solution, building the parens from the bottom saves us from repeatedly regenerating the same sets
const buildValidParens = (n) => {
  const results = [];

  const build = (str = [], left = 0, right = 0) => {
    if (left > n || right > n || right > left) return;
    if (left === n && right === n) {
      results.push(str.join(''));
    } else {
      str.push('(');
      build(str, left + 1, right);
      str.pop();
      str.push(')');
      build(str, left, right + 1);
      str.pop();
    }
  };

  build();

  return results;
};

console.log(buildValidParens(4));

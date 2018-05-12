const permuteString = (string) => {
  const strArray = string.split('');
  const usedLetters = strArray.map(() => false);
  const result = [];

  const doPermute = (arr = [], pointer = 0) => {
    if (pointer === strArray.length) {
      return console.log(result.join(''));
    } else {
      for (let i = 0; i < strArray.length; i++) {
        if (!usedLetters[i]) {
          usedLetters[i] = true;
          result.push(strArray[i]);
          doPermute(pointer + 1);
          result.pop();
          usedLetters[i] = false
        }
      }
    }
  }

  doPermute();
}

permuteString('hello');



const findCombinations = (string) => {
  const strArray = string.split('');
  const result = [];

  const doCombo = (pointer = 0) => {
    for (let i = pointer; i < strArray.length; i++) {
      result.push(strArray[i])
      console.log(result.join(''));
      if (pointer < strArray.length - 1) {
        doCombo(pointer + 1);
      }
      result.pop();
    }
  }

  doCombo();
}

findCombinations('hello')
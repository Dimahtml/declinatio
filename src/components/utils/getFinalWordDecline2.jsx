const removeChar = (word, index) => {
  return word.substring(0, word.length - 2) + word.substring(word.length - 1, word.length);
}

const getFinalWordDecline2 = (initialWord, declineNumber, casus) => {
  const lastSymbol = initialWord.slice(-1);
  let suffixes = ['', '', '', '', '', ''];

  let regex = /б$|в$|г$|д$|ж$|з$|к$|н$|п$|р$|т$|ф$/;
  let regex2 = /л$|м$|с$|х$/;
  let regex3 = /о$/;
  let regex4 = /ец$/;
  let regex5 = /яц$/;
  let regex6 = /ь$/;
  let result;

  if (regex.test(initialWord)) {
    suffixes = ['', 'а', 'у', 'а', 'ом', 'е'];

  } else if (regex2.test(initialWord)) {
    suffixes = ['', 'а', 'у', '', 'ом', 'е'];

  } else if (regex3.test(initialWord)) {
    suffixes = ['о', 'а', 'у', 'о', 'ом', 'е'];
    return initialWord.slice(0, -1) + suffixes[casus];

  } else if (regex4.test(initialWord)) {
    suffixes = ['', 'а', 'у', 'а', 'ом', 'е'];

    if (casus === '0') {
      result = initialWord;
    } else {
      // result =
      // initialWord.substring(0, initialWord.length - 2) + 'й' +
      // initialWord.substring(initialWord.length - 1, initialWord.length) + suffixes[casus];
      result = removeChar(initialWord, -2) + suffixes[casus];
    }
    return result;

  } else if (regex5.test(initialWord)) {
    suffixes = ['', 'а', 'у', 'а', 'ем', 'е'];
    if (casus === '0') {
      result = initialWord;
    } else {
      result =
      initialWord.substring(0, initialWord.length - 2) + 'й' +
      initialWord.substring(initialWord.length - 1, initialWord.length) + suffixes[casus];
    }
    return result;

  } else if (regex6.test(initialWord)) {
    suffixes = [lastSymbol, 'я', 'ю', 'я', 'ем', 'е'];
    return initialWord.slice(0, -1) + suffixes[casus];
  }
  
  return initialWord + suffixes[casus];
};

export { getFinalWordDecline2 }

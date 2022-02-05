// для удаления предпоследнего символа index1 = 2 ; index2 = 1
import { removeChar } from './removeChar';

const getFinalWordDecline2 = (initialWord, casus) => {
  const lastSymbol = initialWord.slice(-1);
  let suffixes = ['', '', '', '', '', ''];

  let regex1 = /б$|в$|г$|д$|ж$|з$|к$|н$|п$|р$|т$|ф$|ц$|ч$|ш$|щ$/;
  let regex2 = /л$|м$|с$|х$/;
  let regex3 = /о$/;
  let regex4 = /ец$/;
  let regex5 = /яц$/;
  let regex6 = /ь$/;
  let regex7 = /ок$/;
  let result;

  if (regex7.test(initialWord)) {
    suffixes = ['', 'а', 'у', '', 'ом', 'е'];
    if (casus === "0" || casus === "3") {
      result = initialWord;
    } else {
      result = removeChar(initialWord, 2, 1) + suffixes[casus];
    }
    return result;

  } else if (regex2.test(initialWord)) {
    suffixes = ['', 'а', 'у', '', 'ом', 'е'];
    return initialWord + suffixes[casus];
  } else if (regex3.test(initialWord)) {
    suffixes = ['о', 'а', 'у', 'о', 'ом', 'е'];
    return initialWord.slice(0, -1) + suffixes[casus];

  } else if (regex4.test(initialWord)) {
    suffixes = ['', 'а', 'у', 'а', 'ом', 'е'];
          console.log(222222222);
    if (casus === '0') {
      result = initialWord;
    } else {
      result = removeChar(initialWord, 2, 1) + suffixes[casus];
    }
    return result;

  } else if (regex5.test(initialWord)) {
    suffixes = ['', 'а', 'у', 'а', 'ем', 'е'];
    if (casus === '0') {
      result = initialWord;
    } else {
      result =
      initialWord.substring(0, initialWord.length - 1) + 'й' +
      initialWord.substring(initialWord.length - 1, initialWord.length) + suffixes[casus];
    }
    return result;

  } else if (regex6.test(initialWord)) {
    suffixes = [lastSymbol, 'я', 'ю', 'я', 'ем', 'е'];
    return initialWord.slice(0, -1) + suffixes[casus];

  } else if (regex1.test(initialWord)) {
    suffixes = ['', 'а', 'у', 'а', 'ом', 'е'];
    return initialWord + suffixes[casus];
  }
  
  return initialWord;
};

export { getFinalWordDecline2 }

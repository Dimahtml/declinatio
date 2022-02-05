const SECOND_DECLENSION_WORDS = ['гвоздь', 'голубь', 'дождь', 'лебедь'];

export const getDeclineNumber = (word) => {
  const regexDeclension1 = /[а,я]$/;
  const regexDeclension2 = /[б,в,г,д,ж,з,к,л,м,н,о,п,р,с,т,ф,х,ц]$/;
  const regexDeclension3 = /чь$|шь$|щь$|ость$|бь$|вь$|дь$|зь$|сь$|ть$|жь$|рь$/;
  const regexDeclension4 = /у$/;
  const regexDeclension2or3 = /ь$/;

  if (regexDeclension1.test(word)) {
    return 1;
  } else if (regexDeclension2.test(word) || SECOND_DECLENSION_WORDS.includes(word)) {
    return 2;
  } else if (regexDeclension3.test(word)) {
    return 3;
  } else if (regexDeclension4.test(word)) {
    return 4;
  } else if (regexDeclension2or3.test(word)) {
    return 23;
  };
}

const removeChar = (word, index) => {
  return word.substring(0, word.length - 2) + word.substring(word.length - 1, word.length);
}

const replaceChar = (word, index) => {
  return 
}

export const getFinalWord = (initialWord, declensionNumber, casus, gender = 0, evt) => {
  evt.preventDefault();

  let regex;
  let regex2;
  let regex3;
  let regex4;
  let regex5;
  
  let suffixes = ['', '', '', '', '', ''];
  const initialLastSymbol = initialWord.slice(-1);

  switch (declensionNumber) {
    case 1:
      regex = /га$|ка$|ха$/;
      regex2 = /ша$|жа$/;
      regex3 = /ия$/;
      regex4 = /ея$|ья$|я$/;

      if (regex.test(initialWord)) {
        suffixes = [initialLastSymbol, 'и', 'е', 'у', 'ой', 'е'];
      } else if (regex2.test(initialWord)) {
        suffixes = [initialLastSymbol, 'и', 'е', 'у', 'ей', 'е'];
      } else if (regex3.test(initialWord)) {
        suffixes = [initialLastSymbol, 'и', 'и', 'ю', 'ей', 'и'];
      } else if (regex4.test(initialWord)) {
        suffixes = [initialLastSymbol, 'и', 'е', 'ю', 'ёй', 'е'];
      } else {
        suffixes = [initialLastSymbol, 'ы', 'е', 'у', 'ой', 'е'];
      }
      return initialWord.slice(0, -1) + suffixes[casus];
    
    case 2:
      regex = /б$|в$|г$|д$|ж$|з$|к$|н$|п$|р$|т$|ф$/;
      regex2 = /л$|м$|с$|х$/;
      regex3 = /о$/;
      regex4 = /ец$/;
      regex5 = /яц$/;
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
      }
      return initialWord + suffixes[casus];
    
    case 3:
      suffixes = [initialLastSymbol, 'и', 'и', 'ь', 'ью', 'и'];
      return initialWord.slice(0, -1) + suffixes[casus];

    // case 23 это случай когда склонение либо 2 либо 3 и требуется уточнить род существительного у пользователя
    case 23:
      if (gender === 'male') {
        suffixes = [initialLastSymbol, 'я', 'ю', 'я', 'ем', 'е'];
      } else if (gender === 'female') {
        suffixes = [initialLastSymbol, 'и', 'и', initialLastSymbol, 'ью', 'и'];
      } else {
        return '';
      }
      return initialWord.slice(0, -1) + suffixes[casus];
      
    default:
      return initialWord + '???';
  }
}
  
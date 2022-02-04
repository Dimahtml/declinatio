const SECOND_DECLENSION_WORDS = ['гвоздь', 'голубь', 'дождь', 'лебедь'];


export const getDeclensionNumber = (word) => {
  // const regexDeclension1 = /а$|я$/;
  const regexDeclension1 = /[а,я]$/;
  // const regexDeclension2 = /б$|в$|г$|д$|ж$|з$|к$|л$|м$|н$|о$|п$|р$|с$|т$|ф$|х|$арь$|тель$/;
  const regexDeclension2 = /[б,в,г,д,ж,з,к,л,м,н,о,п,р,с,т,ф,х,арь,тель]$/;
  const regexDeclension3 = /чь$|шь$|щь$|ость$|бь$|вь$|дь$|зь$|сь$|ть|жь$/;
  const regexDeclension4 = /у$/;

  if (regexDeclension1.test(word) || regexDeclension1.test(word)) {
    return 1;
  } else if (regexDeclension2.test(word) || SECOND_DECLENSION_WORDS.includes(word)) {
    return 2;
  } else if (regexDeclension3.test(word)) {
    return 3;
  } else if (regexDeclension4.test(word)) {
    return 4;
  };
}

// =======================================================
// =======================================================
// =======================================================

export const getFinalWord = (initialWord, declensionNumber, casus, evt) => {
  evt.preventDefault();
  
  let suffixes = [];
  const initialLastSymbol = initialWord.slice(-1);
  const initialTwoLastSymbols = initialWord.slice(-2);

  if (declensionNumber === 1) {
    if (initialTwoLastSymbols === 'га' || initialTwoLastSymbols === 'ка') {
      suffixes = [initialLastSymbol, 'и', 'е', 'у', 'ой', 'е'];
    } else if (initialTwoLastSymbols === 'ша' || initialTwoLastSymbols === 'жа') {
      suffixes = [initialLastSymbol, 'и', 'е', 'у', 'ей', 'е'];
    } else if (initialTwoLastSymbols === 'ия') {
      suffixes = [initialLastSymbol, 'и', 'и', 'ю', 'ей', 'и'];
    } else if (initialTwoLastSymbols === 'ея' || initialTwoLastSymbols === 'ья' || initialLastSymbol === 'я') {
      suffixes = [initialLastSymbol, 'и', 'е', 'ю', 'ёй', 'е'];
    } else {
      suffixes = [initialLastSymbol, 'ы', 'е', 'у', 'ой', 'е'];
    }
    return initialWord.slice(0, -1) + suffixes[casus];
  }

  if (declensionNumber === 2) {
    const regex = /б$|в$|г$|д$|ж$|з$|к$|н$|п$|р$|т$|ф$/;
    const regex2 = /л$|м$|с$|х$/;
    const regex3 = /о$/;

    if (regex.test(initialWord)) {
      suffixes = ['', 'а', 'у', 'а', 'ом', 'е'];
    } else if (regex2.test(initialWord)) {
      suffixes = ['', 'а', 'у', '', 'ом', 'е'];
    } else if (regex3.test(initialWord)) {
      suffixes = ['о', 'а', 'у', 'о', 'ом', 'е'];
      return initialWord.slice(0, -1) + suffixes[casus];
    }

    return initialWord + suffixes[casus];
  }

  if (declensionNumber === 3) {
    suffixes = [initialLastSymbol, 'и', 'и', 'ь', 'ью', 'и'];
    return initialWord.slice(0, -1) + suffixes[casus];
  }

  if (declensionNumber === 4) {
    return initialWord;
  }
}
  
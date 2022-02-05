const getFinalWordDecline1 = (initialWord, casus) => {
  const lastSymbol = initialWord.slice(-1);
  let suffixes = ['', '', '', '', '', ''];

  let regex = /га$|ка$|ха$/;
  let regex2 = /ша$|жа$/;
  let regex3 = /ия$/;
  let regex4 = /ея$|ья$|я$/;

  if (regex.test(initialWord)) {
    suffixes = [lastSymbol, 'и', 'е', 'у', 'ой', 'е'];

  } else if (regex2.test(initialWord)) {
    suffixes = [lastSymbol, 'и', 'е', 'у', 'ей', 'е'];

  } else if (regex3.test(initialWord)) {
    suffixes = [lastSymbol, 'и', 'и', 'ю', 'ей', 'и'];

  } else if (regex4.test(initialWord)) {
    suffixes = [lastSymbol, 'и', 'е', 'ю', 'ёй', 'е'];

  } else {
    suffixes = [lastSymbol, 'ы', 'е', 'у', 'ой', 'е'];

  }
  return initialWord.slice(0, -1) + suffixes[casus];
};

export { getFinalWordDecline1 }

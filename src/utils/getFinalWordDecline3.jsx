const getFinalWordDecline3 = (initialWord, casus) => {
  const lastSymbol = initialWord.slice(-1);
  let suffixes = ['', '', '', '', '', ''];

  suffixes = [lastSymbol, 'и', 'и', 'ь', 'ью', 'и'];
  return initialWord.slice(0, -1) + suffixes[casus];
}

export { getFinalWordDecline3 }

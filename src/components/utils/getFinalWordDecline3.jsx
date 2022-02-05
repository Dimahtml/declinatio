const getFinalWordDecline3 = (initialWord, declineNumber, casus) => {
  const lastSymbol = initialWord.slice(-1);
  let suffixes = ['', '', '', '', '', ''];

  let regex = /б$|в$|г$|д$|ж$|з$|к$|н$|п$|р$|т$|ф$/;
  let regex2 = /л$|м$|с$|х$/;
  let regex3 = /о$/;
  let regex4 = /ец$/;
  let regex5 = /яц$/;
  let result;

  suffixes = [lastSymbol, 'и', 'и', 'ь', 'ью', 'и'];
  return initialWord.slice(0, -1) + suffixes[casus];
}

export { getFinalWordDecline3 }

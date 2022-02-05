export const removeChar = (word, index1, index2) => {
  return word.substring(0, word.length - index1) + word.substring(word.length - index2, word.length);
}

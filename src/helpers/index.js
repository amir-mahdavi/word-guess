/**
 * @function getLetterMatchCount
 * @param {String} guessedWord
 * @param {String} secretWord
 * @returns {number} - Number of letters that match between guessed and secret words
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(l => guessedLetterSet.has(l)).length;
}

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
};

/**
 * Returns redux thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {String} guessedWord
 * @returns {function} redux thunk function
 */
export const guessWord = guessedWord => (dispatch, getState) => {};

import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
};

/**
 * Returns redux thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {String} guessedWord
 * @returns {function} redux thunk function
 */
export const guessWord = guessedWord => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount }
  });
  if (guessedWord === secretWord) {
    dispatch({ type: actionTypes.CORRECT_GUESS });
  }
};

export const getSecretWord = () => dispatch => {
  // response data is an array of words
  return axios.get('https://random-word-api.herokuapp.com/word?key=55LXS3M3').then(res => {
    const [secretWord] = res.data;
    dispatch({ type: actionTypes.SET_SECRET_WORD, payload: secretWord });
  });
};

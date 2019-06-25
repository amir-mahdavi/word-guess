import { actionTypes } from '../actions';

/**
 * @function secretWordReducer
 * @param {String} state - initial state
 * @param {object} action - action to be applied
 * @returns {String} - new state (secret word payload from action)
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};

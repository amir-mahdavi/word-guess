import React from 'react';
import PropTypes from 'prop-types';
/**
 * Functional react component for congratulatory message
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' props is empty)
 */
const Congrats = props => (
  <div data-test="component-congrats">
    {props.success ? (
      <span data-test="congrats-message">Congratulations! You guessed the word!</span>
    ) : null}
  </div>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};
export default Congrats;

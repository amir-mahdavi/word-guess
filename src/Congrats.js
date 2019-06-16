import React from 'react';

/**
 * Functional react component for congratulatory message
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' props is empty)
 */
export default props => (
  <div data-test="component-congrats">
    {props.success ? (
      <span data-test="congrats-message">Congratulations! You guessed the word!</span>
    ) : null}
  </div>
);

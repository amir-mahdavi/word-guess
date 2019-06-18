import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
  const renderInstructions = () => {
    return <span data-test="guess-instructions">Guess the secret word!</span>;
  };
  const renderGuessedWords = () => (
    <div data-test="guessed-words">
      <h3>Guessed Words</h3>
      {props.guessedWords.map(({ guessedWord, letterMatchCount }, index) => {
        return (
          <div key={index} data-test="guessed-word">
            word: {guessedWord}, match: {letterMatchCount}
          </div>
        );
      })}
    </div>
  );
  return (
    <div data-test="component-guessed-words">
      {props.guessedWords.length === 0 ? renderInstructions() : renderGuessedWords()}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;

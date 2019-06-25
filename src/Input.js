import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();

    // bind the context of the function
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }
  submitGuessedWord(evt) {
    // don't submit the form
    evt.preventDefault();

    const guessedWord = this.inputBox.current.value;
    if (guessWord && guessWord.length) {
      this.props.guessWord(guessedWord);
    }
  }
  renderContents() {
    return this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          ref={this.inputBox}
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter your guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={this.submitGuessedWord}
        >
          Submit
        </button>
      </form>
    );
  }
  render() {
    return <div data-test="component-input">{this.renderContents()} </div>;
  }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(
  mapStateToProps,
  { guessWord } // don't need to control dispatch here, so instead of mapDispatchToProps just use the object
)(UnconnectedInput);

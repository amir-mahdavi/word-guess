import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

class Input extends Component {
  renderContents() {
    return this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter your guess"
        />
        <button data-test="submit-button" className="btn btn-primary mb-2" type="submit">
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
)(Input);

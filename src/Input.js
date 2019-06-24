import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    return this.props.success ? null : (
      <div data-test="component-input">
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
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps)(Input);

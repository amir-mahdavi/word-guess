import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSecretWord } from './actions';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Secret Word</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => ({
  success,
  secretWord,
  guessedWords
});

export default connect(
  mapStateToProps,
  { getSecretWord }
)(App);

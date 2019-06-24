import React from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

function App() {
  return (
    <div className="App">
      <h1>Secret Word</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{ guessedWord: 'computer', letterMatchCount: 4 }]} />
    </div>
  );
}

export default App;

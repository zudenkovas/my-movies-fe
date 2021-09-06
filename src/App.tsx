import React from 'react';

import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>My Movies</p>
        <a className="App-link" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/ContextSample'
import Counter from './components/UseStateSample'
import ReducerCounter from './components/UseReducerSample'

function App() {
  return (
    <div className="App">
      <Page/>
      <Counter initialValue={1}/>
      <ReducerCounter initialValue={1}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

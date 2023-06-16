import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/ContextSample'
import Counter from './components/UseStateSample'
import ReducerCounter from './components/UseReducerSample'
import { Parent } from './components/Parent'

function App() {
  return (
    <div className="App">
      <Page/>
      <div>----</div>
      <Counter initialValue={1}/>
      <div>----</div>
      <ReducerCounter initialValue={1}/>
      <div>----</div>
      <Parent/>
    </div>
  );
}

export default App;

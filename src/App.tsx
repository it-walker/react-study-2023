import React from 'react';
import './App.css';
// import Page from './components/ContextSample'
// import Counter from './components/UseStateSample'
// import ReducerCounter from './components/UseReducerSample'
// import { Parent } from './components/Parent'
import { UseMemoSample } from './components/UseMemoSample'
import { Clock } from './components/Clock';

function App() {
  return (
    <div className="App">
      {/* <Page/> */}
      {/* <div>----</div>
      <Counter initialValue={1}/>
      <div>----</div>
      <ReducerCounter initialValue={1}/>
      <div>----</div> */}
      {/* <Parent/> */}
      <UseMemoSample/>
      <Clock/>
    </div>
  );
}

export default App;

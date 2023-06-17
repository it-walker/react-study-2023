import React from 'react';
import './App.css';
// import Page from './components/ContextSample'
// import Counter from './components/UseStateSample'
// import ReducerCounter from './components/UseReducerSample'
// import { Parent } from './components/Parent'
// import { UseMemoSample } from './components/UseMemoSample'
// import { Clock } from './components/Clock';
import UseContextSample from './components/UseContextSample';
import ImageUploader from './components/UseRefSample';
import UseImperativeHandleSample from './components/UseImperativeHandleSample';
import UseInputSample from './components/UseInputSample';

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
      {/* <UseMemoSample/> */}
      {/* <Clock/> */}
      <UseContextSample/>
      <ImageUploader/>
      <UseImperativeHandleSample/>
      <UseInputSample/>
    </div>
  );
}

export default App;

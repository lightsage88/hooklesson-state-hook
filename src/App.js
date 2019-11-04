import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/Example';
import ExampleWithHook from './components/ExampleWithHook';
import ExampleWithManyStates from './components/ExampleWithManyStates';

function App() {
  return (
    <div className="App">
     <Example/>
     <ExampleWithHook/>
     <ExampleWithManyStates />
    </div>
  );
}

export default App;

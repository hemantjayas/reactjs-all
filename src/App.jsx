import './App.css';
import { useState } from 'react';
import { Greeting } from './components/Greeting';
import { ParentComponent } from './components/ParentComponent';
import { Counter } from './components/Counter/Counter';
function App() {


  return (
    <div className="App">
      <Greeting />
      <ParentComponent/>
      <Counter/>

    </div>
  );
}

export default App;

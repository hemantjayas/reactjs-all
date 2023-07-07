import './App.css';
import { useState } from 'react';
import { Greeting } from './components/Greeting';
import { ParentComponent } from './components/ParentComponent';
import { Counter } from './components/Counter/Counter';
import { Timer } from './components/Timer/Timer';
function App() {


  return (
    <div className="App">
      <Greeting />
      <ParentComponent/>
      <Counter/>
      <Timer/>

    </div>
  );
}

export default App;

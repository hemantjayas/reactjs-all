import './App.css';
import { useState } from 'react';
import { Greeting } from './components/Greeting';
import { ParentComponent } from './components/ParentComponent';
import { Counter } from './components/Counter/Counter';
import { Timer } from './components/Timer/Timer';
import { LoginForm } from './components/LoginForm/LoginForm';
function App() {


  return (
    <div className="App">
      <Greeting />
      <ParentComponent/>
      <Counter/>
      <Timer/>
      <LoginForm/>

    </div>
  );
}

export default App;

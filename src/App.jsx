import './App.css';
import { useState } from 'react';
import { Greeting } from './components/Greeting';
import { ParentComponent } from './components/ParentComponent';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Greeting />
      <ParentComponent/>

    </div>
  );
}

export default App;

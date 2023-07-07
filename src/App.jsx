import './App.css';
import { useState } from 'react';
import { Greeting } from './components/Greeting';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Greeting />

    </div>
  );
}

export default App;

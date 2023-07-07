import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}  ></Route>
        <Route path="/home" element={<Home />}  ></Route>
      </Routes>

    </div>
  );
}

export default App;

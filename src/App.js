
import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import Subscribe from './Components/Subscribe/Subscribe';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/subscribe' element={<Subscribe/>} />
      </Routes>
    </div>

  );
}

export default App;

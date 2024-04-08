
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Register from './views/auth/Register';
import Home from './views/Home';

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/auth/Register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;

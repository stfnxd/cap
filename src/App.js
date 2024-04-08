
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Register from './views/auth/Register';
import Frontpage from './views/Frontpage';

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/auth/Register" element={<Register />} />
      <Route path="/" element={<Frontpage />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;

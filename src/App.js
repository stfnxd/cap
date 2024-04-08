
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Register from './views/auth/Register';
import Frontpage from './views/Frontpage';
import AuthProvider from './context/auth';
import Login from './views/auth/Login';
import ForgotPass from './views/auth/ForgotPass';
import ResetPass from './views/auth/ResetPass';
import Profile from './views/user/Profile';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/auth/Register" element={<Register />} />
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/ForgotPass" element={<ForgotPass />} />
          <Route path="/auth/ResetPass" element={<ResetPass />} />
          <Route path="/user/Profile" element={<Profile />} />
          <Route path="/" element={<Frontpage />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;

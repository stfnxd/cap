
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
import PrivateRoute from "./context/PrivateRoute";
import CreateAd from "./views/user/CreateAd";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>

        {/* Private routes */}
        <Route element={<PrivateRoute />}>
            <Route path="/create-ad" element={<CreateAd />} />
        </Route>

        {/* Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={<Frontpage />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;

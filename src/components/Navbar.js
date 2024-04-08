import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthCon } from '../context/auth'
import { updateDoc, doc } from 'firebase/firestore';
import { auth, db } from "../firebaseConfig";
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const { user } = useContext(AuthCon);
  const navigate = useNavigate();

  const handleLogout = async () =>{
    await updateDoc(doc(db, 'users', user.uid), {
      isOnline: false,
    });

    await signOut(auth);

    navigate('/auth/login');
  };

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top shadow-sm">
    <div className="container-fluid">

    <Link className="navbar-brand" to="/">
        Silk Road🐪
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {user ? ( 
        <>

        <li className="navMargin nav-item">
          <Link className="nav-link" to={'/create-ad'}>
            Create Advert
          </Link>
        </li>
        <li className="navMargin nav-item">
          <Link className="nav-link" to={`/profile/${user.uid}`}>
            Profile
          </Link>
        </li>
        <li className="navMargin nav-item">
          <Link className="nav-link" to={`/profile/${user.uid}`}>
            Profile
          </Link>
        </li>
        <button className='navMargin btn btn-secondary btn-sm' onClick={handleLogout}>Log Off</button>
        </>
        ) : (
        <>
        <li className="navMargin nav-item">
            <Link className="nav-link" to="/register">
                Register
            </Link>
        </li>
        <li className="navMargin nav-item">
            <Link className="nav-link" to="/login">
                Login
            </Link>
        </li>
        </>)}
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
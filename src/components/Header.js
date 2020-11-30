import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'
import {AuthContext} from '../contexts/AuthContext'

const Header = () => {
  const {currentUser, currentUserName, logout} = useContext(AuthContext)
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>Home!</Link>
      </div>
      <div className="links">
        <ul>
          {currentUser ? 
            <>
              <li><Link to={'/profile'}>{currentUserName}'s Profile</Link></li>
              <li><a href="/" onClick={ logout }>Log Out</a></li>
            </>
          :
            <>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className='nav'>
      <p>Mockr</p>
      <Link>Log in/Sign up</Link>
    </nav>
  )
}

export default NavBar;
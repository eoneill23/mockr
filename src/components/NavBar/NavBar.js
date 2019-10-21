import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to='/'>Mockr</Link>
      <Link to='/login'>Log in</Link>
    </nav>
  )
}

export default NavBar;
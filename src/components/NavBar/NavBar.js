import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext'
import './NavBar.css';

export const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className='nav'>
      <Link to='/'>Mockr</Link>
      {user && <><Link to='/interviews'>Interviews</Link> <Link to='/questions'>Questions</Link> <Link to='/' onClick={() => setUser('')}>Log out</Link></>}
      {!user && <Link to='/login'>Log in</Link>}
    </nav>
  )
}

export default NavBar;
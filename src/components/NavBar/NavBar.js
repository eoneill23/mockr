import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context';
import './NavBar.css';

export const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className='nav shadow'>
      {!user && <><Link to='/'>Mockr</Link> <Link to='/login'>Log in</Link></>}
      {user.role === 0  && <>
        <Link to='/dashboard'>Mockr</Link>
        <Link to='/student-interviews'>Interviews</Link> 
        <Link to='/student-questions'>Questions</Link>
        <Link to='/' onClick={() => setUser('')}>Log out</Link></>
      }
      {user.role === 1 && <>
        <Link to='/dashboard'>Mockr</Link>
        <Link to='/select-student'>Interview a student</Link>
        {/* <Link to='/student-interviews'>Interviews</Link>
        <Link to='/student-questions'>Questions</Link> */}
        <Link to='/' onClick={() => setUser('')}>Log out</Link></>
      }
      {user.role === 2 && <>
        <Link to='/dashboard'>Mockr</Link>
        <Link to='/students'>View all students</Link>
        <Link to='/all-questions'>View all questions</Link>
        <Link to='/' onClick={() => setUser('')}>Log out</Link></>
      }
    </nav>
  )
}

export default NavBar;

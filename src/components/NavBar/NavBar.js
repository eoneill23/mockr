import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../../Context';

export const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className='nav'>
      {!user && <><NavLink to='/'>Mockr</NavLink> <NavLink to='/login'>Log In</NavLink></>}
      {user.role === 0  && <>
        <NavLink to='/dashboard' className='mockr'>#Mockr</NavLink>
        <NavLink to='/student-interviews'>Interviews</NavLink>
        <NavLink to='/student-questions'>Questions</NavLink>
      </>
      }
      {user.role === 1 && <>
        <NavLink to='/dashboard'>Mockr</NavLink>
        <NavLink to='/select-student'>Start Interview</NavLink>
        {/* <Link to='/student-interviews'>Interviews</Link>
        <Link to='/student-questions'>Questions</Link> */}
      </>
      }
      {user.role === 2 && <>
        <NavLink to='/dashboard'>Mockr</NavLink>
        <NavLink to='/students'>All Students</NavLink>
        <NavLink to='/all-questions'>All Questions</NavLink>
      </>
      }
      {user && <Link to='/' onClick={() => {setUser(''); sessionStorage.clear();}}>Log Out</Link>}
    </nav>
  )
}

export default NavBar;

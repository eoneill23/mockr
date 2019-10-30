import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context';

export const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className='nav shadow'>
      {!user && <><Link to='/'>Mockr</Link> <Link to='/login'>Log In</Link></>}
      {user.role === 0  && <>
        <Link to='/dashboard'>Mockr</Link>
        <Link to='/student-interviews'>Interviews</Link>
        <Link to='/student-questions'>Questions</Link>
      </>
      }
      {user.role === 1 && <>
        <Link to='/dashboard'>Mockr</Link>
        <Link to='/select-student'>Start Interview</Link>
        {/* <Link to='/student-interviews'>Interviews</Link>
        <Link to='/student-questions'>Questions</Link> */}
      </>
      }
      {user.role === 2 && <>
        <Link to='/dashboard'>Mockr</Link>
        <Link to='/students'>All Students</Link>
        <Link to='/all-questions'>All Questions</Link>
      </>
      }
      {user && <Link to='/' onClick={() => {setUser(''); sessionStorage.clear();}}>Log Out</Link>}
    </nav>
  )
}

export default NavBar;

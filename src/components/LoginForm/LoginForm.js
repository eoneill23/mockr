import React, { useState, useContext } from 'react';
import { UserContext } from '../../Context';
import { LOGIN } from '../../util/apiCalls';
import { useLazyQuery } from '@apollo/react-hooks';


export const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const [loginUser, { loading, error, data }] = useLazyQuery(LOGIN);
  if (loading) return <p>Loading...</p>;
  if(data) {
    console.log(data.login)
    setUser(data.login);
    sessionStorage.setItem('userId', data.login.id);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser( { variables: { email: emailInput, password: passwordInput } });
    setEmailInput('');
    setPasswordInput('');
  }

  return (
    <div className='main-container'>
      <div className='side-margins'>
        {error && <p>There was an issue with your email or password.</p>}
        <form className='login-form box-fix'>
          <h3>Email:</h3>
          <input
            type='text'
            name='emailInput'
            className='login-input'
            value={emailInput}
            onChange={e => setEmailInput(e.target.value)}
          >
          </input>
          <h3>Password:</h3>
          <input
            type='password'
            name='passwordInput'
            className='login-input'
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
          >
          </input>
          <button className='login-submit' onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;

import React, { useState, useContext } from 'react';
import { UserContext } from '../../UserContext'
import { login } from '../../util/apiCalls';
import './LoginForm.css';

export const LoginForm = () => {
  const { user, setUser } = useContext(UserContext)
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login();
    setUser(user)
    setEmailInput('');
    setPasswordInput('');
  }

  return (
    <section className='login-form-container'>
      <form className='login-form'>
        <input
          type='text'
          name='emailInput'
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
          placeholder='Email'
        >
        </input>
        <input
          type='password'
          name='passwordInput'
          value={passwordInput}
          onChange={e => setPasswordInput(e.target.value)}
          placeholder='Password'
        >
        </input>
        <button
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default LoginForm;
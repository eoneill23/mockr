import React, { useState } from 'react';
import './LoginForm.css';

export const LoginForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
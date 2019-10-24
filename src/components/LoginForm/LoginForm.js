import React, { useState, useContext } from 'react';
import { InterviewsContext, UserContext } from '../../Context';
import { login, getInterviews } from '../../util/apiCalls';
import './LoginForm.css';

export const LoginForm = () => {
  const { setInterviews } = useContext(InterviewsContext);
  const { setUser } = useContext(UserContext);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login();
    setUser(user);
    const interviews = await getInterviews();
    setInterviews(interviews);
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
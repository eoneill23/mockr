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
    sessionStorage.setItem('user', JSON.stringify(data.login));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser( { variables: { email: emailInput, password: passwordInput } });
    setEmailInput('');
    setPasswordInput('');
  }

  return (
    <section className='login-form-container'>
      {error && <p>There was an issue with your email or password.</p>}
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
        <div className='rb-container'>
          Role:
          <input name='role' type='radio' />Admin
          <input name='role' type='radio' />Interviewer 1
          <input name='role' type='radio' />Interviewer 2
          <input name='role' type='radio' />Student 1
          <input name='role' type='radio' />Student 2
        </div>
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

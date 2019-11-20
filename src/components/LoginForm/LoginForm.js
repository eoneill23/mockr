import React, { useState, useContext } from 'react';
import { UserContext } from '../../Context';
import { LOGIN } from '../../util/apiCalls';
import { useLazyQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import GHlogo from '../../images/gh-logo.svg';

export const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const uri = 'https://thawing-wave-76846.herokuapp.com';

  const [loginUser, { loading, error, data }] = useLazyQuery(LOGIN);
  if (loading) return <p>Loading...</p>;
  if(data) {
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
    <div className="main-container">
      <form className="login-form box-fix">
        <h3>Email:</h3>
        <input
          type="text"
          name="emailInput"
          className="login-input"
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
        ></input>
        <h3>Password:</h3>
        <input
          type="password"
          name="passwordInput"
          className="login-input"
          value={passwordInput}
          onChange={e => setPasswordInput(e.target.value)}
        ></input>
        <button className="login-submit" onClick={e => handleSubmit(e)}>
          Submit
        </button>
        <p className="signup-link">
          New to Mockr? Sign up <Link to="/signup">here.</Link>
        </p>
        <p className='white-p'>Or</p>
        <a href={uri + "/oauth/github"} className="login-submit gh-submit">
          Login with GitHub
          <img src={GHlogo} alt="GitHub octocat logo" className='gh-logo'/>
        </a>
        {error && (
          <p className="login-error">
            There was an issue with your email or password. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginForm;

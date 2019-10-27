import React, { useState, useContext } from 'react';
import { InterviewsContext, UserContext, QuestionsContext } from '../../Context';
import { login, getInterviews, getQuestions, userQuery } from '../../util/apiCalls';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';
import './LoginForm.css';

export const LoginForm = () => {
  const { setQuestions } = useContext(QuestionsContext)
  const { setInterviews } = useContext(InterviewsContext);
  const { setUser } = useContext(UserContext);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // const QUERY = userQuery;
  // const [getUser, { loading, error, data }] = useLazyQuery(QUERY);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error...</p>;
  // if(data) {
  //   setUser(data.user);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login();
    setUser(user);
    const interviews = await getInterviews();
    setInterviews(interviews);
    const questions = await getQuestions();
    setQuestions(questions);
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
import React from 'react';
import './HomePage.css';

export const HomePage = () => {
  return (
    <section className='welcome-info'>
      <p>
        Welcome to Mockr! Mockr is an app that facilitates mock interviews between interviewers and interviewees. Its intuitive design allows an interviewer to ask questions commonly asked in an interview and rate the interviewee's response on a scale from 1-5.
      </p>
      <p>
        It also allows interviewers to email interviewees with their notes from the interview to provide a record of their feedback.
      </p>
      <p>
        Click log in at the top right corner of the page to log in an begin the mock interview process!
      </p>
    </section>
  )
}

export default HomePage;

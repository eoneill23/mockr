import React, { useContext } from 'react';
import { InterviewsContext } from '../../InterviewsContext';
import Interview from '../Interview/Interview';
import './InterviewContainer.css';

export const InterviewContainer = () => {
  const { interviews } = useContext(InterviewsContext);
  const interviewList = interviews.map(interview => {
    return <Interview key={interview.id} summary={interview.summary}/>
  });

  return (
    <section className='interview-container'>
      {interviewList}
    </section>
  )
}

export default InterviewContainer;
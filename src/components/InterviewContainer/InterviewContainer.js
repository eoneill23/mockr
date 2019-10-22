import React, { useContext } from 'react';
import { InterviewsContext } from '../../InterviewsContext';
import Interview from '../Interview';

export const InterviewContainer = () => {
  const { interviews } = useContext(InterviewsContext);
  const interviewList = interviews.map(interview => {
    return <Interview props={{...interview}}/>
  });

  return (
    <div>Hello</div>
  )
}

export default InterviewContainer;
import React, { useContext, useState } from 'react';
import { InterviewsContext } from '../../InterviewsContext';
import InterviewModal from '../InterviewModal/InterviewModal';
import Interview from '../Interview/Interview';
import './InterviewContainer.css';

export const InterviewContainer = () => {
  const { interviews } = useContext(InterviewsContext);
  const [ collapsed, collapseModal ] = useState(true);
  const [ identifiedInterviewId, identifyInterview ] = useState(null);

  const interviewList = interviews.map(interview => {
    return <Interview key={interview.id} summary={interview.summary} id={interview.id} collapseModal={collapseModal} identifyInterview={identifyInterview} collapsed={collapsed}/>
  });
  let foundInterview;

  if (identifiedInterviewId) {
    foundInterview = interviews.find(interview => interview.id === identifiedInterviewId)
  }

  if(collapsed) {
    return (
      <section className='interview-container'>
        <section className='interviews-container'>
          {interviewList}
        </section>
        <section className='interview-modal-container'>
          INTERVIEW MODAL
        </section>
      </section>
    )
  } else {
    return (
      <section className='interview-container'>
      <section className='interviews-container'>
        {interviewList}
      </section>
      <section className='interview-modal-container'>
        <InterviewModal id={foundInterview.id} summary={foundInterview.summary}/>
      </section>
    </section>
    )
  }

}

export default InterviewContainer;
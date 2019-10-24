import React, { useContext, useState } from 'react';
import { InterviewsContext } from '../../Context';
import StudentInterviewModal from '../StudentInterviewModal/StudentInterviewModal';
import StudentInterview from '../StudentInterview/StudentInterview';
import './StudentInterviewContainer.css';

export const StudentInterviewContainer = () => {
  const { interviews } = useContext(InterviewsContext);
  const [ collapsed, collapseModal ] = useState(true);
  const [ identifiedInterviewId, identifyInterview ] = useState(null);

  const interviewList = interviews.map(interview => {
    return <StudentInterview key={interview.id} summary={interview.summary} id={interview.id} collapseModal={collapseModal} identifyInterview={identifyInterview} collapsed={collapsed}/>
  });
  let foundInterview;

  if (identifiedInterviewId) {
    foundInterview = interviews.find(interview => interview.id === identifiedInterviewId)
  }

  if(collapsed) {
    return (
      <section className='student-interview-container'>
        <section className='student-interviews-container'>
          {interviewList}
        </section>
        <section className='student-interview-modal-container'>
          INTERVIEW MODAL
        </section>
      </section>
    )
  } else {
    return (
      <section className='student-interview-container'>
      <section className='student-interviews-container'>
        {interviewList}
      </section>
      <section className='student-interview-modal-container'>
        <StudentInterviewModal id={foundInterview.id} summary={foundInterview.summary}/>
      </section>
    </section>
    )
  }

}

export default StudentInterviewContainer;

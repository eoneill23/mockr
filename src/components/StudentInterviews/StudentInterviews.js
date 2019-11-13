import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context';
import StudentInterview from '../StudentInterview/StudentInterview';
import StudentInterviewModal from '../StudentInterviewModal/StudentInterviewModal';

export const StudentInterviewContainer = () => {
  const { user } = useContext(UserContext)
  const { interviews } = user;
  const [identifiedInterviewId, identifyInterview] = useState(null);

  const interviewList = interviews.map(interview => {
    return <StudentInterview key={interview.id} interview={interview} id={interview.id} identifyInterview={identifyInterview}/>
  });
  let foundInterview;

  if (identifiedInterviewId) {
    foundInterview = interviews.find(interview => interview.id === identifiedInterviewId)
  }
  
  return (
    <section className='main-container'>
      <section className='student-interview-list'>
        <h3 className='interview-lable'>Your interviews:</h3>
        {interviewList}
      </section>
      <section className='student-interview-modal'>
        {!identifiedInterviewId && <h2 className='interview-prompt'>Click on a specific interview to the left to see your scores.</h2>}
        {identifiedInterviewId && <StudentInterviewModal interview={{...foundInterview}}/>}
      </section>
    </section>
  );
}

export default StudentInterviewContainer;

import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context';
import StudentInterviewModal from '../StudentInterviewModal/StudentInterviewModal';
import StudentInterview from '../StudentInterview/StudentInterview';


export const StudentInterviewContainer = () => {
  const { user } = useContext(UserContext)
  const { interviews } = user;
  const [ cur, setCur ] = useState(0);
  const [ identifiedInterviewId, identifyInterview ] = useState(null);

  const showDetails = id => {setCur(id);}

  const interviewList = interviews.map(interview => {
    return <StudentInterview key={interview.id} summary={interview.summary} id={interview.id} showDetails={showDetails} detailed={(cur === interview.id)}/>
  });
  let foundInterview;

  if (identifiedInterviewId) {
    foundInterview = interviews.find(interview => interview.id === identifiedInterviewId)
  }

  return (
    <div className='main-container'>
      <div className='side-margins'>
        {interviewList}
      </div>
    </div>
  );
}

export default StudentInterviewContainer;

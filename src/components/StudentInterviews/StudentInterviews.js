import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context';
import StudentInterview from '../StudentInterview/StudentInterview';


export const StudentInterviewContainer = () => {
  const { user } = useContext(UserContext)
  const { interviews } = user;
  const [ cur, setCur ] = useState(0);

  const showDetails = id => {setCur(id);}

  const interviewList = interviews.map(interview => {
    return <StudentInterview key={interview.id} interview={interview} id={interview.id} showDetails={showDetails} detailed={(cur === interview.id)}/>
  });
  
  return (
    <div className='main-container'>
      <div className='side-margins'>
        <h3>Click on a specific Interview to see your scores</h3>
        {interviewList}
      </div>
    </div>
  );
}

export default StudentInterviewContainer;

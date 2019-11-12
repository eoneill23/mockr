import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context';
import StudentInterview from '../StudentInterview/StudentInterview';


export const StudentInterviewContainer = () => {
  const { user } = useContext(UserContext)
  const { interviews } = user;
  const [ collapsed, collapseModal ] = useState(true);

  const interviewList = interviews.map(interview => {
    return <StudentInterview key={interview.id} interview={interview} id={interview.id} collapseModal={collapseModal} collapsed={collapsed}/>
  });
  
  return (
    <section className='main-container'>
      <section className='student-interview-list'>
        <h3>Click on a specific Interview to see your scores</h3>
        {interviewList}
      </section>
      <section className='student-interview-modal'>
        {!collapsed && <p>Hello</p>}
      </section>
    </section>
  );
}

export default StudentInterviewContainer;

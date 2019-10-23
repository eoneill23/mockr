import React from 'react';
import './StudentInterview.css';

export const StudentInterview = ({ summary, id, collapseModal, identifyInterview, collapsed }) => {

  return (
    <section className='student-interview'>
      <p>{summary}</p>
      <button
        onClick={() => {collapseModal(!collapsed); identifyInterview(id)}}
      >Expand</button>
    </section>
  )
}

export default StudentInterview;

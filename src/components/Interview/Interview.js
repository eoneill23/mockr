import React from 'react';
import './Interview.css';

export const Interview = ({ summary, id, collapseModal, identifyInterview, collapsed }) => {

  return (
    <section className='interview'>
      <p>{summary}</p>
      <button
        onClick={() => {collapseModal(!collapsed); identifyInterview(id)}}
      >Expand</button>
    </section>
  )
}

export default Interview;
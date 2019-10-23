import React from 'react';
import './Interview.css';

export const Interview = ({ summary, id, collapseModal, identifyInterview, collapsed }) => {
  let buttonText = collapsed ? 'Expand' : 'Collapse'

  return (
    <section className='interview'>
      <p>{summary}</p>
      <button
        onClick={() => {collapseModal(!collapsed); identifyInterview(id)}}
      >{buttonText}</button>
    </section>
  )
}

export default Interview;
import React from 'react';
import './Interview.css';

export const Interview = (summary) => {
  return (
    <section className='interview'>
      <p>{summary.summary}</p>
    </section>
  )
}

export default Interview;
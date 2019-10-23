import React from 'react';
import './InterviewEnd.css';

export const InterviewEnd = props => {
  return (
    <div className='end-container shadow'>
      <div></div>

      <form id='interview-response'>
        <h3 id='header-final-remarks'>Final Remarks:</h3>
        <textarea name='remarks' form='interview-response' className='box-fix interview-remarks'></textarea>

        <input type='submit' className='interview-submit' value='✓'/>
      </form>
    </div>
  );
}

export default InterviewEnd;

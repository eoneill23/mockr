import React from 'react';
import './InterviewEnd.css';

export const InterviewEnd = props => {
  const isFocused = () => {
    if (props.focused) return '';
    return ' end-container-pre';
  }

  return (
    <div className={'end-container shadow' + isFocused()}>
      <div></div>

      <div id='interview-response'>
        <h3 id='header-final-remarks'>Final Remarks:</h3>
        <textarea name='remarks' form='interview-response' className='box-fix interview-remarks' onChange={event => props.fs.note('final', event.target.value)}></textarea>
      </div>
      <form onChange={event => props.fs.score('final', event.target.value)}>
        <input type='radio' name='score' value='1'/>Unsatisfactory<br/>
        <input type='radio' name='score' value='2'/>Needs Work<br/>
        <input type='radio' name='score' value='3'/>Good<br/>
        <input type='radio' name='score' value='4'/>Exceptional<br/>

        <input type='submit' className='interview-submit' value='✓'/>
      </form>
    </div>
  );
}

export default InterviewEnd;

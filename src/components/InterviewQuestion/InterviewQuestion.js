import React from 'react';
import PropTypes from 'prop-types';

export const Question = props => {
  const whereAmI = cur => {
    let pos = parseInt(props.pos);
    if (pos < cur) {
      return 'interview-card-finished';
    } else if (pos === cur) {
      return 'interview-card-focused';
    } else {
      if (pos === (cur + 1)) {
        return 'interview-card-first';
      } else if (pos === (cur + 2)) {
        return 'interview-card-second';
      } else if (pos === (cur + 3)) {
        return 'interview-card-third';
      } else {
        return 'interview-card-hidden';
      }
    }
  }

  const skipBtnScored = () => {
    if (props.scored) return ' interview-card-skip-scored shadow';
    return '';
  }

  return (
    <div className={'interview-question-card shadow ' + whereAmI(props.cur)}>
      <h1 className='interview-card-question'>Q: {props.question}</h1>
      <h1 className='interview-card-position'>{props.pos}</h1>

      <h3 className='header-notes' id='notes-h3'>Notes:</h3>
      <textarea name='response' form={'interview-card-response-' + props.pos} className='box-fix interview-card-response' onChange={event => props.fs.note(props.id, event.target.value)}></textarea>

      <form id={'score-form-' + props.id} className='interview-card-score' onChange={event => props.fs.score(props.id, event.target.value)}>
        <label><input type='radio' name='score' value='1'/>Unsatisfactory<br/></label>
        <label><input type='radio' name='score' value='2'/>Needs Work<br/></label>
        <label><input type='radio' name='score' value='3'/>Good<br/></label>
        <label><input type='radio' name='score' value='4'/>Exceptional<br/></label>
      </form>
      <button className='interview-card-next-btn shadow' onClick={event => props.fs.next(props.id)}>
        Next
        {/* <div className='question-btn-guide-next'>Next</div> */}
      </button>
      <button className={'interview-card-skip-btn' + skipBtnScored()} onClick={event => props.fs.skip(props.id)}>
         Skip
        {/* <div className='question-btn-guide-skip'>Skip</div> */}
      </button>

    </div>
  );
}

export default Question;

Question.propTypes = {
  student: PropTypes.object
}
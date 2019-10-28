import React from 'react';
import './Question.css';

export const Question = props => {
  const whereAmI = cur => {
    let pos = parseInt(props.pos);
    if (pos < cur) {
      return 'card-finished';
    } else if (pos === cur) {
      return 'card-focused';
    } else {
      if (pos === (cur + 1)) {
        return 'card-first';
      } else if (pos === (cur + 2)) {
        return 'card-second';
      } else if (pos === (cur + 3)) {
        return 'card-third';
      } else {
        return 'card-hidden';
      }
    }
  }

  const skipBtnScored = () => {
    if (props.scored) return ' card-skip-scored shadow';
    return '';
  }

  return (
    <div className={'card shadow ' + whereAmI(props.cur)}>
      <h1 className='card-question'>Q: {props.question}</h1>
      <h1 className='card-position'>{props.pos}</h1>

      <h3 className='header-notes'>Notes:</h3>
      <textarea name='response' form={'card-response-' + props.pos} className='box-fix card-response' onChange={event => props.fs.note(props.id, event.target.value)}></textarea>

      <form id={'score-form-' + props.id} className='card-score' onChange={event => props.fs.score(props.id, event.target.value)}>
        <input type='radio' name='score' value='1'/>Unsatisfactory<br/>
        <input type='radio' name='score' value='2'/>Needs Work<br/>
        <input type='radio' name='score' value='3'/>Good<br/>
        <input type='radio' name='score' value='4'/>Exceptional<br/>
      </form>
      <button className='card-next-btn shadow' onClick={event => props.fs.next(props.id)}>🠚</button>
      <button className={'card-skip-btn' + skipBtnScored()} onClick={event => props.fs.skip(props.id)}>↷</button>
    </div>
  );
}

export default Question;

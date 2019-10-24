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

  return (
    <div className={'card shadow ' + whereAmI(props.cur)}>
      <h1 className='card-question'>Q: {props.question}</h1>
      <h1 className='card-position'>{props.pos}</h1>

      <form id={'card-response-' + props.id}>
        <h3 className='header-notes'>Notes:</h3>
        <textarea name='response' form={'card-response-' + props.pos} className='box-fix card-response' onChange={event => props.fs.note(props.id, event.target.value)}></textarea>
      </form>
      <button className='card-next-btn shadow' onClick={props.fs.next} value='🠚'/>
    </div>
  );
}

export default Question;

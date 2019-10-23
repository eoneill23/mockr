import React from 'react';
import './Question.css';

export const Question = props => {
  console.log('props', props)
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
    <div className={'card shadow ' + whereAmI(props.index)}>
      <h1 className='card-question'>Q: {props.question}</h1>
      <h1 className='card-position'>{props.pos}</h1>

      <form id={'card-response-' + props.pos}>
        <textarea name='response' form={'card-response-' + props.pos} className='box-fix card-response'></textarea>
      </form>
    </div>
  );
}

export default Question;

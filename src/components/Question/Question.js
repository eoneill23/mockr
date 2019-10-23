import React from 'react';
import './Question.css';

export const Question = props => {
  console.log('props', props)
  const whereAmI = index => {
    let pos = parseInt(props.pos);
    if (pos < index) {
      return 'card-finished';
    } else if (pos === index) {
      return 'card-focused';
    } else {
      if (pos === (index + 1)) {
        return 'card-first';
      } else if (pos === (index + 2)) {
        return 'card-second';
      } else if (pos === (index + 3)) {
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
    </div>
  );
}

export default Question;

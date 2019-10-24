import React, {useState} from 'react';
import Card from '../Question/Question';
import './QuestionDeck.css';
import {Swipeable} from 'react-swipeable';

export const QuestionDeck = props => {
  const [cur, setCur] = useState(1);

  const populateCards = () => {
    return props.data.questions.map(({id, body}, index) => {
      return <Card cur={cur} id={id} key={id} pos={index + 1} question={body} fs={{...props.fs, next: nextCard}}/>
    });
  }

  const nextCard = () => {
    setCur(cur + 1);
  }

  const prevCard = () => {
    let nextCur = cur - 1;
    if (nextCur < 1) {
      setCur(1);
    } else {
      setCur(nextCur);
    }
  }

  const resetCards = () => {
    setCur(1);
  }

  const isFocused = () => {
    if (props.focused) return ''
    return ' question-container-post';
  }

  return (
    <div className={'question-container' + isFocused()}>
      <Swipeable onSwipedLeft={event => nextCard()} onSwipedRight={event => prevCard()} trackMouse={true} preventDefaultTouchmoveEvent={true}>
        {populateCards()}
      </Swipeable>
      <button className='back-btn shadow' onClick={prevCard}>🠘</button>
    </div>
  );
}

export default QuestionDeck;

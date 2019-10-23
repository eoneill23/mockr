import React, {useState} from 'react';
import Card from '../Question/Question';
import './QuestionDeck.css';

import {Swipeable} from 'react-swipeable';

export const QuestionDeck = props => {
  const [cur, setCur] = useState(1);

  const populateCards = () => {
    return props.data.questions.map(({id, body}, index) => {
      return <Card cur={cur} key={id} pos={index + 1} question={body} fNext={nextCard}/>
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
    setCur(0);
  }

  const isFocused = () => {
    if (props.focused) return ''
    return ' question-container-post';
  }

  return (
    <div className={'question-container' + isFocused()}>
      <Swipeable onSwipedLeft={event => nextCard()} trackMouse={true} preventDefaultTouchmoveEvent={true}>
        {populateCards()}
      </Swipeable>
      <button style={{ position: 'fixed', top: '4rem' }} onClick={nextCard}>Next</button>
      <button style={{ position: 'fixed', top: '6rem' }} onClick={prevCard}>Back</button>
      <button style={{ position: 'fixed', top: '8rem' }} onClick={resetCards}>Reset</button>
    </div>
  );
}

export default QuestionDeck;

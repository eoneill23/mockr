import React, { useState, useContext } from 'react';
import { UserContext } from '../../UserContext';
import Card from '../Question/Question';
import StudentQuestionCard from '../StudentQuestionCard/StudentQuestionCard';
import './QuestionDeck.css';

import {Swipeable} from 'react-swipeable';

export const QuestionDeck = props => {
  const [cur, setCur] = useState(0);
  const { user } = useContext(UserContext);

  const populateCards = () => {
    if(user.role === 0) {
      return props.data.questions.map(({id, body}) => {
        return <StudentQuestionCard body={body} />
      });
    } else if (user.role === 1) {
      return props.data.questions.map(({id, body}, index) => {
        return <Card cur={cur} key={id} pos={index - 1} question={body} fNext={nextCard}/>
      });
    }
  }

  const nextCard = () => {
    setCur(cur + 1);
  }

  const prevCard = () => {
    let nextCur = cur - 1;
    if (nextCur < 0) {
      setCur(0);
    } else {
      setCur(nextCur);
    }
  }

  const resetCards = () => {
    setCur(0);
  }

  if(user.role === 0) {
    return (
      <section className='student-questions-container'>
        {populateCards()}
      </section>
    )
  } else if (user.role === 1) {
    return (
      <div>
        <Swipeable onSwipedLeft={event => nextCard()} trackMouse={true} preventDefaultTouchmoveEvent={true}>
          {populateCards()}
        </Swipeable>
        <button style={{ position: 'fixed', top: '4rem' }} onClick={nextCard}>Next</button>
        <button style={{ position: 'fixed', top: '6rem' }} onClick={prevCard}>Back</button>
        <button style={{ position: 'fixed', top: '8rem' }} onClick={resetCards}>Reset</button>
      </div>
    );
  }
}

export default QuestionDeck;

import React, { useState, useContext } from 'react';
import { UserContext } from '../../UserContext';
import Card from '../Question/Question';
import StudentQuestionCard from '../StudentQuestionCard/StudentQuestionCard';
import './QuestionDeck.css';

import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

import {Swipeable} from 'react-swipeable';

export const QuestionDeck = props => {
  const [index, setIndex] = useState(0);
  const { user } = useContext(UserContext);
  let questions;

  const QUERY = gql`
    query {
      questions {
        id
        body
        active
      }
    }
  `;

  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  if(user.role === 0) {
    questions = data.questions.map(question => {
      return <StudentQuestionCard body={question.body} />
    });
  }

  if(user.role === 1) {
    let i = -1;
    questions = data.questions.map(({ id, body }) => {
      i++;
      console.log('i is here', i)
      return <Card index={index} key={id} pos={i} question={body} />
    });
  }

  const nextCard = () => {
    setIndex(index + 1);
  }

  const prevCard = () => {
    let nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(0);
    } else {
      setIndex(nextIndex);
    }
  }

  const resetCards = () => {
    setIndex(0);
  }

  if(user.role === 0) {
    return (
      <section className='student-questions-container'>
        {questions}
      </section>
    )
  } else if (user.role === 1) {
    return (
      <div>
        <Swipeable onSwipedLeft={event => nextCard()} trackMouse={true} preventDefaultTouchmoveEvent={true}>
          {questions}
        </Swipeable>
        <button style={{ position: 'fixed', top: '4rem' }} onClick={nextCard}>Next</button>
        <button style={{ position: 'fixed', top: '6rem' }} onClick={prevCard}>Back</button>
        <button style={{ position: 'fixed', top: '8rem' }} onClick={resetCards}>Reset</button>
      </div>
    );
  }
}

export default QuestionDeck;

import React, {useState} from 'react';
import Card from '../Question/Question';
import './QuestionDeck.css';

import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

const PopulateCards = props => {
  const QUERY = gql`
    query {
      questions {
        id
        body
        active
      }
    }
  `;

  const {loading, error, data} = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  let i = -1;
  return data.questions.map(({id, body}) => {
    i++;
    return <Card index={props.index} key={id} pos={i} question={body}/>
  });
}

export const QuestionDeck = props => {
  const [index, setIndex] = useState(0);

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

  return (
    <div>
      <PopulateCards index={index}/>
      <button style={{position: 'fixed', top: '4rem'}} onClick={nextCard}>Next</button>
      <button style={{position: 'fixed', top: '6rem'}} onClick={prevCard}>Back</button>
      <button style={{position: 'fixed', top: '8rem'}} onClick={resetCards}>Reset</button>
    </div>
  );
}

export default QuestionDeck;

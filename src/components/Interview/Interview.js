import React from 'react';
import QuestionDeck from '../QuestionDeck/QuestionDeck';
import InterviewEnd from '../InterviewEnd/InterviewEnd';
import './Interview.css';

import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

export const Interview = props => {
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

  return (
    <QuestionDeck data={data}/>
  );
}

export default Interview;

import React, {useState, useContext} from 'react';
import QuestionDeck from '../QuestionDeck/QuestionDeck';
import InterviewEnd from '../InterviewEnd/InterviewEnd';
import './Interview.css';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import { UserContext } from '../../../Context';

export const Interview = props => {
  const [focus, setFocus] = useState(0);
  const [notes] = useState({});

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

  const updateNote = (id, body) => {
    if (notes[id]) {
      notes[id].body = body;
    } else {
      notes[id] = {body: body, score: 0};
    }
  }

  const updateScore = (id, score) => {
    if (notes[id]) {
      notes[id].score = score;
    } else {
      notes[id] = {body: '', score: score};
    }
  }

  const endInterview = () => {
    console.log(notes);
    setFocus(1);
  }

  const neverMind = () => {
    setFocus(0);
  }

  return (
    <div>
      <QuestionDeck data={data} fs={{note: updateNote, score: updateScore}} focused={focus === 0}/>
      <InterviewEnd focused={focus === 1}/>
      <button style={{position: 'fixed', top: '10rem'}} onClick={endInterview}>End</button>
      <button style={{position: 'fixed', top: '12rem'}} onClick={neverMind}>Nope</button>
    </div>
  );
}

export default Interview;

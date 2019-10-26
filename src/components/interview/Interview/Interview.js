import React, {useState, useContext} from 'react';
import {UserContext} from '../../../Context';
import {Swipeable} from 'react-swipeable';
import InterviewEnd from '../InterviewEnd/InterviewEnd';
import Question from '../Question/Question';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {ALL_QUESTIONS, CREATE_INTERVIEW, ADD_NOTE, FINALISE_INTERVIEW} from '../../../util/apiCalls';
import './Interview.css';

export const Interview = props => {
  const {user} = useContext(UserContext);
  const [focus, setFocus] = useState(0);
  const [cur, setCur] = useState(1);
  const [notes] = useState({});

  const [createInterview, {interviewResponse}] = useMutation(CREATE_INTERVIEW);
  // const {interviewResponse} = createInterview({variables: {studentId: user.currentStudent.id, interviewerId: user.id}});
  createInterview({variables: {studentId: 9000, interviewerId: 9004}});
  console.log(interviewResponse);

  // const interviewData = {interviewId: interviewResponse.id, studentId: user.currentStudent.id, interviewerId: user.id};
  const interviewData = {interviewId: interviewResponse.id, studentId: 9000, interviewerId: user.id};

  const {loading, error, data} = useQuery(ALL_QUESTIONS);
  const [addNote] = useMutation(ADD_NOTE);
  const [finaliseInterview] = useMutation(FINALISE_INTERVIEW);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const populateCards = () => {
    return data.questions.map(({id, body}, index) => {
      return <Question cur={cur} id={id} key={id} pos={index + 1} question={body} fs={{note: updateNote, score: updateScore, next: nextCard}}/>
    });
  }

  const nextCard = id => {
    if (notes[id]) {
      addNote({variables: {...notes[id], ...interviewData, questionId: id}});
    } else {
      addNote({variables: {body: '', score: 0, ...interviewData, questionId: id}});
    }
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

  const updateNote = (id, body) => {
    if (notes[id]) {
      notes[id] = {...notes[id], body: body};
    } else {
      notes[id] = {body: body, score: 0};
    }
  }

  const updateScore = (id, score) => {
    if (notes[id]) {
      notes[id] = {...notes[id], score: parseInt(score)};
    } else {
      notes[id] = {body: '', score: parseInt(score)};
    }
  }

  const skipQuestion = id => {
    notes[id] = {body: '', score: 0};
  }

  const endInterview = () => {
    // finaliseInterview({variables: {..}});
    setFocus(1);
  }

  const neverMind = () => {
    setFocus(0);
  }

  const isFocused = () => {
    if (focus === 0) return ''
    return ' question-container-post';
  }

  return (
    <div>
      <div className={'question-container' + isFocused()}>
        <Swipeable onSwipedLeft={event => nextCard()} onSwipedRight={event => prevCard()} trackMouse={true} preventDefaultTouchmoveEvent={true}>
          {populateCards()}
        </Swipeable>
        <div className='deck-btn-panel shadow'>
          <button className='back-btn' onClick={event => prevCard()}>🠘</button>
          <button className='end-btn' onClick={event => endInterview()}>End</button>
        </div>
      </div>
      <InterviewEnd fs={{note: updateNote, score: updateScore}} focused={focus === 1}/>
      <button style={{position: 'fixed', top: '4rem'}} onClick={neverMind}>Nope</button>
    </div>
  );
}

export default Interview;

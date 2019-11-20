import React, {useState, useContext} from 'react';
import {Redirect} from 'react-router';
import {UserContext} from '../../Context';
import {Swipeable} from 'react-swipeable';
import Carousel from 'react-items-carousel';
import InterviewQuestion from '../InterviewQuestion/InterviewQuestion';
import InterviewNote from '../InterviewNote/InterviewNote';
import {useMutation} from '@apollo/react-hooks';
import {ADD_NOTE, FINALISE_INTERVIEW} from '../../util/apiCalls';

export const Interview = () => {
  const {user, setUser} = useContext(UserContext);
  const [focus, setFocus] = useState(0);
  const [cur, setCur] = useState(1);
  const [carouselCur, setCarouselCur] = useState(0);
  const [notes] = useState({});
  const [ended, setEnded] = useState(false);
  const [push, setPush] = useState(false);
  const interviewData = {interviewId: user.currentInterview.id, studentId: user.currentInterview.student, interviewerId: user.id};
  const questions = user.currentInterview.questions

  const [addNote] = useMutation(ADD_NOTE);
  const [finaliseInterview] = useMutation(FINALISE_INTERVIEW);

  const populateCards = () => {
    return questions.map(({id, body}, index) => {
      let scored = false;
      if (notes[id]) {scored = notes[id].score >= 1};
      return <InterviewQuestion cur={cur} id={id} key={id} pos={index + 1} question={body} scored={scored} fs={{note: updateNote, score: updateScore, next: nextCard, skip: skipCard}}/>
    });
  }

  const populateNotes = () => {
    return questions.map(({id,body}, index) => {
      if (notes[id]) {
        return <InterviewNote key={index} id={id} question={body} note={notes[id]} fs={{note: updateNote, score: updateScore}}/>
      } else {
        return <InterviewNote key={index} id={id} question={body}/>
      }
    });
  }

  const nextCard = id => {
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
    setPush(!push);
  }

  const skipCard = id => {
    let form = document.getElementById('score-form-' + id);
    let btns = form.elements;
    for (let i = 0; i < btns.length; i++) {
      btns[i].checked = false;
    };
    notes[id] = {body: '', score: 0};
    setCur(cur + 1);
  }

  const endCard = () => {
    setFocus(1);
  }

  const endInterview = (event) => {
    const formData = new FormData(event.target);
    for (let id in notes) {
      addNote({variables: {...notes[id], ...interviewData, questionId: parseInt(id)}});
    }
    finaliseInterview({variables: {id: interviewData.interviewId, score: parseInt(formData.get('score')), body: formData.get('remarks')}})
      .then(fetch(`https://aqueous-crag-29295.herokuapp.com/interviews/${interviewData.interviewId}`));
    setEnded(true);
  }

  const isFocusedQuestions = () => {
    if (focus === 0) return ''
    return ' question-container-post';
  }

  const isFocusedEndCard = () => {
    if (focus === 1) return ''
    return ' end-container-pre'
  }

  if (ended) {
    setUser({...user, currentInterview: null})
    return <Redirect to='/dashboard'/>;
  } else {
    return (
      <div>
        <div>
          <div className={'question-container' + isFocusedQuestions()}>
            <Swipeable onSwipedLeft={event => nextCard()} onSwipedRight={event => prevCard()} preventDefaultTouchmoveEvent={true}>
              {populateCards()}
            </Swipeable>
            <div className='deck-btn-panel'>
              {/* <button className='back-btn' onClick={event => prevCard()}>🠘</button> */}
              <button className='end-btn' onClick={event => endCard()}>End</button>
            </div>
          </div>
        </div>
        <div className={'end-container shadow' + isFocusedEndCard()}>
          <div style={{margin: '1.5rem'}}>
            <Carousel requestToChangeActive={setCarouselCur} activeItemIndex={carouselCur}
              rightChevron={React.createElement('h1', {}, '>')} leftChevron={React.createElement('h1', {}, '<')} gutter={32}>
              {populateNotes()}
            </Carousel>
          </div>
          <h3 id='header-final-remarks'>Final Remarks:</h3>
          <textarea name='remarks' form='interview-response' className='box-fix interview-remarks'></textarea>
          <form id='interview-response' className='interview-score' onSubmit={event => {event.preventDefault(); endInterview(event)}}>
            <label><input type='radio' name='score' value='1'/>Unsatisfactory</label><br/>
            <label> <input type='radio' name='score' value='2'/>Needs Work</label><br/>
            <label><input type='radio' name='score' value='3'/>Good</label><br/>
            <label><input type='radio' name='score' value='4'/>Exceptional</label><br/>
            <input type='submit' className='interview-submit' value='✓'/>
          </form>
        </div>
      </div>
    );
  };
}

export default Interview;

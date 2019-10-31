import React, {useContext} from 'react';
import { UserContext } from '../../Context';
import { useMutation } from '@apollo/react-hooks';
import { ACTIVATE_QUESTION, DEACTIVATE_QUESTION } from '../../util/apiCalls';
import PropTypes from 'prop-types';

export const Question = ({ id, fs, details, showDetails, detailed }) => {
  let {body, notes, active} = details;
  const { user } = useContext(UserContext);
  const [activateQuestion] = useMutation(ACTIVATE_QUESTION);
  const [deactivateQuestion] = useMutation(DEACTIVATE_QUESTION);
  let activeBtn = active ? 'Deactivate' : 'Activate';

  const toggleQuestion = async (e) => {
    e.preventDefault();
    if(!active) {
      const response = await deactivateQuestion({ variables: { id: id, active: !active }});
      fs.toggleActive(response.data.activateQuestion.id);
    } else {
      const response = await activateQuestion({ variables: { id: id, active: !active } });
      fs.toggleActive(response.data.activateQuestion.id);
    }
  };

  const rubric = ['Skipped 🤡', 'Unsatisfactory 🥺', 'Needs Work 🤨', 'Good 😁', 'Exceptional 🥳'];
  let eachNote = [];
  if (user.role === 0) {
    eachNote = notes.filter(note => note.score).map(note => {
      return (
        <div className='each-note' key={note.noteId} className="note-summary">
          <p>Score: <br/>{rubric[note.score]} </p>
          <p>Summary: <br/>{note.summary} </p>
          <p>Interviewer: <br/>{note.interviewer} </p>
        </div>
      )
    });
  };

  const isDetailed = () => {if (detailed) {return ' shown'} else {return ''}}
  return (
    <section className={`question-card ${isDetailed()}`} onClick={e => showDetails(id)}>

      <h3>{body}</h3>
      {(user.role === 0) && <div className={'details' + isDetailed()}>
      <div className='note-container'>
        {eachNote}
      </div>
      </div>}
      {(user.role === 2) && <button onClick={(e) => toggleQuestion(e)}>{activeBtn}</button>}
    </section>
  )
}

export default Question;

Question.propTypes = {
  id: PropTypes.number,
  fs: PropTypes.object,
  details: PropTypes.object,
  showDetails: PropTypes.func,
  detailed: PropTypes.bool
}
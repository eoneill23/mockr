import React, {useContext} from 'react';
import { UserContext } from '../../Context';
import { useMutation } from '@apollo/react-hooks';
import { ACTIVATE_QUESTION, DEACTIVATE_QUESTION } from '../../util/apiCalls';

export const Question = ({ id, role, fs, details, showDetails, detailed }) => {
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
  }

  let rubric = ['Skipped', 'Unsatisfactory', 'Needs Work', 'Good', 'Exceptional']
  let eachNote = notes.map(note => {
    return (
      <div key={note.noteId}>
        <p>Score: {rubric[note.score]} </p>
        <p>Summary: {note.summary} </p>
        <p>Interviewer: {note.interviewer} </p>
      </div>
    )
  });

  const isDetailed = () => {if (detailed) {return ' shown'} else {return ''}}
  return (
    <section className='question-card' onClick={e => showDetails(id)}>
      <h3>{body}</h3>
      <div className={'details' + isDetailed()}>
        {eachNote}
      </div>
      {(user.role === 2) && <button onClick={(e) => toggleQuestion(e)}>{activeBtn}</button>}
    </section>
  )
}

export default Question;

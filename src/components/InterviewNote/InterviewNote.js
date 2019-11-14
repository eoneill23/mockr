import React from 'react';

export const Note = props => {
  if (props.note) {
    return (
      <div className='interview-note-card shadow'>
        <h1 className='interview-note-question'>Q: {props.question}</h1>

        <h3 className=''>Notes:</h3>
        <textarea name='response' form={'interview-note-response-' + props.id} className='interview-note-response' onChange={event => props.fs.note(props.id, event.target.value)} value={props.note.body}></textarea>

        <form id={'score-form-' + props.id} className='' onChange={event => props.fs.score(props.id, event.target.value)}>
          <label><input type='radio' name='score' value='1'/>Unsatisfactory<br/></label>
          <label><input type='radio' name='score' value='2'/>Needs Work<br/></label>
          <label><input type='radio' name='score' value='3'/>Good<br/></label>
          <label><input type='radio' name='score' value='4'/>Exceptional<br/></label>
        </form>
      </div>
    );
  } else {
    return (
      <div className={'interview-note-card shadow'}>
        <h1 className='interview-note-question'>Q: {props.question}</h1>

        <h3 className=''>Skippet</h3>
      </div>
    );

  }
}

export default Note;


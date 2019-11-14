import React from 'react';

export const Note = props => {
  const getChecked = val => {
    return val == props.note.score ? 'checked' : '';
  }

  if (props.note) {
    return (
      <div className="interview-note-card">
        <h1 className="interview-note-question">Q: {props.question}</h1>
        <h3 className="note-header">Edit notes:</h3>
        <div className="feedback-container">
          <textarea
            name="response"
            form={"interview-note-response-" + props.id}
            className="interview-note-response"
            onChange={event => props.fs.note(props.id, event.target.value)}
            defaultValue={props.note.body}
          ></textarea>
          <form
            id={"score-form-" + props.id}
            className=""
            onChange={event => props.fs.score(props.id, event.target.value)}
          >
            <label className="form-label">
              <input
                type="radio"
                name="score"
                value="1"
                checked={getChecked(1)}
              />
              Unsatisfactory
              <br />
            </label>
            <label className="form-label">
              <input
                type="radio"
                name="score"
                value="2"
                checked={getChecked(2)}
              />
              Needs Work
              <br />
            </label>
            <label className="form-label">
              <input
                type="radio"
                name="score"
                value="3"
                checked={getChecked(3)}
              />
              Good
              <br />
            </label>
            <label className="form-label">
              <input
                type="radio"
                name="score"
                value="4"
                checked={getChecked(4)}
              />
              Exceptional
              <br />
            </label>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className={'interview-note-card'}>
        <h1 className='interview-note-question'>Q: {props.question}</h1>

        <h3 className=''>Skipped</h3>
      </div>
    );

  }
}

export default Note;


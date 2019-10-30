import React from 'react';

export const StudentQuestionModal = ({ body, notes, collapseModal, collapsed }) => {
  let rubric = ['Skipped', 'Unsatisfactory', 'Needs Work', 'Good', 'Exceptional']
  let eachNote = notes.map(note => {
    return (
      <div key={note.noteId}>
        <p>Score: {rubric[note.score]} </p>
        <p>Summary: {note.summary} </p>
        <p>Interviewer: {note.interviewer} </p>
      </div>
    )
  })
  return (
    <section>
      <button
        onClick={() => collapseModal(!collapsed)}
      >
        Collapse
      </button>
      <p>{body}</p>
      {eachNote}
    </section>
  )
}

export default StudentQuestionModal;
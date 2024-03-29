import React from 'react';

export const StudentInterviewModal = ({ interview }) => {
  const rubric = ['Skipped 🤡', 'Unsatisfactory 🥺', 'Needs Work 🤨', 'Good 😁', 'Exceptional 🥳'];
  let eachNote = []
  eachNote = interview.notes.filter(note => note.score).map(note => {
    return (
      <div className='note-summary' key={note.id}>
        <p className='note-question'><span className='highlight'>Question:</span> <br />{note.question.body}</p>
        <p className='note-score'><span className='highlight'>Score:</span> <br />{rubric[note.score]} </p>
        <p className='note-notes'><span className='highlight'>Notes:</span> <br />{note.body} </p>
      </div>
    )
  });

  return (
    <section className='student-interview-modal-content'>
      <header className='interview-header'><span className='highlight'>Score: </span> {interview.score}<br /><span className='highlight'>Summary: </span>{interview.summary}</header>
      {eachNote}
    </section>
  )
}

export default StudentInterviewModal;
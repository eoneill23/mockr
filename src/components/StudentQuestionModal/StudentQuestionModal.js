import React from 'react';

export const StudentInterviewModal = ({ question }) => {
  const rubric = ['Skipped 🤡', 'Unsatisfactory 🥺', 'Needs Work 🤨', 'Good 😁', 'Exceptional 🥳'];
  let eachNote = []
  console.log(question.notes)
  eachNote = question.notes.filter(note => note.score).map(note => {
    return (
      <div className='note-summary' key={note.id}>
        <p className='note-score'><span className='highlight'>Score:</span> <br />{rubric[note.score]} </p>
        <p className='note-notes'><span className='highlight'>Notes:</span> <br />{note.summary} </p>
      </div>
    )
  });

  return (
    <section className='student-question-modal-content'>
      <header className='question-header'><span className='highlight'>Question:</span> {question.body}</header>
      {eachNote}
    </section>
  )
}

export default StudentInterviewModal;
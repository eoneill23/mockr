import React from 'react';

export const StudentInterview = ({ interview, id, showDetails, detailed }) => {
  const interviewer = interview.users.find(user => user.role !== 0)
  const isDetailed = detailed ? 'shown' : '';

  const rubric = ['Skipped 🤡', 'Unsatisfactory 🥺', 'Needs Work 🤨', 'Good 😁', 'Exceptional 🥳'];
  let eachNote = []
  eachNote = interview.notes.filter(note => note.score).map(note => {
    return (
      <div className='note-summary' key={note.noteId}>
        <p>Question: <br />{note.question.body}</p>
        <p>Score: <br />{rubric[note.score]} </p>
        <p>Summary: <br />{note.body} </p>
      </div>
    )
  });

  return (
    <section className={`interview-card ${isDetailed}`} onClick={e => showDetails(id)}>
      <h3>On {interview.createdAt.split('T')[0]} with {interviewer.firstName} {interviewer.lastName}</h3>
      <div className={`details ${isDetailed}`}>
        <p className='takeaways' >Score: {rubric[interview.score]} <br/> Takeaways: <br/> {interview.summary}</p><br/>
       <div className='note-container'>
        {eachNote}
       </div> 
      </div>
    </section>
  )
}

export default StudentInterview;

import React from 'react';
import PropTypes from 'prop-types';

export const StudentInterview = ({ interview, id, collapseModal, collapsed }) => {
  const interviewer = interview.users.find(user => user.role !== 0)

  const rubric = ['Skipped 🤡', 'Unsatisfactory 🥺', 'Needs Work 🤨', 'Good 😁', 'Exceptional 🥳'];
  let eachNote = []
  eachNote = interview.notes.filter(note => note.score).map(note => {
    return (
      <div className='note-summary' key={note.id}>
        <p>Question: <br />{note.question.body}</p>
        <p>Score: <br />{rubric[note.score]} </p>
        <p>Summary: <br />{note.body} </p>
      </div>
    )
  });

  return (
    <section className='interview-card' onClick={() => collapseModal(!collapsed)}>
      <h3>On {interview.createdAt.split('T')[0]} with {interviewer.firstName} {interviewer.lastName}</h3>
      <div className='details'>
        <p className='takeaways' >Score: {rubric[interview.score]} <br/> Takeaways: <br/> {interview.summary}</p><br/>
       <div className='note-container'>
        {eachNote}
       </div> 
      </div>
    </section>
  )
}

export default StudentInterview;

StudentInterview.propTypes = {
  interview: PropTypes.object,
  id: PropTypes.number,
  showDetails: PropTypes.func,
  detailed: PropTypes.bool
}
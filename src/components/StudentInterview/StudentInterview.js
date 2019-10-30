import React from 'react';
import PropTypes from 'prop-types';

export const StudentInterview = ({ interview, id, showDetails, detailed }) => {
  const interviewer = interview.users.find(user => user.role !== 0)
  const isDetailed = () => {if (detailed) {return ' shown'} else {return ''}}

  let rubric = ['Skipped', 'Unsatisfactory', 'Needs Work', 'Good', 'Exceptional']
  let eachNote = []
  eachNote = interview.notes.map(note => {
    return (
      <div key={note.noteId}>
        <p>Score: {rubric[note.score]} </p>
        <p>Summary: {note.summary} </p>
        <p>Interviewer: {note.interviewer} </p>
      </div>
    )
  });

  return (
    <section className='interview-card' onClick={e => showDetails(id)}>
      <h3>On {interview.createdAt.split('T')[0]} with {interviewer.firstName} {interviewer.lastName}</h3>
      <div className={'details' + isDetailed()}>
        {interview.summary}<br/><br/><br/>
        {eachNote}
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
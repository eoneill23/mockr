import React from 'react';
import PropTypes from 'prop-types';

export const StudentInterview = ({ interview, id, identifyInterview }) => {
  const interviewer = interview.users.find(user => user.role !== 0);
  
  return (
    <section className='interview-card' onClick={() => identifyInterview(id)}>
      <h3>On {interview.createdAt.split('T')[0]} with {interviewer.firstName} {interviewer.lastName}</h3>
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
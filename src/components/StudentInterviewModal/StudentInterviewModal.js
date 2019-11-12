import React from 'react';

export const StudentInterviewModal = ({ interview }) => {
  console.log('AHHHH', interview)
  return (
    <p>{interview.id}</p>
  )
}

export default StudentInterviewModal;
import React from 'react';

export const StudentQuestionCard = ({ question, id, collapseModal, identifyQuestion, collapsed }) => {  
  
  
  return (
    <section className='student-question'>
      <p>{question}</p>
      <button
        onClick={() => { collapseModal(!collapsed); identifyQuestion(id) }}
      >Expand</button>
    </section>
  )
}

export default StudentQuestionCard;
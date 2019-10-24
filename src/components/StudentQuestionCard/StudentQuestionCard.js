import React from 'react';

export const StudentQuestionCard = ({ body, notes, id, collapseModal, identifyQuestion, collapsed }) => {  

  return (
    <section className='student-question'>
      <p>{body}</p>
      <p>{notes}</p>
      <button
        onClick={() => { collapseModal(!collapsed); identifyQuestion(id) }}
      >Expand</button>
    </section>
  )
}

export default StudentQuestionCard;
import React from 'react';

export const StudentQuestionModal = ({ body, collapseModal, collapsed }) => {
  return (
    <section>
      <button
        onClick={() => collapseModal(!collapsed)}
      >
        Collapse
      </button>
      <p>{body}</p>
    </section>
  )
}

export default StudentQuestionModal;
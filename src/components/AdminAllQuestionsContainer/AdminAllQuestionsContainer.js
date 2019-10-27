import React from 'react';
import AdminAddQuestionForm from '../AdminAddQuestionForm/AdminAddQuestionForm';
import './AdminAllQuestionsContainer.css';

export const AdminAllQuestionsContainer = () => {
  return (
    <section className='admin-questions'>
      <section className='admin-all-questions'>
          All questions go here
      </section>
      <section className='admin-add-question-container'>
        <AdminAddQuestionForm />
      </section>
    </section>
  )
}

export default AdminAllQuestionsContainer;
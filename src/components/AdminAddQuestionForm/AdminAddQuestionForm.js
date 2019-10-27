import React, { useState } from 'react';
import './AdminAddQuestionForm.css';

export const AdminAddQuestionForm = () => {
  const [questionInput, setQuestionInput] = useState('');

  return (
    <form className='admin-add-question-form'>
      <input
        type='text'
        name='questionInput'
        value={questionInput}
        onChange={e => setQuestionInput(e.target.value)}
        placeholder='Enter your question...'
      />
      <button>Add Question</button>
    </form>
  )

}

export default AdminAddQuestionForm;
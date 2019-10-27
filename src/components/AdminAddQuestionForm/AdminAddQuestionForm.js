import React, { useState } from 'react';
import './AdminAddQuestionForm.css';
import { useMutation } from '@apollo/react-hooks';
import { ADD_QUESTION } from '../../util/apiCalls';

export const AdminAddQuestionForm = () => {
  const [questionInput, setQuestionInput] = useState('');
  // const [addQuestion] = useMutation(ADD_QUESTION);
  // console.log(addQuestion)

  const createQuestion = (e) => {
    e.preventDefault();
    // console.log(addQuestion(questionInput));
  }

  return (
    <form className='admin-add-question-form'>
      <input
        type='text'
        name='questionInput'
        value={questionInput}
        onChange={e => setQuestionInput(e.target.value)}
        placeholder='Enter your question...'
      />
      <button
        onClick={(e) => createQuestion(e)}
      >Add Question</button>
    </form>
  )
}

export default AdminAddQuestionForm;
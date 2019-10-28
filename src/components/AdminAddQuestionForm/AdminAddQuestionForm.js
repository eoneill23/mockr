import React, { useState } from 'react';
import './AdminAddQuestionForm.css';
import { useMutation } from '@apollo/react-hooks';
import { ADD_QUESTION } from '../../util/apiCalls';

export const AdminAddQuestionForm = ({ createNewQuestion }) => {
  const [questionInput, setQuestionInput] = useState('');
  const [addQuestion] = useMutation(ADD_QUESTION);

  const createQuestion = async (e) => {
    e.preventDefault();
    const response = await addQuestion({ variables: { body: questionInput }});
    const newQuestion = response.data.addQuestion;
    createNewQuestion(newQuestion)
    setQuestionInput('');
  };

  const isDisabled = !questionInput;

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
        disabled={isDisabled}
        onClick={(e) => createQuestion(e)}
      >Add Question</button>
    </form>
  )
}

export default AdminAddQuestionForm;
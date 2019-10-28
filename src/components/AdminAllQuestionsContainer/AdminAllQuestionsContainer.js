import React, { useState, useEffect } from 'react';
import AdminAddQuestionForm from '../AdminAddQuestionForm/AdminAddQuestionForm';
import AdminSingleQuestion from '../AdminSingleQuestion/AdminSingleQuestion';
import { ALL_QUESTIONS } from '../../util/apiCalls';
import { useQuery } from '@apollo/react-hooks';

export const AdminAllQuestionsContainer = () => {
  const [questions, setQuestions] = useState([]);

  const { loading, error, data } = useQuery(ALL_QUESTIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  if(data && !questions.length) {
    setQuestions(data.questions);
  };

  let questionsList = questions.map(question => {
    return <AdminSingleQuestion key={question.id} props={{...question}}/>
  });

  const createNewQuestion = (newQuestion) => {
    setQuestions((questions) => [...questions, newQuestion]);
  }
  
  return (
    <section className='admin-questions'>
      <section className='admin-all-questions'>
        {questionsList}
      </section>
      <section className='admin-add-question-container'>
        <AdminAddQuestionForm createNewQuestion={createNewQuestion}/>
      </section>
    </section>
  )
}

export default AdminAllQuestionsContainer;

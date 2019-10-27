import React from 'react';
import AdminAddQuestionForm from '../AdminAddQuestionForm/AdminAddQuestionForm';
import AdminSingleQuestion from '../AdminSingleQuestion/AdminSingleQuestion';
import { questionsQuery } from '../../util/apiCalls';
import { useQuery } from '@apollo/react-hooks';
import './AdminAllQuestionsContainer.css';

export const AdminAllQuestionsContainer = () => {
  let questionsList;
  const QUERY = questionsQuery;
  const { loading, error, data } = useQuery(QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  if(data) {
    questionsList = data.questions.map(question => {
      return <AdminSingleQuestion key={question.id} props={{...question}}/>
    });
  }

  return (
    <section className='admin-questions'>
      <section className='admin-all-questions'>
        {questionsList}
      </section>
      <section className='admin-add-question-container'>
        <AdminAddQuestionForm />
      </section>
    </section>
  )
}

export default AdminAllQuestionsContainer;
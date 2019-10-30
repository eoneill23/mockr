import React, { useState, useEffect } from 'react';
import AdminAddQuestionForm from '../AdminAddQuestionForm/AdminAddQuestionForm';
import Question from '../Question/Question';
import { ALL_QUESTIONS } from '../../util/apiCalls';
import { useQuery } from '@apollo/react-hooks';

export const AdminAllQuestionsContainer = () => {
  const [questions, setQuestions] = useState([]);
  const [cur, setCur] = useState(0);
  const [filterType, setFilterType] = useState(null);

  const { loading, error, data } = useQuery(ALL_QUESTIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  if(data && !questions.length) {
    setQuestions(data.questions);
  };

  const showDetails = id => {setCur(id);}

  const toggleQuestionActiveStatus = id => {
    setQuestions((questions) => questions.map(question => {
      if(question.id === id) {
        return {...question, active: !question.active}
      } else {
        return question;
      }
    }));
  }

  const createNewQuestion = (newQuestion) => {
    setQuestions((questions) => [...questions, newQuestion]);
  }

  const filterQuestionsList = () => {
    if(filterType === null) {
      return questions.map(question => {
        // return <AdminSingleQuestion key={question.id} props={{ ...question }} toggleQuestionActiveStatus={toggleQuestionActiveStatus} />
      let fs = {toggleActive: toggleQuestionActiveStatus};
      return <Question key={question.id} details={question} fs={fs} id={question.id} showDetails={showDetails} detailed={(cur === question.id)}/>
      });
    } else {
      let filteredQuestions = questions.filter(question => {
        return question.active === filterType
      });
      console.log(filteredQuestions, 'FILTERED QUESTIONS')
      return filteredQuestions.map(question => {
        // return <AdminSingleQuestion key={question.id} props={{ ...question }} toggleQuestionActiveStatus={toggleQuestionActiveStatus} />
      let fs = {toggleActive: toggleQuestionActiveStatus};
      return <Question key={question.id} details={question} fs={fs} id={question.id} showDetails={showDetails} detailed={(cur === question.id)}/>
      });
    }
  }

  let questionsList = filterQuestionsList(filterType);

  return (
    <section className='admin-questions'>
      <section className='admin-all-questions'>
        <div className='filter-container'>
          <h3>Filter questions by type</h3>
          <div>
            <input
              name='questionType'
              type='radio'
              onChange={() => setFilterType(null)}
            /> All
            <input
              name='questionType'
              type='radio'
              onChange={() => setFilterType(true)}
            /> Active
            <input
              name='questionType'
              type='radio'
              onChange={() => setFilterType(false)}
            /> Inactive
          </div>
        </div>
        {questionsList}
      </section>
      <section className='admin-add-question-container'>
        <AdminAddQuestionForm createNewQuestion={createNewQuestion}/>
      </section>
    </section>
  )
}

export default AdminAllQuestionsContainer;

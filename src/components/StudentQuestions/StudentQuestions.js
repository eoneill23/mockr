import React, { useContext, useState } from 'react';
import StudentQuestionModal from '../StudentQuestionModal/StudentQuestionModal';
import Question from '../Question/Question';
import { QuestionsContext } from '../../Context';

export const StudentQuestions = () => {
  const { questions } = useContext(QuestionsContext);
  const [cur, setCur] = useState(0);
  const [identifiedQuestionId, identifyQuestion] = useState(null);

  const showDetails = id => {setCur(id);}

  const questionList = questions.map(question => {
    return <Question key={question.id} details={question} id={question.id} showDetails={showDetails} detailed={(cur === question.id)}/>
  });
  let foundQuestion;

  if (identifiedQuestionId) {
    foundQuestion = questions.find(question => question.id === identifiedQuestionId)
  }

  return (
    <section className='main-container'>
      <section className='side-margins'>
        {questionList}
      </section>
    </section>
  );
}

export default StudentQuestions;

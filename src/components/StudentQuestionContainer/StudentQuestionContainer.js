import React, { useContext, useState } from 'react';
import StudentQuestionModal from '../StudentQuestionModal/StudentQuestionModal';
import StudentQuestionCard from '../StudentQuestionCard/StudentQuestionCard';
import { QuestionsContext } from '../../Context';
import './StudentQuestionContainer.css';

export const StudentQuestionContainer = () => {
  const { questions } = useContext(QuestionsContext);
  const [collapsed, collapseModal] = useState(true);
  const [identifiedQuestionId, identifyQuestion] = useState(null);

  const questionList = questions.map(question => {
    return <StudentQuestionCard key={question.id} body={question.body} notes={question.notes} id={question.id} collapseModal={collapseModal} identifyQuestion={identifyQuestion} collapsed={collapsed} />
  });
  let foundQuestion;

  if (identifiedQuestionId) {
    foundQuestion = questions.find(question => question.id === identifiedQuestionId)
  }
  console.log('QUESTIONS', questionList)

  if (collapsed) {
    return (
      <section className='student-question-container'>
        <section className='student-questions-container'>
          {questionList}
        </section>
        <section className='student-question-modal-container'>
          question MODAL
        </section>
      </section>
    )
  } else {
    return (
      <section className='student-question-container'>
        <section className='student-questions-container'>
          {questionList}
        </section>
        <section className='student-question-modal-container'>
          <StudentQuestionModal body={foundQuestion.body} collapseModal={collapseModal} collapsed={collapsed}/>
        </section>
      </section>
    )
  }
}

export default StudentQuestionContainer;
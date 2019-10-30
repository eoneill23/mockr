import React, { useContext, useState } from 'react';
import StudentQuestionModal from '../StudentQuestionModal/StudentQuestionModal';
import StudentQuestionCard from '../StudentQuestionCard/StudentQuestionCard';
import { UserContext } from '../../Context';

export const StudentQuestionContainer = () => {
  const { user } = useContext(UserContext);
  const questions = user.interviews.reduce((acc, interview) => {
    interview.notes.forEach(note => {
      if(!acc.map(q => q.id).includes(note.question.id)) {
        acc.push(note.question)
      }
    })
    return acc;
  }, []);
  const questionNotes = questions.map(question => {
    let notes = user.interviews.reduce((acc, interview) => {
      interview.notes.forEach(note => {
        if(note.question.id === question.id) {
          let questionNote = {
            noteId: note.id,
            summary: note.body,
            score: note.score,
            interviewer: `${interview.users[1].firstName} ${interview.users[1].lastName[0]}.`
          }
          acc.push(questionNote)
        }
      })
      return acc;
    }, [])
    return  { ...question, notes: [...notes.reverse()] };
  });
  const [collapsed, collapseModal] = useState(true);
  const [identifiedQuestionId, identifyQuestion] = useState(null);
  const questionList = questionNotes.map(question => {
    return <StudentQuestionCard key={question.id} question={question.body} id={question.id} collapseModal={collapseModal} identifyQuestion={identifyQuestion} collapsed={collapsed} />
  });
  let foundQuestion;

  if (identifiedQuestionId) {
    foundQuestion = questionNotes.find(question => question.id === identifiedQuestionId)
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
          <StudentQuestionModal body={foundQuestion.body} notes={foundQuestion.notes} collapseModal={collapseModal} collapsed={collapsed}/>
        </section>
      </section>
    )
  }
}

export default StudentQuestionContainer;
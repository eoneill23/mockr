import React, { useContext, useState } from 'react';
import Question from '../Question/Question';
import { UserContext } from '../../Context';
import StudentQuestionModal from '../StudentQuestionModal/StudentQuestionModal';

export const StudentQuestions = () => {
  const { user } = useContext(UserContext);
  const [cur, setCur] = useState(0);
  const [identifiedQuestionId, identifyQuestion] = useState(null);

  const questions = user.interviews.reduce((acc, interview) => {
    interview.notes.forEach(note => {
      if(note.score && !acc.map(q => q.id).includes(note.question.id)) {
        acc.push(note.question)
      }
    })
    return acc;
  }, []);
  const questionNotes = questions.map(question => {
    let notes = user.interviews.reduce((acc, interview) => {
      interview.notes.forEach(note => {
        if (note.question.id === question.id) {
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
    return { ...question, notes: [...notes.reverse()] };
  });

  const questionList = questionNotes.map(question => {
    return <Question key={question.id} details={question} id={question.id} identifyQuestion={identifyQuestion}/>
  });
  let foundQuestion;

  if (identifiedQuestionId) {
    foundQuestion = questionNotes.find(question => question.id === identifiedQuestionId);
  }
  
  return (
    <section className='main-container'>
      <section className='student-question-list'>
        <h3 className='interview-lable'>Question you have been asked:</h3>
        {questionList}
      </section>
      <section className='student-question-modal'>
        {!identifiedQuestionId && <h2 className='interview-prompt'>Click on a specific question to see your scores.</h2>}
        {identifiedQuestionId && <StudentQuestionModal question={{ ...foundQuestion }}/>}
      </section>
    </section>
  );
}

export default StudentQuestions;
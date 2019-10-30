import React, { useContext, useState } from 'react';
import Question from '../Question/Question';
import { QuestionsContext } from '../../Context';
import { UserContext } from '../../Context';

export const StudentQuestions = () => {
  const { user } = useContext(UserContext);
  const [cur, setCur] = useState(0);
  const [identifiedQuestionId, identifyQuestion] = useState(null);

  const showDetails = id => {setCur(id);}

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

  const questionList = questionNotes.map(question => {
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

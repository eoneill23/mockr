import React, { useContext } from 'react';
import { UserContext } from '../../Context';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_INTERVIEW, RANDOM_QUESTIONS } from '../../util/apiCalls';
import PropTypes from 'prop-types';

export const FoundStudent = ({ student }) => {
  const { user, setUser } = useContext(UserContext);
  const [ startInterview ] = useMutation(CREATE_INTERVIEW);
  const {loading, error, data} = useQuery(RANDOM_QUESTIONS);

  const createInterview = async (e) => {
    e.preventDefault();
    const response = await startInterview({ variables: { studentId: student.id, interviewerId: user.id }});
    const newInterview = response.data.addInterview;
    setUser({...user, currentInterview: { id: newInterview.id, student: student.id, questions: data.randomQuestions}});
  }

  return (
    <section className='found-student'>
      <h3>{student.firstName} {student.lastName}</h3>
      <div className='student-info'>
      <h3>Cohort: {student.cohort}</h3>
      <h3>Program: {student.program}</h3>
      { user.role === 1 && <button className='create-interview-btn' onClick={createInterview}>Interview</button> }
      </div>
    </section>
  )
}

export default FoundStudent;

FoundStudent.propTypes = {
  student: PropTypes.object
}

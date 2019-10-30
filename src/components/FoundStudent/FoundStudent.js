import React, { useContext } from 'react';
import { UserContext } from '../../Context';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_INTERVIEW } from '../../util/apiCalls';

export const FoundStudent = ({ student }) => {
  const { user, setUser } = useContext(UserContext);
  const [ startInterview ] = useMutation(CREATE_INTERVIEW);

  const createInterview = async (e) => {
    e.preventDefault();
    const response = await startInterview({ variables: { studentId: student.id, interviewerId: user.id }});
    const newInterview = response.data.addInterview;
    setUser({...user, currentInterview: { id: newInterview.id, student: student.id }});
  }

  return (
    <section className='found-student'>
      <h3>{student.firstName} {student.lastName}</h3>
        <button onClick={createInterview}>Yes</button>
    </section>
  )
}

export default FoundStudent;

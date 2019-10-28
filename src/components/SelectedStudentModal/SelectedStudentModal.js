import React, { useContext } from 'react';
import { UserContext } from '../../Context';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_INTERVIEW } from '../../util/apiCalls';

export const SelectedStudentModal = ({ name, id, collapsed, collapseModal }) => {
  const { user, setUser } = useContext(UserContext);
  const [ startInterview ] = useMutation(CREATE_INTERVIEW);

  const createInterview = async (e) => {
    e.preventDefault();
    const response = await startInterview({ variables: { studentId: id, interviewerId: user.id }});
    const newInterview = response.data.addInterview;
    setUser({...user, currentInterview: { id: newInterview.id, student: id }});
  }

  return (
    <section>
      <p>{name}</p>
        <button
          onClick={createInterview}
        >Yes</button>
      <button
        onClick={() => collapseModal(!collapsed)}
      >No</button>
    </section>
  )
}

export default SelectedStudentModal;
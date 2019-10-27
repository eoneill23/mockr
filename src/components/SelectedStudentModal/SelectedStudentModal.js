import React, { useContext } from 'react';
import { UserContext } from '../../Context';
import { Link } from 'react-router-dom';

export const SelectedStudentModal = ({ name, id, collapsed, collapseModal }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <section>
      <p>{name}</p>
      <Link to='/interview'>
        <button
          onClick={() => setUser({...user, currentStudent: id})}
        >Yes</button>
      </Link>
      <button
        onClick={() => collapseModal(!collapsed)}
      >No</button>
    </section>
  )
}

export default SelectedStudentModal;
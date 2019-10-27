import React, { useContext } from 'react';
import { UserContext } from '../../Context';

export const AdminSelectedStudentModal = ({ name, id, collapsed, collapseModal }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <section>
      <p>{name}</p>
      <button
        onClick={() => collapseModal(!collapsed)}
      >Collapse</button>
    </section>
  )
}

export default AdminSelectedStudentModal;
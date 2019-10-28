import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { studentsQuery } from '../../util/apiCalls';
import StudentProgramSearchForm from '../StudentProgramSearchForm/StudentProgramSearchForm';
import AdminSelectedStudentModal from '../AdminSelectedStudentModal/AdminSelectedStudentModal';


//THIS IS FOR ADMIN TO VIEW ALL STUDENTS. DOES THE SAME THING AS SELECT STUDENT CONTAINER. SEE IF YOU CAN DELETE THIS

export const AdminSearchStudentContainer = () => {
  const QUERY = studentsQuery;
  const { loading, error, data } = useQuery(QUERY);
  const [collapsed, collapseModal] = useState(true);
  const [identifiedStudentId, identifyStudent] = useState(null);
  let foundStudent;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  if (identifiedStudentId) {
    foundStudent = data.users.find(student => student.id === identifiedStudentId);
  }

  if (collapsed) {
    return (
      <section className='admin-interview-student-container'>
        <section className='admin-student-search-container'>
          <StudentProgramSearchForm students={data.users} collapsed={collapsed} collapseModal={collapseModal} identifyStudent={identifyStudent} />
        </section>
        <section className='admin-selected-student-modal-container'>
        </section>
      </section>
    )
  } else {
    return (
      <section className='admin-interview-student-container'>
        <section className='admin-student-search-container'>
          <StudentProgramSearchForm students={data.users} collapsed={collapsed} collapseModal={collapseModal} identifyStudent={identifyStudent} />
        </section>
        <section className='admin-selected-student-modal-container'>
          <AdminSelectedStudentModal name={foundStudent.firstName} id={foundStudent.id} collapsed={collapsed} collapseModal={collapseModal} />
        </section>
      </section>
    )
  }
}

export default AdminSearchStudentContainer;
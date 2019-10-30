import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { studentsQuery } from '../../util/apiCalls';
import StudentSearch from '../StudentSearch/StudentSearch';
import FoundStudent from '../FoundStudent/FoundStudent';

export const InterviewSetup = () => {
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

  return (
    <section className='main-container'>
      <div className='side-margins'>
        <StudentSearch students={data.users} collapsed={collapsed} collapseModal={collapseModal} identifyStudent={identifyStudent}/>
      </div>
    </section>
  );
  // } else {
  //   return (
  //   <section className='interview-student-container'>
  //     <section className='student-search-container'>
  //       <StudentProgramSearchForm students={data.users} collapsed={collapsed} collapseModal={collapseModal} identifyStudent={identifyStudent} />
  //     </section>
  //     <section className='selected-student-modal-container'>
  //       <SelectedStudentModal name={foundStudent.firstName} id={foundStudent.id} collapsed={collapsed} collapseModal={collapseModal}/>
  //     </section>
  //   </section>
  //   )
  // }
}

export default InterviewSetup;

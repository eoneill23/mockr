import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { studentsQuery } from '../../util/apiCalls';
import StudentProgramSearchForm from '../StudentProgramSearchForm/StudentProgramSearchForm';

export const SelectStudentContainer = () => {
  const QUERY = studentsQuery;
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <section>
      <StudentProgramSearchForm students={data.users}/>
    </section>
  )
}

export default SelectStudentContainer;
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import StudentProgramSearchForm from '../StudentProgramSearchForm/StudentProgramSearchForm';
import { studentsQuery } from '../../util/apiCalls';
import './StudentContainer.css';

//THIS IS FOR ADMIN TO VIEW ALL STUDENTS. DOES THE SAME THING AS SELECT STUDENT CONTAINER. SEE IF YOU CAN DELETE THIS

export const StudentContainer = () => {
  const QUERY = studentsQuery;
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log('DATA');

  return (
    <StudentProgramSearchForm />
  )
}

export default StudentContainer;
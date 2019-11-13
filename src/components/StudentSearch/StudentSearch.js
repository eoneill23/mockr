import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_STUDENTS } from '../../util/apiCalls';
import FoundStudent from '../FoundStudent/FoundStudent';
import { UserContext } from '../../Context';

export const StudentSearch = () => {
  const { user } = useContext(UserContext);
  const { loading, error, data } = useQuery(ALL_STUDENTS);
  const [cohortDropdown, toggleCohortDropdown] = useState(false);
  const [cohortInput, setCohortInput] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  let students = data.users;

  const filterStudents = (cohort, program, students) => {
    return students.filter(student => {
      if (cohort || program) {
        return (cohort ? student.cohort.toString().includes(cohort) : true)
          && (program ? student.program === program : true)
      } else {return true}
    }).map(student => <FoundStudent key={student.id} student={student}/>);
  }

  const handleClick = (e) => {
    e.preventDefault();
    toggleCohortDropdown(!cohortDropdown);
  }

  const isFocused = () => {
    if(cohortDropdown) return ' focused';
    return '';
  }

  let studentList = filterStudents(cohortInput, selectedProgram, students);

  return (
    <div className='main-container'>
      <div className='side-margins'>
      { user.role === 1 && <h3>Select a student to interview!</h3> }
      { user.role === 2 && <h3>Filter to a specific student.</h3> }
        <div className='dropdown-container'>
          <form className='student-search-form'>
            <button className='select-program-btn' onClick={(e) => handleClick(e)}>Select Program</button>
            { !selectedProgram && <p className='select-program'>Program Filter: All Students</p> }
            { selectedProgram && <p className='select-program'>Program Filter: { selectedProgram }</p> }
            <input
              type='number'
              name='cohortInput'
              className='cohort-search'
              value={cohortInput}
              onChange={e => setCohortInput(e.target.value)}
              placeholder='cohort #'
            />
          </form>
          <div className={'cohort-dropdown' + isFocused()}>
            <ul>
              <li name='' onClick={(e) => { handleClick(e); setSelectedProgram('')}}>ALL</li>
              <li name='FE' onClick={(e) => { handleClick(e); setSelectedProgram('FE')}}>FE</li>
              <li name='BE' onClick={(e) => { handleClick(e); setSelectedProgram('BE')}}>BE</li>
            </ul>
          </div>
        </div>
        <ul>
          {studentList}
        </ul>
      </div>
    </div>
  );
}

export default StudentSearch;

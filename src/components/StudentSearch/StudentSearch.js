import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_STUDENTS } from '../../util/apiCalls';
import FoundStudent from '../FoundStudent/FoundStudent';

export const StudentSearch = () => {
  const { loading, error, data } = useQuery(ALL_STUDENTS);
  const [cohortDropdown, toggleCohortDropdown] = useState(false);
  const [cohortInput, setCohortInput] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  let students = data.users;

  const filterStudents = (cohort, program, students) => {
    if (!cohort && !program) {
      return students.map(student => <FoundStudent key={student.id} student={student}/>);
    }
    if (!program && cohort) {
      return students.filter(student => {
        return student.cohort.toString().includes(cohort)
      }).map(student => <FoundStudent key={student.id} student={student}/>);
    }
    if (!cohort && program) {
      return students.filter(student => {
        return student.program === program
      }).map(student => <FoundStudent key={student.id} student={student}/>);
    }
    if (cohort && program) {
      return students.filter(student => {
        return student.program === program && student.cohort.toString().includes(cohort)
      }).map(student => <FoundStudent key={student.id} student={student}/>);
    }
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
        <div className='dropdown-container'>
          <form>
            <button className='select-program-btn' onClick={(e) => handleClick(e)}>Select Program</button>
            <input
              type='number'
              name='cohortInput'
              className='cohort-search'
              value={cohortInput}
              onChange={e => setCohortInput(e.target.value)}
              placeholder='cohort'
            />
          </form>
          <div className={'cohort-dropdown' + isFocused()}>
            <ul>
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

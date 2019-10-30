import React, { useState } from 'react';
import FoundStudent from '../FoundStudent/FoundStudent';

export const StudentSearch = ({ students, collapsed, collapseModal, identifyStudent }) => {
  const [cohortDropdown, toggleCohortDropdown] = useState(false);
  const [cohortInput, setCohortInput] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');

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
    <div>
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
  );
}

export default StudentSearch;

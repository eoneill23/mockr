import React, { useState } from 'react';

export const StudentProgramSearchForm = ({ students, collapsed, collapseModal, identifyStudent }) => {
  const [collapsedDropdown, collapseDropdown] = useState(true);
  const [cohortInput, setCohortInput] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');

  const filterStudents = (cohort, program, students) => {
    if (!cohort && !program) {
      return students.map(student => {
        return (
          <li
          onClick={() => {collapseModal(!collapsed); identifyStudent(student.id)}}
          >{student.firstName}</li>
        )
      });
    }

    if (!program && cohort) {
      return students.filter(student => {
        return student.cohort.toString().includes(cohort)
      }).map(student => {
        return (
          <li
          onClick={() => { collapseModal(!collapsed); identifyStudent(student.id) }}
          >{student.firstName}</li>
        )
      });
    }

    if (!cohort && program) {
      return students.filter(student => {
        return student.program === program
      }).map(student => {
        return (
          <li
          onClick={() => { collapseModal(!collapsed); identifyStudent(student.id) }}
          >{student.firstName}</li>
        )
      });
    }

    if (cohort && program) {
      return students.filter(student => {
        return student.program === program && student.cohort.toString().includes(cohort)
      }).map(student => {
        return (
          <li
          onClick={() => { collapseModal(!collapsed); identifyStudent(student.id) }}
          >{student.firstName}</li>
        )
      });
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    collapseDropdown(!collapsedDropdown);
  }

  let studentList = filterStudents(cohortInput, selectedProgram, students);

  if (collapsedDropdown) {
    return (
      <form>
        <div className='dropdown-container'>
          <button
            onClick={(e) => handleClick(e)}
          >
            Program
          </button>
        </div>
        <input 
          type='number'
          name='cohortInput'
          value={cohortInput}
          onChange={e => setCohortInput(e.target.value)}
          placeholder='cohort'
        />
        <ul>
          {studentList}
        </ul>
      </form>
    )
  } else {
    return (
      <form>
        <div className='dropdown-container'>
          <button
            onClick={(e) => handleClick(e)}
          >
            Program
          </button>
          <div className="dropdown-ul">
            <ul>
              <li
                name='FE'
                onClick={(e) => { handleClick(e); setSelectedProgram('FE') }}
              >FE
              </li>
              <li
                name='BE'
                onClick={(e) => { handleClick(e); setSelectedProgram('BE')}}
              >BE
              </li>
            </ul>
          </div>
          <input
            type='number'
            name='cohortInput'
            value={cohortInput}
            onChange={e => setCohortInput(e.target.value)}
            placeholder='cohort'
          />
        </div>
        <ul>
          {studentList}
        </ul>
      </form>
    )
  }
}

export default StudentProgramSearchForm;
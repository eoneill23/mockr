import React, { useState } from 'react';
import './StudentProgramSearchForm.css';

export const StudentContainer = () => {
  const [collapsed, collapseDropdown] = useState(true);
  const [cohortInput, setCohortInput] = useState('');
  const [seletctedCohort, setSelectedCohort] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    collapseDropdown(!collapsed);
  }

  if (!collapsed) {
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
          <div class="dropdown-ul">
            <ul>
              <li
                name='FE'
                onClick={(e) => { handleClick(e); setSelectedCohort(e.target.name) }}
              >FE
              </li>
              <li
                name='BE'
                onClick={(e) => { handleClick(e); setSelectedCohort(e.target.name)}}
              >BE
              </li>
            </ul>
          </div>
        </div>
      </form>
    )
  }
}

export default StudentContainer;
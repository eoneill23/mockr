import React, { useContext } from 'react';
import { UserContext } from '../../Context';

import profilePic from './profile.jpg';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const buttonText = user.role === 0 ? 'Become an Interviewer' : 'Become an Admin';
  console.log(user)
  return (
  <section className='main-container'>
    <section className='profile-container'>
      <img id='profile-pic' src={profilePic} alt='Profile Picture'/>
      <h3 id='first-name'>{user.firstName}</h3> <i id='last-name'>{user.lastName}</i>
      <i id='user-email'>{user.email}</i>
      {(user.role !== 2) && <button id='role-request-btn'>{buttonText}</button>}
    </section>
    {(user.role === 2) &&
    <section className='pending-approvals'>
      <h2 id='pending-approvals-header'>Pending approvals:</h2>
      <div className='approvals-container'>
        <div className='approvals-interviewer-card'>
          <h4>I am an Interviewer!</h4>
        </div>

        <div className='approvals-admin-card'>

        </div>
      </div>
    </section>}
  </section>
  );
}

export default Dashboard;

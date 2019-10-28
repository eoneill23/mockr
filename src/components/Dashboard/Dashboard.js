import React, { useContext } from 'react';
import { UserContext } from '../../Context';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const buttonText = user.role === 0 ? 'Request interview access' : 'Request admin access';
  if(user.role === 0 || user.role === 1) {
    return (
      <section>
        <section>
          <h3>Profile</h3>
          <p>{user.firstName}</p>
          <p>{user.email}</p>
          <button>{buttonText}</button>
        </section>
      </section>
    )
  } else {
    return (
    <section className='dashboard-container'>
      <section className='profile-container'>
        <h3>Profile</h3>
        <p>{user.first_name}</p>
        <p>{user.email}</p>
        <p>{user.email}</p>
      </section>
      <section className='pending-approvals'>
        <h2 id='pending-approvals-header'>Pending approvals:</h2>
        <div className='approvals-container'>
          <div className='approvals-interviewer-card'>
            <h4>I am an Interviewer!</h4>
          </div>

          <div className='approvals-admin-card'>

          </div>
        </div>
      </section>
    </section>
    )
  }
}

export default Dashboard;

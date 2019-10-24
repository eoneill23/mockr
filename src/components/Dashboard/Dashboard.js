import React, { useContext } from 'react';
import { UserContext } from '../../Context';
import './Dashboard.css';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const buttonText = user.role === 0 ? 'Request interview access' : 'Request admin access'
  
  if(user.role === 0 || user.role === 1) {
    return (
      <section>
        <section>
          <h3>Profile</h3>
          <p>{user.first_name}</p>
          <p>{user.email}</p>
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
        <h2>Pending approvals:</h2>
        <div className='approvals-container'>
          <section className='pending-interviewer-approvals'>
            <h3>Pending interviewer approvals</h3>
          </section>
          <section className='pending-admin-approvals'>
            <h3>Pending admin approvals</h3>
          </section>
        </div>
      </section>
    </section>
    )
  }
}

export default Dashboard;
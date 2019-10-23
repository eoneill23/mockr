import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const buttonText = user.role === 0 ? 'Request interview access' : 'Request admin access'
  
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
}

export default Dashboard;
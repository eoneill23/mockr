import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <section>
      <section>
        <h3>Profile</h3>
        <p>{user.first_name}</p>
        <p>{user.email}</p>
        <p>{user.email}</p>
        <button>Request interviewer access</button>
      </section>
    </section>
  )
}

export default Dashboard;
import React, { useContext } from 'react';
import {useMutation} from '@apollo/react-hooks';
import {USER_ROLE_REQUEST} from '../../util/apiCalls';
import { UserContext } from '../../Context';

import profilePic from './profile.jpg';

export const Dashboard = () => {
  const [roleReq] = useMutation(USER_ROLE_REQUEST);
  const { user } = useContext(UserContext);
  const buttonText = user.roleRequest === 0 ? (user.role === 0 ? 'Become an Interviewer' : 'Become an Admin') : 'Request Sent!';
  const request = () => {
    if(user.roleRequest === 0) {
      let role = user.role === 0 ? 1 : 2
      roleReq({variables: {id: user.id, role: role}});
      user.roleRequest = role;
    }
  }
  return (
  <section className='main-container'>
    <section className='profile-container'>
      <img id='profile-pic' src={profilePic} alt='Profile headshot'/>
      <h3 id='first-name'>{user.firstName}</h3> <i id='last-name'>{user.lastName}</i>
      <i id='user-email'>{user.email}</i>
      {(user.role !== 2) && <button onClick={e => {e.preventDefault(); request()}} id='role-request-btn'>{buttonText}</button>}
    </section>
    {(user.role === 2) &&
    <section className='pending-approvals'>
      <h2 id='pending-approvals-header'>Pending approvals:</h2>
      <div className='approvals-container'>
        <div className='approvals-interviewer-card'>
          <h4>Name: </h4>
        </div>

        <div className='approvals-admin-card'>

        </div>
      </div>
    </section>}
  </section>
  );
}

export default Dashboard;

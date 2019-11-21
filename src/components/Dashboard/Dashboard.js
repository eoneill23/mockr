import React, { useContext, useState } from 'react';
import {useQuery,useMutation} from '@apollo/react-hooks';
import {UPDATE_USER, INTERVIEWER_REQUESTS, ADMIN_REQUESTS} from '../../util/apiCalls';
import { UserContext } from '../../Context';

export const Dashboard = () => {
  const [updateUser] = useMutation(UPDATE_USER);
  const [bumped, bump] = useState(false);
  const {loading: intLoading, error: intError, data: intData, refetch: intRef} = useQuery(INTERVIEWER_REQUESTS);
  const {loading: adLoading, error: adError, data: adData, refetch: adRef} = useQuery(ADMIN_REQUESTS);
  const { user } = useContext(UserContext);

  const buttonText = user.roleRequest === 0 ? (user.role === 0 ? 'Become an Interviewer' : 'Become an Admin') : 'Request Sent!';
  const request = e => {
    e.preventDefault();
    if (user.roleRequest === 0) {
      let roleRequest = user.role === 0 ? 1 : 2
      updateUser({variables: {id: user.id, roleRequest: roleRequest}});
      user.roleRequest = roleRequest;
    }
  }

  const approveRequest = (e, id, type) => {
    e.preventDefault();
    if (type) {
      updateUser({variables: {id: id, role: 2, roleRequest: 0}});
      intRef();
    } else {
      updateUser({variables: {id: id, role: 1, roleRequest: 0}});
      adRef();
    }
    bump(!bumped);
  }

  const denyRequest = (e, id) => {
    e.preventDefault();
    updateUser({variables: {id: id, roleRequest: 0}});
    intRef();
    adRef();
    bump(!bumped);
  }

  const populateReqs = (type, data) => {
    return data.map(({id, firstName, lastName}, i) => {
      return (
        <div key={i} className={'approvals-card ' + (type ? 'admin-app' : 'int-app')}>
          <h4 className='approval-name'>{firstName} {lastName}</h4>
          <div className='approval-btn-container'>
            <button className='approval-btn' onClick={e => approveRequest(e, id, type)}>Approve</button>
            <button className='approval-btn' onClick={e => denyRequest(e, id)}>Deny</button>
          </div>
        </div>
      );
    });
  }

  if (user.role !== 2) {
    return (
      <section className='main-container'>
        <section className='profile-container'>
          <img id='profile-pic' src={user.image} alt='Profile headshot'/>
          <div className='name-container'>
            <h3 id='first-name'>{user.firstName}</h3> <i id='last-name'>{user.lastName}</i>
          </div>
          <i id='user-email'>{user.email}</i>
          <button onClick={e => request(e)} id='role-request-btn'>{buttonText}</button>
        </section>
      </section>
    );
  } else {
    if (intLoading || adLoading) {return <p>Loading...</p>}
    if (intError || adError) {return <p>Error!</p>}
    return (
      <section className='main-container'>
        <section className='profile-container'>
          <img id='profile-pic' src={user.image} alt='Profile headshot'/>
          <div className='name-container'>
            <h3 id='first-name'>{user.firstName}</h3> <i id='last-name'>{user.lastName}</i>
          </div>
          <i id='user-email'>{user.email}</i>
        </section>
        <section className='pending-approvals'>
          <h2 id='pending-approvals-header'>Pending approvals:</h2>
          <div className='approvals-container'>
            {populateReqs(0, intData.users)}
            {populateReqs(1, adData.users)}
          </div>
        </section>
      </section>
    );
  }
}

export default Dashboard;

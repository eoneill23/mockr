import React, { useContext } from 'react';
import {useQuery,useMutation} from '@apollo/react-hooks';
import {USER_ROLE_REQUEST, INTERVIEWER_REQUESTS, ADMIN_REQUESTS, UPDATE_USER} from '../../util/apiCalls';
import { UserContext } from '../../Context';

export const Dashboard = () => {
  const [roleReq] = useMutation(USER_ROLE_REQUEST);
  const [updateUser] = useMutation(UPDATE_USER);
  const {loading: intLoading, error: intError, data: intData} = useQuery(INTERVIEWER_REQUESTS);
  const {loading: adLoading, error: adError, data: adData} = useQuery(ADMIN_REQUESTS);
  const { user } = useContext(UserContext);

  const buttonText = user.roleRequest === 0 ? (user.role === 0 ? 'Become an Interviewer' : 'Become an Admin') : 'Request Sent!';
  const request = e => {
    e.preventDefault();
    if (user.roleRequest === 0) {
      let role = user.role === 0 ? 1 : 2
      roleReq({variables: {id: user.id, role: role}});
      user.roleRequest = role;
    }
  }

  const approveRequest = (e, id, type) => {
    e.preventDefault();
    if (type) {
      updateUser({variables: {id: id, role: 2}});
      roleReq({variables: {id: id, role: 0}});
    } else {
      updateUser({variables: {id: id, role: 1}});
      roleReq({variables: {id: id, role: 0}});
    }
  }

  const denyRequest = (e, id) => {
    e.preventDefault();
    roleReq({variables: {id: id, role: 0}});
  }

  const populateReqs = (type, data) => {
    return data.map(({id, firstName, lastName}, i) => {
      return (
        <div className={type ? 'approvals-admin-card' : 'approvals-interviewer-card'}>
          <h4>{firstName} {lastName}</h4>
          <button> onClick={e => approveRequest(e, id, type)}>Approve</button>
          <button> onClick={e => denyRequest(e, id)}>Deny</button>
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
    console.log(intData);
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
            {populateReqs(0, adData.users)}

            <div className='approvals-admin-card'>

            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Dashboard;
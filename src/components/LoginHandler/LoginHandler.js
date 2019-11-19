import React, {useContext} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {UserContext} from '../../Context';
import {CURRENT_USER} from '../../util/apiCalls';
import {useQuery} from '@apollo/react-hooks';

export const LoginHandler = () => {
  const {token} = useParams();
  const {setUser} = useContext(UserContext);

  const {loading, error, data} = useQuery(CURRENT_USER, {variables: {token: token}});
  if(data) {
    setUser(data.currentUser);
    sessionStorage.setItem('userId', data.currentUser.id);
    return <Redirect to='/dashboard'/>
  } else {
    return loading ? <p>Loading...</p> : <p>Error!</p>;
  };
}

export default LoginHandler;


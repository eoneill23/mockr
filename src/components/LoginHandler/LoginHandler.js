import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {UserContext} from '../../Context';
import {CURRENT_USER} from '../../util/apiCalls';
import {useQuery} from '@apollo/react-hooks';

export const LoginHandler = () => {
  const {setUser} = useContext(UserContext);

  const {loading, error, data} = useQuery(CURRENT_USER);
  if(data) {
    setUser(data.login);
    sessionStorage.setItem('userId', data.login.id);
    return <Redirect to='/dashboard'/>
  } else {
    return <p>Loading...</p>
  };
}

export default LoginHandler;


import React, { useState, useMemo, useEffect } from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';
import LoginHandler from '../LoginHandler/LoginHandler';
import Dashboard from '../Dashboard/Dashboard';
import StudentSearch from '../StudentSearch/StudentSearch';
import AdminQuestions from '../AdminQuestions/AdminQuestions';
import { UserContext } from '../../Context';
import { Route, Redirect } from 'react-router-dom';
import { USER } from '../../util/apiCalls';
import Interview from '../Interview/Interview';
import StudentQuestions from '../StudentQuestions/StudentQuestions';
import StudentInterviews from '../StudentInterviews/StudentInterviews';
import SignupForm from '../SignupForm/SignupForm';

// Apollo
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
let uri = '';
if (process.env.NODE_ENV === 'development') {
  uri = 'http://localhost:3000/graphql';
} else {
  uri = 'https://thawing-wave-76846.herokuapp.com/graphql';
}
const client = new ApolloClient({
  uri: uri
});

export const App = () => {
  const [user, setUser] = useState('');

  const userInfo = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    if (sessionStorage.getItem('userId')) {
      client.query({query: USER, variables: {id: parseInt(sessionStorage.getItem('userId'))}})
      .then(data => {setUser(data.data.user)});
    }
  }, []);

  const userExists = sessionStorage.getItem('userId');

  return (
    <ApolloProvider client={client}>
      <main className='main'>
        <UserContext.Provider value={userInfo}>
          <NavBar />
          <Route exact path='/'><HomePage /></Route>
          <Route exact path='/login' render={() => userExists ? (<Redirect to='/dashboard'/>) : <LoginForm />}/>
          <Route exact path='/signup'></Route>
          <Route exact path='/dashboard' render={() => !userExists ? (<Redirect to='/login'/>) : <Dashboard /> } />
          <Route exact path='/student-interviews' render={() => !userExists ? (<Redirect to='/login'/>) : <StudentInterviews /> } />
          <Route exact path='/student-questions' render={() => !userExists ? (<Redirect to='/login'/>) : <StudentQuestions /> } />
          <Route exact path='/interview' render={() => !user.currentInterview ? (<Redirect to='/login'/>) : <Interview /> } />
          <Route exact path='/students' render={() => user.role !== 2 ? (<Redirect to='/login'/>) : <StudentSearch />} />
          <Route exact path='/all-questions' render={() => !userExists ? (<Redirect to='/login'/>) : <AdminQuestions /> } />
          <Route exact path='/select-student' render={() => user.currentInterview ? (<Redirect to='/interview'/>) : <StudentSearch />}/>
          <Route exact path='/signup'render={() => userExists ? (<Redirect to='/dashboard'/>) : <SignupForm />}/>
          <Route exact path='/auth/success/:token' render={() => <LoginHandler/>}/>
        </UserContext.Provider>
      </main>
    </ApolloProvider>
  );
}

export default App;

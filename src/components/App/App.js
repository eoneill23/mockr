import React, { useState, useMemo, useEffect } from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import StudentSearch from '../StudentSearch/StudentSearch';
import AdminQuestions from '../AdminQuestions/AdminQuestions';
import { InterviewsContext, UserContext, QuestionsContext } from '../../Context';
import { Route, Redirect } from 'react-router-dom';
import Interview from '../Interview/Interview';
import StudentQuestions from '../StudentQuestions/StudentQuestions';
import StudentInterviews from '../StudentInterviews/StudentInterviews';

// Apollo
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
const client = new ApolloClient({
  uri: 'https://thawing-wave-76846.herokuapp.com/graphql'
});

export const App = () => {
  const [user, setUser] = useState('');
  const [interviews, setInterviews] = useState([]);
  const [questions, setQuestions] = useState([]);

  const userInfo = useMemo(() => ({ user, setUser }), [user, setUser]);
  const fetchedInterviews = useMemo(() => ({ interviews, setInterviews }), [interviews, setInterviews]);
  const fetchedQuestions = useMemo(() => ({ questions, setQuestions }), [questions, setQuestions]);

  useEffect(() => {
    if (sessionStorage.getItem('user')) {setUser(JSON.parse(sessionStorage.getItem('user')));}
  }, []);

  return (
    <ApolloProvider client={client}>
      <main className='main'>
            <UserContext.Provider value={userInfo}>
              <NavBar />
              <Route exact path='/'><HomePage /></Route>
              <Route exact path='/login' render={() => user ? (<Redirect to='/dashboard'/>) : <LoginForm />}/>
              <Route exact path='/dashboard' render={() => !user ? (<Redirect to='/login'/>) : <Dashboard /> } />
              <Route exact path='/student-interviews' render={() => !user ? (<Redirect to='/login'/>) : <StudentInterviews /> } />
              <Route exact path='/student-questions' render={() => !user ? (<Redirect to='/login'/>) : <StudentQuestions /> } />
              <Route exact path='/interview' render={() => !user.currentInterview ? (<Redirect to='/login'/>) : <Interview /> } />
              <Route exact path='/students' render={() => user.role !== 2 ? (<Redirect to='/login'/>) : <StudentSearch />} />
              <Route exact path='/all-questions' render={() => !user ? (<Redirect to='/login'/>) : <AdminQuestions /> } />
              <Route exact path='/select-student' render={() => user.currentInterview ? (<Redirect to='/interview'/>) : <StudentSearch />}/>
            </UserContext.Provider>
      </main>
    </ApolloProvider>
  );
}

export default App;

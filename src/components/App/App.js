import React, { useState, useMemo } from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import StudentInterviewContainer from '../StudentInterviewContainer/StudentInterviewContainer';
import { UserContext } from '../../UserContext';
import { InterviewsContext } from '../../InterviewsContext';
import { Route, Redirect } from 'react-router-dom';
import QuestionDeck from '../QuestionDeck/QuestionDeck';
import Interview from '../Interview/Interview';
import './App.css';

// Apollo
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
const client = new ApolloClient({
  uri: 'https://thawing-wave-76846.herokuapp.com/graphql'
});

export const App = () => {
  const [user, setUser] = useState('');
  const [interviews, setInterviews] = useState([]);

  const userInfo = useMemo(() => ({ user, setUser }), [user, setUser]);
  const fetchedInterviews = useMemo(() => ({ interviews, setInterviews }), [interviews, setInterviews]);

  return (
    <ApolloProvider client={client}>
      <main className='main'>
        <InterviewsContext.Provider value={fetchedInterviews}>
          <UserContext.Provider value={userInfo}>
            <NavBar />
            <Route exact path='/'><HomePage /></Route>
            <Route exact path='/login' render={() => user ? (<Redirect to='/dashboard'/>) : <LoginForm />}/>
            <Route exact path='/dashboard'><Dashboard /></Route>
            <Route exact path='/student-interviews'><StudentInterviewContainer /></Route>
            <Route exact path='/questions'><QuestionDeck /></Route>
            <Route exact path='/interview'><Interview/></Route>
          </UserContext.Provider>
        </InterviewsContext.Provider>
      </main>
    </ApolloProvider>
  );
}

export default App;

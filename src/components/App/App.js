import React, { useState, useMemo } from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import InterviewContainer from '../InterviewContainer/InterviewContainer';
import { UserContext } from '../../UserContext';
import { InterviewsContext } from '../../InterviewsContext';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

export const App = () => {
  const [user, setUser] = useState('');
  const [interviews, setInterviews] = useState([]);

  const userInfo = useMemo(() => ({ user, setUser }), [user, setUser]);
  const fetchedInterviews = useMemo(() => ({ interviews, setInterviews }), [interviews, setInterviews]);

  return (
    <main>
      <InterviewsContext.Provider value={fetchedInterviews}>
        <UserContext.Provider value={userInfo}>
          <NavBar />
          <Route exact path='/'><HomePage /></Route>
          <Route exact path='/login' render={() => user ? (<Redirect to='/dashboard'/>) : <LoginForm />}/>
          <Route exact path='/dashboard'><Dashboard /></Route>
          <Route exact path='/interviews'><InterviewContainer /></Route>
        </UserContext.Provider>
      </InterviewsContext.Provider>
    </main>
  );
}

export default App;

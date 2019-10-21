import React, { useState, useMemo } from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import { UserContext } from '../../UserContext';
import { Route } from 'react-router-dom';
import './App.css';

export const App = () => {
  const [user, setUser] = useState('');

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <main>
      <UserContext.Provider value={value}>
        <NavBar />
        <Route exact path='/'><HomePage /></Route>
        <Route exact path='/login'><LoginForm /></Route>
        <Route exact path='/dashboard'><Dashboard /></Route>
      </UserContext.Provider>
    </main>
  );
}

export default App;

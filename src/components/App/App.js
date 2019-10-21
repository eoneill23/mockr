import React from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';
import { Route } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <main>
      <NavBar />
      <Route exact path='/'><HomePage /></Route>
      <Route exact path='/login'><LoginForm /></Route>
    </main>
  );
}

export default App;

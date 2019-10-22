import React from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';
import QuestionDeck from '../QuestionDeck/QuestionDeck';
import { Route } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <main>
      <NavBar />
      <Route exact path='/'><HomePage /></Route>
      <Route exact path='/login'><LoginForm /></Route>
      <Route exact path='/questions'><QuestionDeck /></Route>
    </main>
  );
}

export default App;

import React from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import { Route } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <main>
      <NavBar />
      <section>
      <Route exact path='/'><HomePage /></Route>
      </section>
    </main>
  );
}

export default App;

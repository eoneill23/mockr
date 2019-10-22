import React from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';
import QuestionDeck from '../QuestionDeck/QuestionDeck';
import { Route } from 'react-router-dom';
import './App.css';

// Apollo
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
const client = new ApolloClient({
  uri: 'https://thawing-wave-76846.herokuapp.com/graphql'
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <main>
        <NavBar />
        <Route exact path='/'><HomePage /></Route>
        <Route exact path='/login'><LoginForm /></Route>
        <Route exact path='/questions'><QuestionDeck /></Route>
      </main>
    </ApolloProvider>
  );
}

export default App;

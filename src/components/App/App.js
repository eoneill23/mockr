import React, { useState, useMemo } from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import StudentInterviewContainer from '../StudentInterviewContainer/StudentInterviewContainer';
import StudentContainer from '../StudentContainer/StudentContainer';
import SelectStudentContainer from '../SelectStudentContainer/SelectStudentContainer';
import AdminAllQuestionsContainer from '../AdminAllQuestionsContainer/AdminAllQuestionsContainer';
import { InterviewsContext, UserContext, QuestionsContext } from '../../Context';
import { Route, Redirect } from 'react-router-dom';
import Interview from '../Interview/Interview/Interview';
import StudentQuestionContainer from '../StudentQuestionContainer/StudentQuestionContainer';
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
  const [questions, setQuestions] = useState([]);

  const userInfo = useMemo(() => ({ user, setUser }), [user, setUser]);
  const fetchedInterviews = useMemo(() => ({ interviews, setInterviews }), [interviews, setInterviews]);
  const fetchedQuestions = useMemo(() => ({ questions, setQuestions }), [questions, setQuestions]);

  return (
    <ApolloProvider client={client}>
      <main className='main'>
        <QuestionsContext.Provider value={fetchedQuestions}>
          <InterviewsContext.Provider value={fetchedInterviews}>
            <UserContext.Provider value={userInfo}>
              <NavBar />
              <Route exact path='/'><HomePage /></Route>
              <Route exact path='/login' render={() => user ? (<Redirect to='/dashboard'/>) : <LoginForm />}/>
              <Route exact path='/dashboard'><Dashboard /></Route>
              <Route exact path='/student-interviews'><StudentInterviewContainer /></Route>
              <Route exact path='/student-questions'><StudentQuestionContainer></StudentQuestionContainer></Route>
              <Route exact path='/interview'><Interview/></Route>
              <Route exact path='/students'><StudentContainer /></Route>
              <Route exact path='/all-questions'><AdminAllQuestionsContainer /></Route>
              <Route exact path='/select-student'><SelectStudentContainer /></Route>
            </UserContext.Provider>
          </InterviewsContext.Provider>
        </QuestionsContext.Provider>
      </main>
    </ApolloProvider>
  );
}

export default App;

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


export const login = async () => {
  return {
    id: 1,
    first_name: 'Djavan',
    last_name: 'Munroe',
    email: 'djavan@gmail.com',
    role: 2
  }
}

export const getInterviews = async () => {
  return [
    {
      id: 1,
      score: 5,
      summary: 'Great job',
      studentId: 1,
      interviewerId: 1,
      questions: []
    },
    {
      id: 2,
      score: 4,
      summary: 'Pretty good job',
      studentId: 1,
      interviewerId: 1,
      questions: []
    }
  ]
}

export const getQuestions = async () => {
  return [
    {
      id: 1,
      body: 'What is France?',
      score: 4,
      notes: 'Great answer'
    },
    {
      id: 2,
      body: 'What is life?',
      score: 2,
      notes: 'Bad answer'
    }
  ]
}
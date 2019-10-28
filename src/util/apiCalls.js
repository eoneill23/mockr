import gql from 'graphql-tag';

export const login = async () => {
  return {
    id: 9002,
    firstName: 'Ian',
    lastName: 'Douglas',
    email: 'iandouglas@turing.io',
    role: 1,
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

export const userQuery = gql`
  query {
    user(id: 9002) {
      id
      firstName
      lastName
      email
      role
      interviews {
        id
        users {
          firstName
          lastName
          role
        }
        notes {
          id
          body
          score
          question {
            body
          }
        }
      }
    }
  }
  `;

export const studentsQuery = gql`
  query {
    users(role: 0) {
      id
      firstName
      lastName
      email
      program
      cohort
    }
  }
`

export const ALL_QUESTIONS = gql`
  query {
    questions
    {
      id
      body
      active
    }
  }
`;

export const ADD_QUESTION = gql`
  mutation AddQuestion($body: String!) {
    addQuestion(body: $body) {
      id
      body
    }
  }
`;

export const RANDOM_QUESTIONS = gql`
  query {
    randomQuestions {
      id
      body
    }
  }
`;

export const CREATE_INTERVIEW = gql`
  mutation CreateInterview($studentId: Int!, $interviewerId: Int!) {
    addInterview(studentId: $studentId, interviewerId: $interviewerId) {
      id
      users {
        id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_NOTE = gql`
  mutation AddNote($score: Int!, $body: String!, $questionId: Int!, $interviewId: Int!, $studentId: Int!, $interviewerId: Int!) {
    addNote(score: $score, body: $body, questionId: $questionId, interviewId: $interviewId, studentId: $studentId, interviewerId: $interviewerId) {
      id
    }
  }
`;

export const FINALISE_INTERVIEW = gql`
  mutation FinaliseInterview($id: Int!, $score: Int!, $body: String!) {
    finalizeInterview(id: $id, score: $score, summary: $body) {
      id
    }
  }
`;

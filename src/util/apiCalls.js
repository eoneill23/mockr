import gql from 'graphql-tag';

export const login = async () => {
  return {
    id: 9002,
    firstName: 'Ian',
    lastName: 'Douglas',
    email: 'iandouglas@turing.io',
    role: 2,
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

export const USER = gql`
  query User($id: Int!){
    user(id: $id) {
      id
      firstName
      lastName
      email
      role
      roleRequest
      image
      interviews {
        id
        score
        summary
        createdAt
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
            id
            body
          }
        }
      }
    }
  }
`;

export const CURRENT_USER = gql`
query CurrentUser($token: String!) {
  currentUser(token: $token) {
    id
    firstName
    lastName
    email
    role
    roleRequest
    image
    interviews {
      id
      score
      summary
      createdAt
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
          id
          body
        }
      }
    }
  }
}
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: Int!, $role: Int, $roleRequest: Int){
    updateUser(id: $id, role: $role, roleRequest: $roleRequest) {
      id
      firstName
      lastName
      role
      roleRequest
    }
  }
`;


export const LOGIN = gql`
query Login($email: String!, $password: String!){
  login(email: $email, password: $password) {
    id
    firstName
    lastName
    email
    role
    image
    interviews {
      id
      score
      summary
      createdAt
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
          id
          body
        }
      }
    }
  }
}
`;

export const ALL_STUDENTS = gql`
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

export const ACTIVATE_QUESTION = gql`
  mutation ActivateQuestion($id: Int!, $active: Boolean!) {
    activateQuestion(id: $id, active: $active) {
      id
      active
    }
  }
`;

export const DEACTIVATE_QUESTION = gql`
  mutation ActivateQuestion($id: Int!, $active: Boolean!) {
    activateQuestion(id: $id, active: $active) {
      id
      active
    }
  }
`;

export const SIGNUP = gql`
  mutation AddUser($firstName: String!, $lastName: String!, $email: String!,  $password: String!, $passwordConfirmation: String!, $program: String!, $cohort: Int!) {
    addUser (firstName: $firstName, lastName: $lastName, email: $email, password: $password, passwordConfirmation: $passwordConfirmation, program: $program, cohort: $cohort) {
      id
      firstName
      lastName
      email
      program
      cohort
      role
      image
    }
  }
`

export const INTERVIEWER_REQUESTS = gql`
  query {
    users(roleRequest: 1) {
      id
      firstName
      lastName
    }
  }
`;

export const ADMIN_REQUESTS = gql`
  query {
    users(roleRequest: 2) {
      id
      firstName
      lastName
    }
  }
`;

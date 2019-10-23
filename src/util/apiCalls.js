export const login = async () => {
  return {
    id: 1,
    first_name: 'Djavan',
    last_name: 'Munroe',
    email: 'djavan@gmail.com',
    role: 0
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
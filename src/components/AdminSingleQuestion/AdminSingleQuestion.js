import React from 'react';

export const AdminSingleQuestion = ({ id, body, active }) => {
  let buttonText = active ? 'Deactivate' : 'Activate'

  return (
    <section>
      <p>{body}</p>
      <button>{buttonText}</button>
    </section>
  )
}

export default AdminSingleQuestion;
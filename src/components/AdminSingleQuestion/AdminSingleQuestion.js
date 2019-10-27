import React from 'react';

export const AdminSingleQuestion = ({ props }) => {
  const { id, body, active } = props;
  let buttonText = active ? 'Deactivate' : 'Activate'

  return (
    <section>
      <p>{body}</p>
      <button>{buttonText}</button>
    </section>
  )
}

export default AdminSingleQuestion;
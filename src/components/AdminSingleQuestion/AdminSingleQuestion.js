import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ACTIVATE_QUESTION, DEACTIVATE_QUESTION } from '../../util/apiCalls';

export const AdminSingleQuestion = ({ props, toggleQuestionActiveStatus }) => {
  const [activateQuestion] = useMutation(ACTIVATE_QUESTION);
  const [deactivateQuestion] = useMutation(DEACTIVATE_QUESTION);
  const { id, body, active } = props;
  let buttonText = active ? 'Deactivate' : 'Activate';

  const toggleQuestion = async (e) => {
    e.preventDefault();
    if(!active) {
      const response = await deactivateQuestion({ variables: { id: id, active: !active }});
      toggleQuestionActiveStatus(response.data.activateQuestion.id);
    } else {
      const response = await activateQuestion({ variables: { id: id, active: !active } });
      toggleQuestionActiveStatus(response.data.activateQuestion.id);
    }
  }

  return (
    <section>
      <p>{body}</p>
      <button
        onClick={(e) => toggleQuestion(e)}
      >{buttonText}</button>
    </section>
  )
}

export default AdminSingleQuestion;
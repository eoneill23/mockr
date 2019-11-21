import React, { useState, useContext } from 'react';
import { UserContext } from "../../Context";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP } from "../../util/apiCalls";

export const SignupForm = () => {
  const { setUser } = useContext(UserContext);
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [programType, setProgramType] = useState('');
  const [cohortInput, setCohortInput] = useState('');

  const [loginUser, { loading, error, data }] = useMutation(SIGNUP);
  if (loading) return <p>Loading...</p>;
  if (data) {
    setUser(data.addUser);
    sessionStorage.setItem("userId", data.addUser.id);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser({
      variables: { firstName: firstNameInput, lastName: lastNameInput, email: emailInput, password: passwordInput, passwordConfirmation: confirmPasswordInput, program: programType, cohort: parseInt(cohortInput) }
    });
  };

  return (
    <div className="main-container">
      <form className="login-form box-fix">
        {error && (
          <p className="login-error">
            There was an issue creating your account. Please try again.
          </p>
        )}
        <h3>First name:</h3>
        <input
          type="text"
          name="firstNameInput"
          className="login-input"
          value={firstNameInput}
          onChange={e => setFirstNameInput(e.target.value)}
        ></input>
        <h3>Last name:</h3>
        <input
          type="text"
          name="lastNameInput"
          className="login-input"
          value={lastNameInput}
          onChange={e => setLastNameInput(e.target.value)}
        ></input>
        <h3>Email:</h3>
        <input
          type="text"
          name="emailInput"
          className="login-input"
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
        ></input>
        <div className="program-radio-btns">
          <h3>Program:</h3>
          <input
            name="programType"
            type="radio"
            onChange={() => setProgramType("FE")}
          />
          FE
          <input
            name="programType"
            type="radio"
            onChange={() => setProgramType("BE")}
          />
          BE
        </div>
        <h3>Cohort:</h3>
        <input
          type="number"
          name="cohortInput"
          className="login-input"
          value={cohortInput}
          onChange={e => setCohortInput(e.target.value)}
        ></input>
        <h3>Password:</h3>
        <input
          type="password"
          name="passwordInput"
          className="login-input"
          value={passwordInput}
          onChange={e => setPasswordInput(e.target.value)}
        ></input>
        <h3>Confirm password:</h3>
        <input
          type="password"
          name="confirmPasswordInput"
          className="login-input"
          value={confirmPasswordInput}
          onChange={e => setConfirmPasswordInput(e.target.value)}
        ></input>
        <button className="login-submit" onClick={e => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;

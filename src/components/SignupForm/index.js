import React from "react";

const SignupForm = ({ onSignupSubmit }) => {
  return (
    <form onSubmit={onSignupSubmit}>
      <label htmlFor="userName">Enter User Name</label>
      <input type="text" name="userNme"></input>
      <label htmlFor="password"> Create password</label>
      <input type="text" name="password"></input>
      <button type="submit">Sign up!</button>
    </form>
  );
};
export default SignupForm;

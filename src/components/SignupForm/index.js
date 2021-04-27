import React from "react";

const SignupForm = ({ onSignupSubmit }) => {
  return (
    <form onSubmit={onSignupSubmit}>
      <input type="text"></input>
      <input type="text"></input>
      <button type="submit">Sign up!</button>
    </form>
  );
};
export default SignupForm;

import React from "react";

const SignupForm = ({ onSignupSubmit }) => {
  return (
    <form onSubmit={onSignupSubmit} className="form">
      <div className="form-control">
        <label htmlFor="userName">Enter User Name</label>
        <input type="text" name="userNme"></input>
      </div>
      <div className="form-control">
        <label htmlFor="password"> Create password</label>
        <input type="text" name="password"></input>
      </div>
      <button type="submit">Sign up!</button>
    </form>
  );
};
export default SignupForm;

import React from "react";

const LoginForm = ({ onLoginSubmit }) => {
  return (
    <form onSubmit={onLoginSubmit} className="form">
      <div className="form-control">
        <label htmlFor="userName">Enter User Name</label>

        <input type="text" name="userName" />
      </div>

      <div className="form-control">
        <label htmlFor="userName">Enter password</label>

        <input type="password" name="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;

import React from "react";

const LoginForm = ({ onLoginSubmit }) => {
  return (
    <form onSubmit={onLoginSubmit}>
      <label htmlFor="userName">Enter User Name</label>

      <input type="text" name="userName" />
      <label htmlFor="userName">Enter password</label>

      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;

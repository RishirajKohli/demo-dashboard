import React from "react";

const LoginForm = ({ onLoginSubmit }) => {
  return (
    <form onSubmit={onLoginSubmit}>
      <input type="text" />
      <input type="password" />
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;

import React, { useState } from "react";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

const AuthPage = ({ setisAuthenticated }) => {
  const [submmissionType, setSubmissionType] = useState("login");

  const onLoginSubmit = (e) => {
    e.preventDefault();
    const [userName, password] = e.target;
    const users = JSON.parse(localStorage.getItem(users));
    const loggedUser = users.find(
      (user) => user.userName === userName && user.password === password
    );
    if (loggedUser) {
      setisAuthenticated(true);
    }
  };

  const onSignupSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem(users));
    const [name, password] = e.target;
    users.push({ name, password });
    localStorage.setItem("users", JSON.stringify(users));
    setisAuthenticated(true);
  };
  return (
    <div>
      <div className="login"></div>
      <button>Login</button>
      <button>Signup?</button>
      {submmissionType === "login" ? (
        <LoginForm onLoginSubmit={onLoginSubmit}></LoginForm>
      ) : (
        <SignupForm onSignupSubmit={onSignupSubmit}></SignupForm>
      )}
    </div>
  );
};
export default AuthPage;

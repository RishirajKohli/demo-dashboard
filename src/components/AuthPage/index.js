import React, { useState } from "react";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import "./AuthPage.css";

const AuthPage = ({ setisAuthenticated }) => {
  const [submmissionType, setSubmissionType] = useState("login");

  const onLoginSubmit = (e) => {
    e.preventDefault();
    const [{ value: name }, { value: password }] = e.target;
    const users = JSON.parse(localStorage.getItem("users") ?? "[]");
    const loggedUser = users.find(
      (user) => user.name === name && user.password === password
    );

    if (loggedUser) {
      setisAuthenticated(true);
      localStorage.setItem("activeUser", JSON.stringify(loggedUser));
      alert("Successfully Logged in!!");
    } else {
      alert("Wrong Password!! Try Again");
    }
  };

  const onSignupSubmit = (e) => {
    e.preventDefault();
    const users = [...JSON.parse(localStorage.getItem("users") || "[]")];
    const [{ value: name }, { value: password }] = e.target;
    users.push({ name, password });

    localStorage.setItem("users", JSON.stringify(users));
    setisAuthenticated(true);
    localStorage.setItem("activeUser", JSON.stringify({ name, password }));

    alert("Successfully Logged in!!");
  };
  return (
    <div>
      <div className="login"></div>
      <button onClick={() => setSubmissionType("login")}>Login</button>
      <button onClick={() => setSubmissionType("signup")}>Signup?</button>
      {submmissionType === "login" ? (
        <LoginForm onLoginSubmit={onLoginSubmit}></LoginForm>
      ) : (
        <SignupForm onSignupSubmit={onSignupSubmit}></SignupForm>
      )}
    </div>
  );
};
export default AuthPage;

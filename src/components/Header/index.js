import React from "react";
import "./Header.css";
import { logOutUser } from "../../utils";

const Header = ({ isAuthenticated, setisAuthenticated }) => {
  const onLogoutCLick = () => {
    logOutUser();
    setisAuthenticated(false);
  };
  return (
    <header className="top-header">
      <div>Welcome to Viitor Cloud Technologies</div>
      {isAuthenticated ? <button onClick={onLogoutCLick}>Logout</button> : null}
    </header>
  );
};

export default Header;

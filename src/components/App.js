import { React, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { checkAuthState } from "../utils";
import AuthPage from "./AuthPage";
import Header from "./Header";
import Dashboard from "./Dashboard";

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(checkAuthState());
  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        setisAuthenticated={setisAuthenticated}
      ></Header>

      <Switch>
        <Route
          path="/"
          render={(props) =>
            !isAuthenticated ? (
              <AuthPage
                isAuthenticated={isAuthenticated}
                setisAuthenticated={setisAuthenticated}
              ></AuthPage>
            ) : (
              <Redirect to="/dashboard"></Redirect>
            )
          }
        ></Route>
        <Route
          path="dashboard"
          render={(props) =>
            isAuthenticated ? (
              <Dashboard {...props}></Dashboard>
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>
    </>
  );
};

export default App;

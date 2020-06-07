import React from "react";
import { Route, useHistory, BrowserRouter } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import dotenv from "dotenv";
import config from "./config";
import { Home } from "./Home";
import { Login } from "./Login";
import { Profile } from "./Profile";

const HasAccessToRouter = () => {
  const history = useHistory();
  const customAuthHandler = () => {
    history.push("/login");
  };

  return (
    <Security
      issuer={config.issuer}
      clientId={config.clientId}
      redirectUri={window.location.origin + "/implicit/callback"}
      pkce={true}
      onAuthRequired={customAuthHandler}
    >
      <Route path="/" exact={true} component={Home} />
      <SecureRoute path="/profile" component={Profile} />
      <Route path="/login" exact component={Login} />
      <Route path="/implicit/callback" component={LoginCallback} />
    </Security>
  );
};

const App = () => {
  dotenv.config();

  return (
    <BrowserRouter>
      <HasAccessToRouter />
    </BrowserRouter>
  );
};

export default App;

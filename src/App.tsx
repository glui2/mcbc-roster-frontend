import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import dotenv from "dotenv";
import config from "./config";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/profile/Profile";

const HasAccessToRouter = () => {
  return (
    <Security
      issuer={config.issuer}
      clientId={config.clientId}
      redirectUri={window.location.origin + "/implicit/callback"}
      pkce={true}
    >
      <Route path="/" exact={true} component={Home} />
      <Route path="/implicit/callback" component={LoginCallback} />
      <SecureRoute path="/profile" component={Profile} />
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

import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { authState, authService } = useOktaAuth();

  const logoutButton = (
    <button
      onClick={() => {
        authService.logout("/");
      }}
    >
      Logout
    </button>
  );

  const loginButton = (
    <button
      onClick={() => {
        authService.login("/");
      }}
    >
      Login
    </button>
  );

  const button = authState.isAuthenticated ? logoutButton : loginButton;

  return (
    <div>
      {button}
      <p>This is the dummy home page!</p>
    </div>
  );
};

export { Home };

import React from "react";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { authState, authService } = useOktaAuth();

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  const logoutButton = (
    <button
      onClick={() => {
        authService.logout();
      }}
    >
      Logout
    </button>
  );

  const loginButton = (
    <button
      onClick={() => {
        authService.login();
      }}
    >
      Login
    </button>
  );

  const button = authState.isAuthenticated ? logoutButton : loginButton;

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      {button}
    </div>
  );
};
export { Home };

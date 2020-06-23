import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import axios from "axios";

const Home = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        setUserInfo(info);
      });
      console.log("@@@@@@@@@@@@   ID TOKEN  @@@@@@@@@@@@@");
      console.log(authState.idToken);
      console.log("@@@@@@@@@@@@   ACCESS TOKEN  @@@@@@@@@@@@@");
      console.log(authState.accessToken);
      const accessToken = authState.accessToken;

      axios.get("http://localhost:8080/test", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    }
  }, [authState, authService]); // Update if authState changes

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

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

  // axios
  //   .get("http://localhost:8080/test")
  //   .then((response) => console.log(response));

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      {button}
      {userInfo ? <p>{userInfo.name}</p> : <p>No user</p>}
    </div>
  );
};
export { Home };

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const getUserInfo = async (accessToken) => {
  return await axios.get("http://localhost:8080/test", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

const Home = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      const accessToken = authState.accessToken;

      const response = axios
        .get("http://localhost:8080/test", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          console.log(response);
          setUserInfo(response.data);
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
      <div className="fullname">
        <Box>
          {userInfo ? (
            <Typography color="primary" variant="h2">
              {userInfo}
            </Typography>
          ) : (
            <Typography color="primary" variant="h2">
              Unknown User
            </Typography>
          )}
        </Box>
      </div>
    </div>
  );
};
export { Home };

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import axios from "axios";
import { MinistryIcon } from "../../shared-components/ministryIcon/ministryIcon";
import "./Home.css";

const Home = () => {
  const { authState, authService } = useOktaAuth();
  // const [userInfo, setUserInfo] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setFirstName(null);
      setLastName(null);
    } else {
      const accessToken = authState.accessToken;

      const response = axios
        .get("http://localhost:8080/test", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          console.log(response);
          const fullName = response.data.split(" ", 2);
          setFirstName(fullName[0]);
          setLastName(fullName[1]);
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
        <Box
          minWidth="300px"
          width="25%"
          display="flex"
          justifyContent="center"
          m="auto"
          p="32px" // add to constants file
          border={2}
          borderColor="primary.main"
        >
          {firstName ? (
            <div>
              <Typography align="center" color="primary" variant="h3">
                {firstName}
              </Typography>
              <Typography align="center" color="primary" variant="h3">
                {lastName}
              </Typography>
            </div>
          ) : (
            <Typography align="center" color="primary" variant="h3">
              Unknown User
            </Typography>
          )}
        </Box>
      </div>
      <div className="ministries">
        <Typography align="center" color="primary" variant="h5">
          I AM SERVING IN:
        </Typography>
        <Grid container spacing={2}>
          <MinistryIcon ministry="Announcements"></MinistryIcon>
          <MinistryIcon ministry="AV"></MinistryIcon>
          <MinistryIcon ministry="Bible"></MinistryIcon>
          <MinistryIcon ministry="Communion"></MinistryIcon>
          <MinistryIcon ministry="Offering"></MinistryIcon>
          <MinistryIcon ministry="Worship"></MinistryIcon>
        </Grid>
      </div>
    </div>
  );
};
export { Home };

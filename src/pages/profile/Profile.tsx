import React from "react";
import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { MinistryIcon } from "../../shared-components/ministryIcon/ministryIcon";
import "./Profile.css";

const Profile = () => {
  const { authState, authService } = useOktaAuth();
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [ministries, setMinistries] = useState<MinistryInterface[] | null>(
    null
  );

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setFirstName(null);
      setLastName(null);
    } else {
      const accessToken = authState.accessToken;

      const response = axios
        .get("http://localhost:8080/profile/1", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          console.log(response);
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setMinistries(response.data.ministries);
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

  interface MinistryInterface {
    id: string;
    name: string;
  }

  const displayVolunteerMinistry = (ministry: MinistryInterface) => {
    return (
      <Grid item key={ministry.id}>
        <MinistryIcon ministry={ministry.name}></MinistryIcon>
      </Grid>
    );
  };

  const button = authState.isAuthenticated ? logoutButton : loginButton;

  return (
    <div>
      <Grid container direction="column" spacing={10}>
        <Grid item>{button}</Grid>
        <Grid item>
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
        </Grid>
        <Grid item>
          <Typography align="center" color="primary" variant="h5">
            I AM SERVING IN:
          </Typography>
        </Grid>
        {ministries ? (
          <Grid container justify="center" alignItems="flex-end" spacing={5}>
            {ministries.map((ministry) => displayVolunteerMinistry(ministry))}
          </Grid>
        ) : (
          <Grid container justify="center">
            <div>No ministries to display</div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
export { Profile };

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
        // .get("https://5efb3c5e80d8170016f7621c.mockapi.io/api/volunteer/1")
        .then((response) => {
          console.log(response);
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setMinistries(response.data.ministries);
          // setMinistries([response.data.ministries[0]]);
        });
    }
  }, [authState, authService]); // Update if authState changes

  // this.setState(prevState => ({
  //   arrayvar: [...prevState.arrayvar, newelement]
  // }))
  // const prevState = ministries
  // const newState = ministries.map((ministry) => prevState.push(ministry))
  // setMinistries(newState)

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
      <Grid item>
        <MinistryIcon ministry={ministry.name}></MinistryIcon>
      </Grid>
    );
  };

  const button = authState.isAuthenticated ? logoutButton : loginButton;

  // axios
  //   .get("http://localhost:8080/test")
  //   .then((response) => console.log(response));

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
        <Grid container justify="center" alignItems="flex-end" spacing={5}>
          {ministries ? (
            ministries.forEach((ministry) => {
              displayVolunteerMinistry(ministry);
            })
          ) : (
            <div>No ministries to display</div>
          )}
          {/* <Grid item>
            <MinistryIcon ministry="Announcements"></MinistryIcon>
          </Grid> */}
          {/* <Grid item>
            <MinistryIcon ministry="AV"></MinistryIcon>
          </Grid>
          <Grid item>
            <MinistryIcon ministry="Bible"></MinistryIcon>
          </Grid>
          <Grid item>
            <MinistryIcon ministry="Communion"></MinistryIcon>
          </Grid>
          <Grid item>
            <MinistryIcon ministry="Offering"></MinistryIcon>
          </Grid>
          <Grid item>
            <MinistryIcon ministry="Worship"></MinistryIcon>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
};
export { Home };

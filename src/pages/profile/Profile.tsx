import React from "react";
import "./Profile.css";
import { Grid } from "@material-ui/core";
import { ProfileName } from "./Name";

export const Profile = () =>{
    return (
        <Grid className="profilePage" container direction="column" justify="flex-start" alignItems="center">
            <ProfileName/>
        </Grid>
    )
};

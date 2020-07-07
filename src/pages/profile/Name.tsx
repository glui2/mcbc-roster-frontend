import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import ProfileIcon from "../../shared-components/icons/ProfileIcon";
import "./Name.css";
import theme from "../../theme";

export const ProfileName = () => {
    return (
        <Grid container direction="column" justify="flex-start" alignItems="center" spacing={2}>
            <Grid item>
                <ProfileIcon className="profileIcon"/>
            </Grid>
            <Grid item>
                <Box
                    m="auto"
                    p={theme.spacing(2)} // add to constants file
                    border={2}
                    borderColor="primary.main"
                    className="nameBorder"
                >
                    <Grid container direction="column" justify="flex-start" alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography variant="h1">Reyna</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h1">Tan</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
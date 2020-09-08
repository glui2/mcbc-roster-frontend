import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AnnounceIcon from "./AnnouncementsIcon.png";
import AVIcon from "./AVIcon.png";
import BibleIcon from "./BibleReadingIcon.png";
import CommunionIcon from "./CommunionIcon.png";
import OfferingIcon from "./OfferingIcon.png";
import WorshipIcon from "./WorshipIcon.png";
import "./MinistryIcon.css";
import { type } from "os";

interface MinistryIconInterface {
  labelIsVisible: Boolean;
  ministry: MinistryName;
}

// ministry only accepts these strings
export type MinistryName =
  | "Announcements"
  | "AV"
  | "BibleReading"
  | "Communion"
  | "Offering"
  | "Worship";

const MinistryIcon = (props: MinistryIconInterface) => {
  var iconImage = "";
  const labelDisplay = props.labelIsVisible ? "inline" : "none";
  var labelText = "";

  switch (props.ministry) {
    case "Announcements":
      iconImage = AnnounceIcon;
      labelText = "Announcements";
      break;
    case "AV":
      iconImage = AVIcon;
      labelText = "AV";
      break;
    case "BibleReading":
      iconImage = BibleIcon;
      labelText = "Bible Reading";
      break;
    case "Communion":
      iconImage = CommunionIcon;
      labelText = "Communion";
      break;
    case "Offering":
      iconImage = OfferingIcon;
      labelText = "Offering";
      break;
    case "Worship":
      iconImage = WorshipIcon;
      labelText = "Worship";
      break;
  }

  return (
    <div className="ministryIcon">
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        spacing={2}
      >
        <Grid item>
          <img
            className="iconImage"
            src={iconImage}
            data-testid={`${labelText}Icon`}
          ></img>
        </Grid>
        <Grid item>
          <Box display={labelDisplay}>
            <Typography color="primary" variant="body1">
              {labelText}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export { MinistryIcon };

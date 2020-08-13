import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import AnnounceIcon from "./AnnouncementsIcon.png";
import AVIcon from "./AVIcon.png";
import BibleIcon from "./BibleReadingIcon.png";
import CommunionIcon from "./CommunionIcon.png";
import OfferingIcon from "./OfferingIcon.png";
import WorshipIcon from "./WorshipIcon.png";
import "./ministryIcon.css";

const MinistryIcon = (props: any) => {
  var iconImage = "";
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
    case "Bible":
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
          <img className="iconImage" src={iconImage}></img>
        </Grid>
        <Grid item>
          <Typography color="primary" variant="body1">
            {labelText}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export { MinistryIcon };

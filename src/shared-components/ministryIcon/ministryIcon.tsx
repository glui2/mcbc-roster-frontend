import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
      <img src={iconImage}></img>
      <Typography align="center" color="primary" variant="h5">
        {labelText}
      </Typography>
    </div>
  );
};

export { MinistryIcon };

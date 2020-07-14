import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e53232",
    },
    secondary: {
      main: "#32669d",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Archivo Narrow", "Roboto", "sans-serif"].join(","),
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        border: "solid",
        borderRadius: "100px",
        borderWidth: "2px",
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        width: "15vw",
        minWidth: "200px",
        maxWidth: "500px",
      },
    },
  },
});

export default theme;

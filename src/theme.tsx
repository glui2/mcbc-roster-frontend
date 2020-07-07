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
});

export default theme;

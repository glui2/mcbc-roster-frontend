import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e53232",
      contrastText: "#fff",
    },
    secondary: {
      main: "#32669d",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#e53232",
    }
  },
  typography: {
    fontFamily: ["Archivo Narrow", "Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: 50,
      letterSpacing: 12.5,
    },
    h2: {
      fontSIze: 30,
    }
  },
  spacing: 4
});

export default theme;

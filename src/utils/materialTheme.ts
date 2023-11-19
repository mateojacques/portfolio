import { createTheme } from "@mui/material/styles";

const bodyElement = document.querySelector("body") as Element;
const bodyComputedStyle = window.getComputedStyle(bodyElement);

const textColor = bodyComputedStyle.getPropertyValue("--text-color");

const accentColor = bodyComputedStyle.getPropertyValue("--accent");

const theme = createTheme({
  palette: {
    primary: {
      main: textColor,
    },
    secondary: {
      main: accentColor,
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: "Rubik, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
});

export default theme;

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1E1E1E",
    },
    primary: {
      main: "#302f33",
    },
    secondary: {
      main: "#D1EDD2",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 13,
    h1: {
      fontFamily: "Nunito sans",
      fontSize: 40,
    },
    h2: {
      fontFamily: "Nunito sans",
      fontSize: 38,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "1.5em",
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export const ThemeConfig = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

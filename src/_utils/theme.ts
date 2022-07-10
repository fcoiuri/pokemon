import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Pokemon Solid", "sans-serif"].join(","),
      fontSize: 16,
      color: "#ffcb05",
      letterSpacing: "0.3rem!important",
      textShadow:
        "0.2rem 0.2rem 0.2rem #3c5aa6, 0.2rem 0.2rem 0.2rem #3c5aa6, 0 0 0.2rem #3c5aa6, 0.2rem 0 0.2rem #3c5aa6",
      textTransform: "capitalize",
    },
  },
  palette: {
    primary: {
      main: '#2a75bb',
      dark: '#3c5aa6',
    },
    secondary: {
      main: '#ffcb05',
    },
  }
});

import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const useStyles = makeStyles(() =>
  createStyles({
    name: {
      textTransform: "capitalize",
      fontWeight: 'bold',
    },
    card: {
      border: '2px solid #E5E4E2',
      borderRadius: '2rem',
    }
  })
);

import { createStyles, makeStyles } from "@mui/styles";
import {theme} from './../../_utils/theme'


export const useStyles = makeStyles(() =>
  createStyles({
    card: {
      border: `2px solid ${theme.palette.secondary.main}`,
      borderRadius: "2.5rem",
      maxWidth: 280,
      margin: "0 auto",
      padding: "0.1em",
    },
    cardClick: {
      zIndex: 1,
      height: "inherit",
    },
    image: {
      paddingTop: "1em!important",
    },
  })
);

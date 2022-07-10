import { createStyles, makeStyles } from "@mui/styles";
import {theme} from './../../_utils/theme'


export const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      width: '7rem'
    },
    navbar: {
      marginBottom: '1.5rem',
      backgroundColor: `${theme.palette.primary.dark} !important`
    }
  })
);

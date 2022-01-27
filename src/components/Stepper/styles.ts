import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles =  makeStyles((theme: Theme) => ({
  iconContainer: {
    border: "1px solid",
    borderRadius: "50%",
    padding: `${theme.spacing(0.5)} !important`,
  },
  nonBorderIconContainer: {
    borderColor: "white"
  },
  borderedIconContainer: {
    borderColor: theme.palette.error.main
  },
  altLabel: {
    marginTop: `${theme.spacing(0.5)} !important`,
    fontWeight: `${theme.typography.fontWeightBold} !important` 
  }, 
  root: {
    width: "auto"
  }
}));

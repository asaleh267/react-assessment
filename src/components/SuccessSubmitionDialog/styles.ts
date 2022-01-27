import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  iconRoot: {
    fontSize: "120px",
    color: theme.palette.success.light,
  },
  button: {
    backgroundColor: theme.palette.error.main,
    color: "white",
    margin: "auto"
  },
  paper: {
    width: 480,
    padding: theme.spacing(0, 3, 3)
  }
}));

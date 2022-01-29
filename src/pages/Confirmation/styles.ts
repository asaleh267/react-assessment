import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    svg: {
        color: theme.palette.error.main
    },
    button: {
        backgroundColor: theme.palette.error.main,
        color: "white",
        marginLeft: theme.spacing(2),
        "&:hover": {
            backgroundColor: theme.palette.error.main,
        }
    },
    backButton: {
        marginRight: theme.spacing(2),
        backgroundColor: theme.palette.grey["600"],
        "&:hover": {
            backgroundColor: theme.palette.grey["600"]
        }
    }
}));

import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        fontStyle: "italic",
        color: theme.palette.error.main
    }
}));

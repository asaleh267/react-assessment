import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    greyContainer: {
        backgroundColor: theme.palette.grey[200],
        boxSizing: "border-box"
    },
    whiteContainer: {
        boxSizing: "border-box",
        backgroundColor: "white",
        borderStyle: "dashed",
        borderRadius: Number(theme.shape.borderRadius) * 12
    }
}));

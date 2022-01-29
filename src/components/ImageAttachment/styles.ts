import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useImageAttachmentStyles = makeStyles((theme: Theme) => ({
    imageAttachment: {
      border: "1px solid",
      borderStyle: "dashed",
      position: "relative",
      height: 150,
      marginBottom: theme.spacing(2)
    },
    uploadImageButton: {
      height: "100%",
    },
    dashedBorder: {
      "&:hover": {
        border: "1px dashed rgba(0, 0, 0, 0.87)",
      },
    },
    icon: {
      height: 80,
      width: 80,
    },
    attachmentsIconWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    attachmentsIcon: {
      display: "block",
      fontSize: theme.typography.pxToRem(64),
    },
    disabledAttachmentsList: {
      backgroundColor: theme.palette.action.disabledBackground,
    },
    centerVertically: {
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      width: "100%",
    },
    mb2: {
      marginBottom: theme.spacing(2),
    },
    uploadText: {
      fontSize: theme.typography.pxToRem(14),
      textTransform: "capitalize",
      fontWeight: 500,
    },
    attachment: {
      width: "100%",
      height: "100%",
      borderRadius: theme.shape.borderRadius,
    },
    deleteOverlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: theme.shape.borderRadius,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-end",
      "& button": {
        visibility: "hidden",
      },
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        "& button": {
          visibility: "unset",
        },
      },
    },
    deleteIcon: {
      fill: "white",
    },
    disabled: {
      color: theme.palette.grey[500],
    },
  }));
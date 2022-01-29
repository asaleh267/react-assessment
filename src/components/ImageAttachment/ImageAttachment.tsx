import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PersonIcon from '@mui/icons-material/Person';
import cn from "classnames";
import * as React from "react";
import { useImageAttachmentStyles } from "./styles";
import { DisplayAttachment, ImageAttachmentProps } from "./types";
import useAttachments from "./useAttachments";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Webcam from "react-webcam";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const ImageAttachment: React.FC<ImageAttachmentProps> = props => {
  const classes = useImageAttachmentStyles(props);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef?.current;
      console.log(imageSrc)
    },
    [webcamRef]
  );

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const {
    attachmentsLength,
    onFilesExplorerOpen,
    onAttachmentRemove,
    getInputProps,
    getRootProps,
  } = useAttachments({
    acceptableExtensions: ["png", "jpg", "jpeg"],
    attachments: [props.attachment as DisplayAttachment],
    allowMultiple: false,
    ...props,
  });

  const showUpload = !props.isLoading && !props.fileToPreview?.fileUrl;
  const showImage = !props.isLoading && props.fileToPreview?.fileUrl;

  return (
    <Box className={classes.container}>
      <input {...getInputProps()} />
      <Box
        className={cn(
          classes.imageAttachment,
          { [classes.disabledAttachmentsList]: props.isDisabled && !props.isLoading },
          { [classes.centerVertically]: attachmentsLength === 0 },
          { [classes.dashedBorder]: !props.isDisabled && !showImage && !props.isLoading }
        )}
        {...getRootProps()}
      >
        {props.isLoading && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <CircularProgress className={cn(classes.icon, classes.mb2)} />
            <Typography classes={{ root: classes.uploadText }} color={"primary"}>
              Loading
            </Typography>
          </Box>
        )}

        {showUpload && (
          <Button
            fullWidth
            className={classes.uploadImageButton}
            onClick={onFilesExplorerOpen}
            disabled={props.isDisabled}
          >
            <Box display="flex" alignItems="center">
              <Box className={classes.attachmentsIconWrapper}>
                <PersonIcon
                  className={cn(
                    classes.icon,
                    classes.attachmentsIcon,
                    props.isDisabled ? classes.disabled : null
                  )}
                  color="primary"
                />
                <Box display={"flex"} alignItems="center" justifyContent="center" flexDirection={"column"}>
                  <CameraAltIcon/>
                  <UploadFileIcon/>
                </Box>
              </Box>
            </Box>
          </Button>
        )}

        {showImage && (
          <>
            {!props.isDisabled && (
              <div className={classes.deleteOverlay}>
                <Tooltip title="Remove" arrow enterDelay={600}>
                  <IconButton
                    aria-label="delete"
                    onClick={onAttachmentRemove(props.attachment?.id || "")}
                  >
                    <DeleteIcon fontSize="small" className={classes.deleteIcon} />
                  </IconButton>
                </Tooltip>
              </div>
            )}
            <img
              src={props.fileToPreview?.fileUrl}
              className={classes.attachment}
              alt={props.fileToPreview?.name ?? ""}
            />
          </>
        )}
      </Box>
      {/* <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      /> */}
      {/* <button onClick={capture}>Capture photo</button> */}
    
    </Box>
  );
};

export default ImageAttachment;

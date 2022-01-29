import { Box, CircularProgress, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageAttachment from '../../components/ImageAttachment/ImageAttachment';
import { Attachment } from '../../components/ImageAttachment/types';
import Signature from '../../components/Signature/Signature';
import SuccessSubmitionDialog from '../../components/SuccessSubmitionDialog/SuccessSubmitionDialog';
import { selectOfficeInfo } from '../OfficeInfo/ducks/selectors';
import { selectPersonalInfo } from '../PersonalInfo/ducks/selectors';
import { confirmAttachments } from '../Registration/API';
import { selectConfirmation, selectIsLoading } from './ducks/selectors';
import { ConfirmationProps } from './types';
import * as actions from './ducks/actions';
import LoadingButton from '@mui/lab/LoadingButton';
import { useStyles } from './styles';

const Confirmation: FunctionComponent<ConfirmationProps> = ({ onBack, onDone }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const personalInfo = useSelector(selectPersonalInfo);
  const officeInfo = useSelector(selectOfficeInfo);
  const { name, mobileNumber, email, addressLine3 } = personalInfo;
  const { buildingName, area, landLineNumber, poBoxNumber } = officeInfo;
  const [actionLabel, setActionLabel] = React.useState("Submit");

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const confirmation = useSelector(selectConfirmation);
  console.log(confirmation)

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const handleAddAttachment = (file: Attachment) => {
    dispatch(actions.addAttachment({
      id: file.id,
      name: file.name,
      fileUrl: URL.createObjectURL(file)
    }))
  }

  const handleRemoveAttachment = () => {
    dispatch(actions.removeAttachment());
  }

  const handleSubmit = () => {
    dispatch(actions.saveConfirmationData());
    confirmAttachments(confirmation).then(x => {
      dispatch(actions.saveConfirmationDataSucceeded(confirmation));
      setOpen(true);
      onDone()
    }).catch(x => {
      dispatch(actions.saveConfirmationDataFailed());
      setActionLabel("Retry");
    });
  }

  return (
    <>
      <Grid container px={2}>
        <Grid item xs={12} md={4} textAlign={"left"}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="h6">{email}</Typography>
          <Typography variant="h6">{mobileNumber}</Typography>
          <Typography variant="h6">{personalInfo.addressLine1}</Typography>
          <Typography variant="h6">{personalInfo.addressLine2}</Typography>
          <Typography variant="h6">{addressLine3}</Typography>
        </Grid>
        <Grid item xs={12} md={4} textAlign={"left"}>
          <Typography variant="h6">{buildingName}</Typography>
          <Typography variant="h6">{area}</Typography>
          <Typography variant="h6">{landLineNumber}</Typography>
          <Typography variant="h6">{officeInfo.addressLine1}</Typography>
          <Typography variant="h6">{officeInfo.addressLine2}</Typography>
          <Typography variant="h6">{poBoxNumber}</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <ImageAttachment fileToPreview={confirmation.imageFile} onAttachmentAdd={(attachments => handleAddAttachment(attachments[0]))} canRemoveAttachments={true}
            onAttachmentRemove={handleRemoveAttachment}
          />
          {confirmation.signatureUrl ? <img src={confirmation.signatureUrl} alt="signature"/> : <Signature onTrim={(data) => dispatch(actions.addSignature(data.trimmedDataURL))}/>}
        </Grid>
      </Grid>
      <Box mx="auto" my={2}>
        <Button variant="contained" classes={{root: classes.backButton}} onClick={onBack}>Back</Button>
        <LoadingButton
          classes={{ root: classes.button }}
          loadingIndicator={<CircularProgress size={24} classes={{ svg: classes.svg }} />}
          loading={isLoading}
          variant="contained"
          onClick={handleSubmit}
        >
          {actionLabel}
        </LoadingButton>
      </Box>
      <SuccessSubmitionDialog isOpen={open} onClose={handleCloseDialog} />
    </>
  );
};

export default Confirmation;

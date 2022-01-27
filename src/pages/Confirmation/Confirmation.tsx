import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import SuccessSubmitionDialog from '../../components/SuccessSubmitionDialog/SuccessSubmitionDialog';
import { selectOfficeInfo } from '../OfficeInfo/ducks/selectors';
import { selectPersonalInfo } from '../PersonalInfo/ducks/selectors';
import { ConfirmationProps } from './types';

const Confirmation: FunctionComponent<ConfirmationProps> = ({onBack}) => {
  const [open, setOpen] = React.useState(false);
  const personalInfo = useSelector(selectPersonalInfo);
  const officeInfo = useSelector(selectOfficeInfo);
  const {name, mobileNumber, email, addressLine3} = personalInfo;
  const {buildingName, area, landLineNumber, poBoxNumber} = officeInfo;

  const handleCloseDialog = () => {
    setOpen(false);
  }
  return (
    <>
    <Grid container px={2}>
      <Grid item xs={4} textAlign={"left"}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h6">{email}</Typography>
        <Typography variant="h6">{mobileNumber}</Typography>
        <Typography variant="h6">{personalInfo.addressLine1}</Typography>
        <Typography variant="h6">{personalInfo.addressLine2}</Typography>
        <Typography variant="h6">{addressLine3}</Typography>
      </Grid>
      <Grid item xs={4} textAlign={"left"}>
      <Typography variant="h6">{buildingName}</Typography>
      <Typography variant="h6">{area}</Typography>
      <Typography variant="h6">{landLineNumber}</Typography>
      <Typography variant="h6">{officeInfo.addressLine1}</Typography>
      <Typography variant="h6">{officeInfo.addressLine2}</Typography>
      <Typography variant="h6">{poBoxNumber}</Typography>

      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
    <Button variant="contained" onClick={onBack}>Back</Button>
    <Button variant="contained" onClick={() => setOpen(true)}>Submit</Button>
    <SuccessSubmitionDialog isOpen={open} onClose={handleCloseDialog}/>
    </>
  );
};

export default Confirmation;

import React, { FunctionComponent } from 'react';
import { useStyles } from './styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { SuccessSubmitionDialogProps } from './types';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Typography } from '@mui/material';

const SuccessSubmitionDialog: FunctionComponent<SuccessSubmitionDialogProps> = (props) => {
  const { isOpen, onClose } = props;
  const classes = useStyles();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={onClose}
      classes={{
        paper: classes.paper
      }}
    >
      <DialogContent classes={{ root: classes.root }}>
        <DialogContentText>
          <CheckCircleOutlineIcon classes={{ root: classes.iconRoot }} />
          <Typography variant="h3">Success</Typography>
          <Typography variant="h6">Your application has been submitted.</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions >
        <Button autoFocus classes={{ root: classes.button }} onClick={onClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessSubmitionDialog;

import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { useStyles } from './styles';
import { ValidationErrorProps } from './types';


const ValidationError: FunctionComponent<ValidationErrorProps> = (props) => {
  const {message } = props;
  const classes = useStyles();

  return (
      <Typography variant="subtitle1" classes={{root: classes.root}}>{message}</Typography>
  );
};

export default ValidationError;

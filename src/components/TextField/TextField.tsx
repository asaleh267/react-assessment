import TextField from '@mui/material/TextField';
import React from 'react';
import { useStyles } from './styles';
import { useField } from "formik";
import { RakTextFieldProps } from './types';

const RakTextField: React.FC<RakTextFieldProps> = ({
  shouldShowHelperText = false,
  ...props
}) => {
  const classes = useStyles();
  const [field, meta, helpers] = useField(props.name);
  const hasError = !!(meta.touched && meta.error) || props.error;
  const helperMessage = props.helperText ?? (hasError ? meta.error : undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    helpers.setTouched(true);
    field.onChange(event);
    props?.onChange?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    field.onBlur(event);
    props?.onBlur?.(event);
  };

  return (
    <TextField
      {...props}
      value={field.value}
      helperText={shouldShowHelperText ? helperMessage : undefined}
      error={shouldShowHelperText ? hasError: false}
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{
        classes: {
          input: classes.input
        }
      }}
    />
  );
};

export default RakTextField;

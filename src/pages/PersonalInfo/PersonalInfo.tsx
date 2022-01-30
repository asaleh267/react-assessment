import Grid from '@mui/material/Grid';
import React, { FunctionComponent } from 'react';
import ValidationError from '../../components/ValidationError/ValidationError';
import RakTextField from '../../components/TextField/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { Formik } from 'formik';
import { personalInfoSchema } from './schema';
import { getErrorMessageByObject } from '../../utils/errorUtils';
import { PersonalInfoProps } from './types';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectPersonalInfo } from './ducks/selectors';
import * as actions from './ducks/actions';
import { Box } from '@mui/system';
import { submitPersonalInfo } from '../Registration/API';
import { CircularProgress } from '@mui/material';
import { useStyles } from './styles';
import { fields } from './constants';

const PersonalInfo = React.forwardRef<
  HTMLDivElement,
  PersonalInfoProps
>((props, ref) => {
  const { onNext } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const isLoading = useSelector(selectIsLoading);
  const personalInfo = useSelector(selectPersonalInfo);
  const [actionLabel, setActionLabel] = React.useState("Next");

  const [validationErrorMsg, setValidationErrorMsg] = React.useState("");

  const setErrors = (errors: any) => {
    const errorMsg = getErrorMessageByObject(errors, fields.map(field => field.id), ", ");
    setValidationErrorMsg(errorMsg)
  }

  return (
    <Box ref={ref}>
      <Formik
      validateOnMount
        initialValues={{
          ...personalInfo,
        }}
        enableReinitialize
        onSubmit={({ ...values }, {validateForm}) => {
          validateForm(values);
          dispatch(actions.savePersonalInfoData());
          submitPersonalInfo(values).then(x => {
            dispatch(actions.savePersonalInfoDataSucceeded(values));
            setActionLabel("Next");
            onNext();
          }).catch(x => {
            dispatch(actions.savePersonalInfoDataFailed());
            setActionLabel("Retry");
          });
        }}
        validationSchema={personalInfoSchema}
      >
        {({
          handleSubmit,
          errors,
          isValid,
          dirty,
          values
        }) => (
          <>
            <ValidationError message={validationErrorMsg} />
            <Grid container>
              <Grid item md={8}>
                {fields.map(field => (
                  <Grid container display={"flex"} alignItems={"center"} mb={2} key={field.id}>
                    <Grid item xs={5} md={6} textAlign={"right"} pr={1}>{field.name}</Grid>
                    <Grid item xs={7} md={6} textAlign={"center"}>
                      <RakTextField name={field.id} />
                    </Grid>
                  </Grid>
                )
                )}
              </Grid>
              <Grid item md={4} display={"flex"} mx={"auto"} alignItems={"center"} justifyContent={"center"}>
                <LoadingButton
                  classes={{ root: classes.button }}
                  loadingIndicator={<CircularProgress size={24} classes={{ svg: classes.svg }} />}
                  loading={isLoading}
                  variant="contained"
                  onClick={(e) => {
                    if (isValid && dirty) {
                      handleSubmit();
                    } else if (isValid) {
                      onNext()
                    } else {
                      errors && setErrors(errors);
                    }
                  }}
                >
                  {actionLabel}
                </LoadingButton>
              </Grid>
            </Grid>
          </>
        )}
      </Formik>
    </Box>
  )

});

export default PersonalInfo;

import Grid from '@mui/material/Grid';
import React, { FunctionComponent } from 'react';
import ValidationError from '../../components/ValidationError/ValidationError';
import RakTextField from '../../components/TextField/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { Formik } from 'formik';
import { personalInfoSchema } from './schema';
import { getErrorMessageByObject } from '../../utils/errorUtils';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectOfficeInfo } from './ducks/selectors';
import { saveOfficeInfoData } from './ducks/actions';
import { OfficeInfoProps } from './types';
import Button from '@mui/material/Button';

const OfficeInfo: FunctionComponent<OfficeInfoProps> = ({onNext}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const officeInfo = useSelector(selectOfficeInfo);
  const [validationErrorMsg, setValidationErrorMsg] = React.useState("");

  const fields = [
    {id: "buildingName", name: "Building Name"},
    {id: "area", name: "Area"},
    {id: "landLineNumber", name: "Landline Number"},
    {id: "addressLine1", name: "Address Line 1"},
    {id: "addressLine2", name: "Address Line 2"},
    {id: "poBoxNumber", name: "PO Box Number"},
  ]

  const setErrors = (errors: any) => {
    const errorMsg = getErrorMessageByObject(errors, fields.map(field => field.id), ", ");
    setValidationErrorMsg(errorMsg)
  }

  return (
<Formik
      initialValues={{
        ...officeInfo
      }}
      onSubmit={({ ...values }) => {
        dispatch(saveOfficeInfoData(values))
      }}
      validationSchema={personalInfoSchema}
    >
      {({
        values,
        handleSubmit,
        submitForm,
        errors,
        isValid
      }) => (    
      <>
      <ValidationError message={validationErrorMsg} />
      {fields.map(field => (
        <Grid container display={"flex"} alignItems={"center"} mb={2}  key={field.id}>
        <Grid item xs={5} md={6} textAlign={"right"} paddingRight={3}>{field.name}</Grid>
        <Grid item xs={7} md={6} textAlign={"left"}>
          <RakTextField name={field.id}/>
        </Grid>
      </Grid>
        )
      )}
    <LoadingButton
      loadingIndicator="Loading..."
      loading={isLoading}
        variant="contained"
        onClick={() =>{
          if (isValid) {
            handleSubmit();
            onNext();
          } else {
          errors && setErrors(errors);
          }
        }
        }
>
  Next
</LoadingButton>  
</>

  )}
  </Formik>
    )

  };

export default OfficeInfo;

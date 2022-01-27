import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const personalInfoSchema = yup.object({
  name: yup
    .string()
    .trim()
    .nullable()
    .max(200, "Name must be under 200 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email()
    .required("Email is required"),
  mobileNumber: yup
    .string()
    .required("Mobile number is required")
    .matches(phoneRegExp, 'Mobile number is not valid'),
  addressLine1: yup
    .string()
    .required("Address 1 is required"),
  addressLine2: yup
    .string()
    .required("Address 2 is required"),
  addressLine3: yup
    .string()
    .required("Address 3 is required"),
});

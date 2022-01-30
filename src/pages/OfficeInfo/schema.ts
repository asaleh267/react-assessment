import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const officeInfoSchema = yup.object({
  buildingName: yup
    .string()
    .trim()
    .nullable()
    .required("Building name is required"),
  area: yup
    .string()
    .required("Area is required"),
  landLineNumber: yup
    .string()
    .required("Land line is required")
    .matches(phoneRegExp, 'Phone number is not valid'),
  addressLine1: yup
    .string()
    .required("Address 1 is required"),
  addressLine2: yup
    .string()
    .required("Address 2 is required"),
  poBoxNumber: yup
    .string()
    .required("PO Box is required"),
});

import { TextFieldProps } from "@mui/material/TextField";

export interface RakTextFieldProps extends Omit<TextFieldProps, "name" | "value"> {
    name: string;
    shouldShowHelperText?: boolean;
}

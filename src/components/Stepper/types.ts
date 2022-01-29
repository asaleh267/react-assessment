import { StepperProps } from "@mui/material";
export interface RakStepperProps extends StepperProps {
    steps: Array<string>;
    completed: {
    [k: number]: boolean;
  };
    onStepClick: (index: number) => void;
}
import { StepperProps } from "@mui/material";

interface Step {
    label: string;
    isCompleted: boolean;
}
export interface RakStepperProps extends StepperProps {
    steps: Array<Step>;
    onStepClick: (index: number) => void;
}
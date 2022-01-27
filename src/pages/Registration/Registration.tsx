import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FunctionComponent } from 'react';

import DashedFrame from '../../components/DashedFrame/DashedFrame';
import RakStepper from '../../components/Stepper/Stepper';
import Confirmation from '../Confirmation/Confirmation';
import OfficeInfo from '../OfficeInfo/OfficeInfo';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
export interface RegistrationProps {

}
const steps = ['Personal Info', 'Office Info', 'Confirmation Page'];

const Registration: FunctionComponent<RegistrationProps> = props => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => {
    if (step < activeStep) {
      setActiveStep(step);

    }
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
      <Box paddingX={2} height={164}>
        <Typography variant="h6" fontWeight={"bold"} textAlign={"left"}>
          {steps[activeStep]}
        </Typography>
        <RakStepper
          steps={[
            {
              label: "Personal Info",
              isCompleted: true,
            },
            {
              label: "Office Info",
              isCompleted: false,
            },
            {
              label: "Confirmation",
              isCompleted: false,
            },
          ]}
          activeStep={activeStep}
          onStepClick={(index) => {
            handleStep(index);
          }}
        ></RakStepper>
      </Box>
      <DashedFrame height="calc(100vh - 220px)">
        {steps[activeStep] === "Personal Info" && (
          <PersonalInfo onNext={handleNext} />
        )}
        {steps[activeStep] === "Office Info" && <OfficeInfo onNext={handleNext} />}
        {steps[activeStep] === "Confirmation Page" && (
          <Confirmation onBack={handleBack} />
        )}
      </DashedFrame>
    </>
  );
};

export default Registration;



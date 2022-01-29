import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
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

  const containerRef = React.useRef(null);

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
      setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    if (!isLastStep()) {
      handleNext();
    }
  };

  return (
    <>
      <Box paddingX={2} height={164}>
        <Typography variant="h6" fontWeight={"bold"} textAlign={"left"}>
          {steps[activeStep]}
        </Typography>
        <RakStepper
          steps={steps}
          activeStep={activeStep}
          completed={completed}
          onStepClick={(index) => {
            handleStep(index);
          }}
        ></RakStepper>
      </Box>
      <DashedFrame height="calc(100vh - 220px)" ref={containerRef}>
        {steps[activeStep] === "Personal Info" && <Slide direction="left" in={steps[activeStep] === "Personal Info"} container={containerRef.current}>
          <PersonalInfo onNext={handleComplete} />
        </Slide>}
        {steps[activeStep] === "Office Info" && <Slide direction="left" in={steps[activeStep] === "Office Info"} container={containerRef.current}>
          <OfficeInfo onNext={handleComplete} />
        </Slide>}
        {steps[activeStep] === "Confirmation Page" && (
          <Confirmation onBack={handleBack} onDone={handleComplete}/>
        )}
      </DashedFrame>
    </>
  );
};

export default Registration;


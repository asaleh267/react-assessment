import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import DashedFrame from '../../components/DashedFrame/DashedFrame';
import RakStepper from '../../components/Stepper/Stepper';
import Confirmation from '../Confirmation/Confirmation';
import { saveConfirmationDataSucceeded } from '../Confirmation/ducks/actions';
import { saveOfficeInfoDataSucceeded } from '../OfficeInfo/ducks/actions';
import OfficeInfo from '../OfficeInfo/OfficeInfo';
import { savePersonalInfoDataSucceeded } from '../PersonalInfo/ducks/actions';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import { getConfirmation, getOfficeInfo, getPersonalInfo } from './API';
export interface RegistrationProps {

}
const steps = ['Personal Info', 'Office Info', 'Confirmation Page'];

const Registration: FunctionComponent<RegistrationProps> = props => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  const dispatch = useDispatch();

  React.useEffect(() => {
    getPersonalInfo().then(x => {
      if(Object.keys(x.data).length !== 0) {
        dispatch(savePersonalInfoDataSucceeded(x.data))
        setActiveStep(1);
        setCompleted({
          0: true
        })
      }
    })

    getOfficeInfo().then(x => {
      if(Object.keys(x.data).length !== 0) {
        dispatch(saveOfficeInfoDataSucceeded(x.data))
        setActiveStep(2)
        setCompleted({
          0: true,
          1: true
        })
      }
    })

    getConfirmation().then(x => {
      if(Object.keys(x.data).length !== 0) {
        dispatch(saveConfirmationDataSucceeded(x.data))
        setActiveStep(2)
        setCompleted({
          0: true,
          1: true,
          2: true
        })
      }
    })
  }, []);

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


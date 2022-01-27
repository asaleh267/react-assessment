import React, { FunctionComponent } from 'react';
import { RakStepperProps  } from './types';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import { StepIconProps } from '@mui/material/StepIcon';
import { StepButton } from '@mui/material';
import cn from "classnames";
import { useStyles } from './styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const StyledStepIcon = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
      backgroundColor: theme.palette.grey[200],
      padding: theme.spacing(1),
      borderRadius: "50%",
      width: "24px",
      height: "24px",
      lineHeight: "24px",
      border: "1px solid",
      borderColor: theme.palette.error.main,
      opacity: "0.5",
      color: theme.palette.grey[600],
    ...(ownerState.active && {
      backgroundColor: theme.palette.error.main,  
      color: theme.palette.grey[50],
      opacity: "1",
    }),
    ...(ownerState.completed && {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.grey[50],
        opacity: "1",
    }),
  }));

  const StyledConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 30,
      left: 'calc(-50% + 48px)',
      right: 'calc(50% + 48px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.error.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  function StepIcon(props: StepIconProps, index: number) {
    const { active, completed, className } = props;  
    return (
      <StyledStepIcon ownerState={{ completed, active }} className={className}>
        {index + 1}
      </StyledStepIcon>
    );
  }



const RakStepper: FunctionComponent<RakStepperProps> = (props) => {
  const { steps, activeStep, onStepClick } = props;
  const classes = useStyles();

  return (
    <Stepper nonLinear activeStep={activeStep} alternativeLabel connector={<StyledConnector />}>
    {steps.map((step, index: number) => (
      <Step key={step.label} completed={step.isCompleted}>
        <StepButton onClick={() => step.isCompleted || index === activeStep ? onStepClick(index): onStepClick(index)} classes={{
          root: classes.root
        }}>
        <StepLabel StepIconComponent={(props) => StepIcon(props, index)} classes={{
            iconContainer: cn(classes.iconContainer, activeStep === index ? classes.borderedIconContainer: classes.nonBorderIconContainer),
            alternativeLabel: classes.altLabel
        }}
        >Step {index + 1}</StepLabel>
        </StepButton>
      </Step>
    ))}
  </Stepper>
  );
};

export default RakStepper;

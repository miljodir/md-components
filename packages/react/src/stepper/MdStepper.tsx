'use client';

import React, { useEffect, useRef, useId } from 'react';
import MdIconCheck from '../icons-material/MdIconCheck';
import { StepperProvider, useStepperContext } from './StepperContext';

export interface MdStepperProps {
  activeStep: number;
  scrollToActiveStep?: boolean;
  children: React.ReactElement[];
}

export const MdStepper: React.FunctionComponent<MdStepperProps> = ({
  activeStep,
  children,
  scrollToActiveStep = false,
}: MdStepperProps) => {
  const stepperId = `stepper_${useId()}`;
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (!firstUpdate.current && scrollToActiveStep) {
      const elem = document.getElementById(`${stepperId}_${activeStep}`);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
    firstUpdate.current = false;
  }, [activeStep, stepperId, scrollToActiveStep]);

  return (
    <StepperProvider value={{ activeStep, stepperId }}>
      <div className="md-stepper__stepper-container">
        <div className="md-stepper__stepper-list">
          {React.Children.map(children, (item, index) => {
            return (
              <div className="md-stepper__stepper-list-item" key={index} id={`${stepperId}_${index}`}>
                <StepTitle key={index} title={item.props.title} index={index} />
                <StepContent index={index} completedContent={item.props.completedContent}>
                  {item}
                </StepContent>
              </div>
            );
          })}
        </div>
      </div>
    </StepperProvider>
  );
};

export default MdStepper;

interface StepTitleProps {
  title: string;
  index: number;
}

const StepTitle = ({ title, index }: StepTitleProps) => {
  const { activeStep } = useStepperContext();

  if (index === activeStep) {
    // Step selected
    return (
      <div className="md-stepper__step-title">
        <div className="md-stepper__step-title-badge-outer-border selected">
          <div className="md-stepper__step-title-badge selected">{index + 1}</div>
        </div>
        <h4 className="md-stepper__selected">{title}</h4>
      </div>
    );
  } else if (index < activeStep) {
    // Step completed
    return (
      <div className="md-stepper__step-title">
        <div className="md-stepper__step-title-badge-outer-border">
          <div className="md-stepper__step-title-badge completed">
            <MdIconCheck width={20} />
          </div>
        </div>
        <h4 className="md-stepper__completed">{title}</h4>
      </div>
    );
  } else {
    // Step not reached yet
    return (
      <div className="md-stepper__step-title">
        <div className="md-stepper__step-title-badge-outer-border">
          <div className="md-stepper__step-title-badge disabled">{index + 1}</div>{' '}
        </div>
        <h4 className="md-stepper__disabled">{title}</h4>
      </div>
    );
  }
};

interface StepContentProps {
  index: number;
  completedContent?: React.ReactNode;
  children: React.ReactNode;
}

const StepContent = ({ index, completedContent, children }: StepContentProps) => {
  const { activeStep } = useStepperContext();

  if (index === activeStep) {
    return (
      <div className="md-stepper__step-content-container">
        <div className="md-stepper__step-content-sideline" />
        <div className="md-stepper__step-content-children">{children}</div>
      </div>
    );
  } else if (index < activeStep) {
    // Step completed
    return (
      <div className="md-stepper__step-content-container">
        <div className="md-stepper__step-content-sideline" />
        <div className="md-stepper__step-content-children completed">
          {completedContent ? completedContent : children}
        </div>
      </div>
    );
  } else {
    // Step not reached yet
    return (
      <div className="md-stepper__step-content-container">
        <div className="md-stepper__step-content-sideline disabled" />
        <div className="md-stepper__step-content-children" />
      </div>
    );
  }
};

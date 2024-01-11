import React from 'react';
import MdCheckIcon from '../icons/MdCheckIcon';

export interface MdStepperProps {
  activeStep: number;
  children: React.ReactElement[];
}

const MdStepper: React.FunctionComponent<MdStepperProps> = ({ activeStep, children }: MdStepperProps) => {
  return (
    <div className="md-stepper__stepper-container">
      <div className="md-stepper__stepper-list">
        {children.map((item, index) => {
          return (
            <div className="md-stepper__stepper-list-item" key={index}>
              <StepTitle key={index} title={item.props.title} index={index} activeStep={activeStep} />
              <StepContent index={index} activeStep={activeStep} completedContent={item.props.completedContent}>
                {item}
              </StepContent>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MdStepper;

interface StepTitleProps {
  title: string;
  index: number;
  activeStep: number;
}

const StepTitle = ({ title, index, activeStep }: StepTitleProps) => {
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
            <MdCheckIcon width={18} />
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
  activeStep: number;
  completedContent?: React.ReactNode;
  children: React.ReactNode;
}

const StepContent = ({ index, activeStep, completedContent, children }: StepContentProps) => {
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

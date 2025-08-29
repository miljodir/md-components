import React, { createContext, useContext } from 'react';

interface StepperContextValue {
  activeStep: number;
  stepperId: string;
}

const StepperContext = createContext<StepperContextValue | undefined>(undefined);

export const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error('useStepperContext must be used within a StepperProvider');
  }
  return context;
};

export const StepperProvider: React.FC<{
  value: StepperContextValue;
  children: React.ReactNode;
}> = ({ value, children }) => {
  return <StepperContext.Provider value={value}>{children}</StepperContext.Provider>;
};

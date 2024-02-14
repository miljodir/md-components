import React from 'react';

export interface MdStepProps {
  title: string;
  children: React.ReactNode;
  completedContent?: React.ReactNode;
}

const MdStep: React.FunctionComponent<MdStepProps> = ({ children }: MdStepProps) => {
  return <div>{children}</div>;
};

export default MdStep;

import React from 'react';

export interface MdStepProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
  completedContent?: React.ReactNode;
}

const MdStep: React.FunctionComponent<MdStepProps> = ({ children, ...otherProps }: MdStepProps) => {
  return <div {...otherProps}>{children}</div>;
};

export default MdStep;

'use client';

import React from 'react';

export interface MdStepProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
  completedContent?: React.ReactNode;
}

export const MdStep: React.FunctionComponent<MdStepProps> = ({ children, ...otherProps }: MdStepProps) => {
  // Destructure the title and completedContent props from the otherProps object so that they are not included in the div's attributes
  const { title, completedContent, ...rest } = otherProps;

  return <div {...rest}>{children}</div>;
};

export default MdStep;

'use client';

import React from 'react';

export interface MdStepProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
  completedContent?: React.ReactNode;
}

export const MdStep: React.FunctionComponent<MdStepProps> = ({ children, ...otherProps }: MdStepProps) => {
  // Destructure the title and completedContent props from the otherProps object
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, completedContent, ...rest } = otherProps;

  return <div {...rest}>{children}</div>;
};

export default MdStep;

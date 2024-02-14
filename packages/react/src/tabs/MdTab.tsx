import React from 'react';

export interface MdTabProps {
  title: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const MdTab: React.FunctionComponent<MdTabProps> = ({ children }: MdTabProps) => {
  return <div>{children}</div>;
};

export default MdTab;

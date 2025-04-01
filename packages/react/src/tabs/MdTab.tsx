import React from 'react';

export interface MdTabProps {
  title: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const MdTab: React.FunctionComponent<MdTabProps> = (props: MdTabProps) => {
  return <div {...props}></div>;
};

export default MdTab;

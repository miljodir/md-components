'use client';

import React from 'react';

export interface MdTabProps {
  title: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const MdTab: React.FunctionComponent<MdTabProps> = ({ children }: MdTabProps) => {
  return <>{children}</>;
};

export default MdTab;

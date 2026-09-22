'use client';

import React from 'react';

export interface MdTabProps {
  title: string;
  iconOnly?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  badge?: React.ReactNode;
  children: React.ReactNode;
}

export const MdTab: React.FunctionComponent<MdTabProps> = ({
  children,
  title,
  iconOnly,
  disabled,
  leftIcon,
  rightIcon,
  badge,
}: MdTabProps) => {
  void title;
  void iconOnly;
  void disabled;
  void leftIcon;
  void rightIcon;
  void badge;

  return <>{children}</>;
};

export default MdTab;

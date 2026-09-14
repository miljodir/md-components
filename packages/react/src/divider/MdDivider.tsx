'use client';

import React from 'react';
import classnames from 'classnames';

export interface MdDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  theme?: 'primary' | 'secondary' | 'tertiary';
}

export const MdDivider: React.FC<MdDividerProps> = ({
  theme = 'secondary',
  ...otherProps
}: MdDividerProps) => {


  const classNames = classnames(
    'md-divider',
    {
      'md-divider--primary': theme === 'primary',
      'md-divider--secondary': theme === 'secondary',
      'md-divider--tertiary': theme === 'tertiary',
    },
    otherProps.className,
  );


  return ( 
    <hr className={classNames} aria-hidden="true" />
  );
};

export default MdDivider;

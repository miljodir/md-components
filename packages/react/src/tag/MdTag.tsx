'use client';

import classnames from 'classnames';
import React from 'react';

export interface MdTagProps extends React.HTMLAttributes<HTMLBaseElement> {
  theme?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error';
  type?: 'base' | 'light' | 'outlined';
  label?: string;
}

export const MdTag: React.FC<MdTagProps> = ({
  theme = 'primary',
  type = 'base',
  label,
  ...otherProps
}: MdTagProps) => {

  const classNames = classnames(
    'md-tag',
    {
      'md-tag-theme--primary': theme === 'primary',        
      'md-tag-theme--secondary': theme === 'secondary',
      'md-tag-theme--success': theme === 'success',
      'md-tag-theme--warning': theme === 'warning',
      'md-tag-theme--info': theme === 'info',
      'md-tag-theme--error': theme === 'error',
      'md-tag-type--outline': type === 'outlined',
      'md-tag-type--light': type === 'light',
    },
    otherProps.className,
  );

  return (
    <div className={classNames}>
      {label}
    </div>
  );
};

export default MdTag;

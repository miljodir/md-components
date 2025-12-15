'use client';

import classnames from 'classnames';
import React from 'react';
import { MdTooltip } from '../tooltip/MdTooltip';
export interface MdTagProps extends React.HTMLAttributes<HTMLBaseElement> {
  theme?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error';
  type?: 'base' | 'light' | 'outlined';
  label?: string;
  labels?: string[];
  customIcon?: React.ReactNode;
  tooltipOnly?: boolean;
}

export const MdTag: React.FC<MdTagProps> = ({
  theme = 'primary',
  type = 'base',
  label,
  customIcon,
  tooltipOnly = false,
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
      'md-tag--nolabel': !label,
    },
    otherProps.className,
  );

  const renderIcon = () => {
    let icon = (<></>) as React.ReactNode;
    icon = customIcon;
    return icon;
  };

  if (tooltipOnly && !customIcon) {
    console.warn('MdTag: When using tooltipOnly, a customIcon must be provided.');
  }

  return (
    <div className={classNames}>
      {customIcon && (
        <div className='md-tag-icon'>
            {renderIcon()}
        </div>        
      )}

      {tooltipOnly && customIcon && (
        <MdTooltip
            mode="medium"
            position="bottom"
            timeout={100}
            tooltipContent={label || ''}
        >
            {renderIcon()}
        </MdTooltip>
      )}

      {!tooltipOnly && (
        <div>
            {label}
        </div>
      )}
    </div>
  );
};

export default MdTag;

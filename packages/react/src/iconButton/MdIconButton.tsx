'use client';

import classnames from 'classnames';
import React from 'react';
import MdLoadingSpinner from '../loadingSpinner/MdLoadingSpinner';
import MdTooltip from '../tooltip/MdTooltip';

export interface MdIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  theme?: 'filled' | 'border' | 'plain';
  children?: React.ReactNode;
  disabled?: boolean;
  showTooltip?: boolean;
  loading?: boolean;
}

export const MdIconButton: React.FunctionComponent<MdIconButtonProps> = ({
  label,
  theme = 'filled',
  children,
  showTooltip = false,
  disabled,
  type = 'button',
  className,
  loading = false,
  ...otherProps
}: MdIconButtonProps) => {
  const classNames = classnames(
    'md-icon-button',
    {
      'md-icon-button--border': theme === 'border',
      'md-icon-button--plain': theme === 'plain',
    },
    className,
  );

  // Check if aria-label is in otherProps and warn
  if ('aria-label' in otherProps) {
    console.warn('MdIconButton: aria-label should not be passed via props. Use the "label" prop instead.');
  }  

  const button = (
    <button aria-label={label} type={type} disabled={disabled} className={classNames} {...otherProps}>
      {children && (
        <div aria-hidden="true" className="md-icon-button__icon">
          {loading ? <MdLoadingSpinner /> : children}
        </div>
      )}
    </button>
  );

  return showTooltip && !disabled ? (
    <MdTooltip unmountOnHide tooltipContent={label} aria-label={label} tabIndex={-1}>
      {button}
    </MdTooltip>
  ) : (
    button
  );
};

export default MdIconButton;

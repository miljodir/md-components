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
  ['aria-label']?: string; // Deprecated, use label instead
  loading?: boolean;
}

export const MdIconButton: React.FunctionComponent<MdIconButtonProps> = ({
  theme = 'filled',
  children,
  showTooltip = false,
  disabled,
  type = 'button',
  className,
  label,
  'aria-label': ariaLabel,
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

  if (ariaLabel == null || ariaLabel.length !== 0) {
    console.warn('MdIconButton: The prop "aria-label" is deprecated and replaces by label. Please use the label prop instead.');
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
    <MdTooltip unmountOnHide tooltipContent={label} aria-label={label}>
      {button}
    </MdTooltip>
  ) : (
    button
  );
};

export default MdIconButton;

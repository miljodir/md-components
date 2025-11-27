'use client';

import classnames from 'classnames';
import React from 'react';
import MdLoadingSpinner from '../loadingSpinner/MdLoadingSpinner';
import MdTooltip from '../tooltip/MdTooltip';

interface Labels {
  button?: string;
  toolTip?: string;
}

export interface MdIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  labels?: Labels;
  theme?: 'filled' | 'border' | 'plain';
  children?: React.ReactNode;
  disabled?: boolean;
  showTooltip?: boolean;
  ['aria-label']?: string;
  loading?: boolean;
}

export const MdIconButton: React.FunctionComponent<MdIconButtonProps> = ({
  theme = 'filled',
  children,
  showTooltip = false,
  disabled,
  type = 'button',
  className,
  labels = {},
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
    console.warn('MdIconButton: The prop "aria-label" is deprecated and replaces by labels. Please use labels.button and labels.toolTip instead.');
  }

  const defaultLabels: Required<Labels> = {
    button: ariaLabel || '',
    toolTip: ariaLabel || '',
  };

  const mergedLabels: Required<Labels> = { ...defaultLabels, ...labels };

  const button = (
    <button aria-label={mergedLabels.button} type={type} disabled={disabled} className={classNames} {...otherProps}>
      {children && (
        <div aria-hidden="true" className="md-icon-button__icon">
          {loading ? <MdLoadingSpinner /> : children}
        </div>
      )}
    </button>
  );

  return showTooltip && !disabled ? (
    <MdTooltip unmountOnHide tooltipContent={mergedLabels.toolTip} aria-label={mergedLabels.toolTip}>
      {button}
    </MdTooltip>
  ) : (
    button
  );
};

export default MdIconButton;

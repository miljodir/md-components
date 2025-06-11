'use client';

import classnames from 'classnames';
import React from 'react';
import MdLoadingSpinner from '../loadingSpinner/MdLoadingSpinner';

export interface MdButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'danger-secondary';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  topIcon?: React.ReactNode;
  children?: string | React.ReactNode;
  mode?: 'small' | 'medium' | 'large';
  /** @deprecated Use `mode="small"` instead */
  small?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  loading?: boolean;
}

export const MdButton: React.FunctionComponent<MdButtonProps> = ({
  theme = 'primary',
  leftIcon,
  rightIcon,
  topIcon,
  children,
  mode = 'medium',
  small,
  type = 'button',
  loading = false,
  ...otherProps
}: MdButtonProps) => {
  // Handle backward compatibility: if small prop is used, override mode
  const effectiveMode = small ? 'small' : mode;

  const classNames = classnames(
    'md-button',
    {
      'md-button--small': effectiveMode === 'small',
      'md-button--large': effectiveMode === 'large',
      'md-button--secondary': theme === 'secondary',
      'md-button--tertiary': theme === 'tertiary',
      'md-button--danger': theme === 'danger',
      'md-button--danger-secondary': theme === 'danger-secondary',
      'md-button--column': !!topIcon,
    },
    otherProps.className,
  );

  return (
    <button type={type} {...otherProps} className={classNames}>
      {topIcon && (
        <div aria-hidden="true" className="md-button__topIcon">
          {loading ? <MdLoadingSpinner /> : topIcon}
        </div>
      )}
      <ConditionalWrapper
        condition={!!topIcon}
        wrap={wrappedChildren => {
          return <div className="md-button__content">{wrappedChildren}</div>;
        }}
      >
        {leftIcon && (
          <div aria-hidden="true" className="md-button__leftIcon">
            {leftIcon}
          </div>
        )}
        {children}
        {(rightIcon || (loading && !topIcon)) && (
          <div aria-hidden="true" className="md-button__rightIcon">
            {loading && !topIcon ? <MdLoadingSpinner /> : rightIcon}
          </div>
        )}
      </ConditionalWrapper>
    </button>
  );
};

export default MdButton;

const ConditionalWrapper = ({ condition, wrap, children }) => {
  return condition ? wrap(children) : children;
};

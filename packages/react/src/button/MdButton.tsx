'use client';

import classnames from 'classnames';
import React from 'react';

export interface MdButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  topIcon?: React.ReactNode;
  children?: string | React.ReactNode;
  small?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const MdButton: React.FunctionComponent<MdButtonProps> = ({
  theme = 'primary',
  leftIcon,
  rightIcon,
  topIcon,
  children,
  small,
  type = 'button',
  ...otherProps
}: MdButtonProps) => {
  const classNames = classnames(
    'md-button',
    {
      'md-button--small': !!small,
      'md-button--secondary': theme === 'secondary',
      'md-button--tertiary': theme === 'tertiary',
      'md-button--danger': theme === 'danger',
      'md-button--column': !!topIcon,
    },
    otherProps.className,
  );

  return (
    <button type={type} {...otherProps} className={classNames}>
      {topIcon && (
        <div aria-hidden="true" className="md-button__topIcon">
          {topIcon}
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
        {rightIcon && (
          <div aria-hidden="true" className="md-button__rightIcon">
            {rightIcon}
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

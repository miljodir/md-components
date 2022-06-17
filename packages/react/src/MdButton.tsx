import React from 'react';
import classnames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'danger';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const MdButton = ({
  theme,
  leftIcon,
  rightIcon,
  children,
  ...otherProps
}: ButtonProps) => {
  const classNames = classnames('md-button', {
    'md-button--secondary': theme === 'secondary',
    'md-button--danger': theme === 'danger',
  });

  return (
    <button className={classNames} {...otherProps}>
      {leftIcon && <div className="md-button__leftIcon">{leftIcon}</div>}
      {children}
      {rightIcon && <div className="md-button__rightIcon">{rightIcon}</div>}
    </button>
  );
};

export default MdButton;

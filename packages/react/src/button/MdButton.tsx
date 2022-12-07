import React from 'react';
import classnames from 'classnames';

interface MdButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'danger';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: string | React.ReactNode;
  small?: boolean
}

const MdButton: React.FunctionComponent<MdButtonProps> = ({
  theme,
  leftIcon,
  rightIcon,
  children,
  small,
  ...otherProps
}: MdButtonProps) => {
  const classNames = classnames('md-button', {
    'md-button--small': !!small,
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

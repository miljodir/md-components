import classnames from 'classnames';
import React from 'react';

export interface MdButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: string | React.ReactNode;
  small?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const MdButton: React.FunctionComponent<MdButtonProps> = ({
  theme,
  leftIcon,
  rightIcon,
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
      'md-button--danger': theme === 'danger',
    },
    otherProps.className,
  );

  return (
    <button type={type} {...otherProps} className={classNames}>
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
    </button>
  );
};

export default MdButton;

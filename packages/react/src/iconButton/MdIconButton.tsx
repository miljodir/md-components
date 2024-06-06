import classnames from 'classnames';
import React from 'react';
import MdTooltip from '../tooltip/MdTooltip';

export interface MdIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'filled' | 'border' | 'plain';
  ariaLabel: string;
  children?: React.ReactNode;
  disabled?: boolean;
  showTooltip?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const MdIconButton: React.FunctionComponent<MdIconButtonProps> = ({
  theme,
  children,
  ariaLabel,
  showTooltip = false,
  disabled,
  type = 'button',
  ...otherProps
}: MdIconButtonProps) => {
  const classNames = classnames(
    'md-icon-button',
    {
      'md-icon-button--filled': theme === 'filled',
      'md-icon-button--border': theme === 'border',
      'md-icon-button--plain': theme === 'plain',
    },
    otherProps.className,
  );

  const button = (
    <button aria-label={ariaLabel} type={type} disabled={disabled} {...otherProps} className={classNames}>
      {children && (
        <div aria-hidden="true" className="md-icon-button__icon">
          {children}
        </div>
      )}
    </button>
  );

  return showTooltip && !disabled ? (
    <MdTooltip content={ariaLabel} ariaLabel={ariaLabel}>
      {button}
    </MdTooltip>
  ) : (
    button
  );
};

export default MdIconButton;

import classnames from 'classnames';
import React from 'react';
import MdTooltip from '../tooltip/MdTooltip';

export interface MdIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'filled' | 'border' | 'plain';
  ariaLabel: string;
  children?: React.ReactNode;
  disabled?: boolean;
  showTooltip?: boolean;
}

const MdIconButton: React.FunctionComponent<MdIconButtonProps> = ({
  theme,
  children,
  ariaLabel,
  showTooltip = false,
  disabled,
  type = 'button',
  className,
  ...otherProps
}: MdIconButtonProps) => {
  const classNames = classnames(
    'md-icon-button',
    {
      'md-icon-button--filled': theme === 'filled',
      'md-icon-button--border': theme === 'border',
      'md-icon-button--plain': theme === 'plain',
    },
    className,
  );

  const button = (
    <button aria-label={ariaLabel} type={type} disabled={disabled} className={classNames} {...otherProps}>
      {children && (
        <div aria-hidden="true" className="md-icon-button__icon">
          {children}
        </div>
      )}
    </button>
  );

  return showTooltip && !disabled ? (
    <MdTooltip label={ariaLabel} aria-label={ariaLabel}>
      {button}
    </MdTooltip>
  ) : (
    button
  );
};

export default MdIconButton;

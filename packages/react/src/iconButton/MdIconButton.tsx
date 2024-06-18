import classnames from 'classnames';
import React from 'react';
import MdTooltip from '../tooltip/MdTooltip';

export interface MdIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'filled' | 'border' | 'plain';
  children?: React.ReactNode;
  disabled?: boolean;
  showTooltip?: boolean;
}

const MdIconButton: React.FunctionComponent<MdIconButtonProps> = ({
  theme,
  children,
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
    <button type={type} disabled={disabled} className={classNames} {...otherProps}>
      {children && (
        <div aria-hidden="true" className="md-icon-button__icon">
          {children}
        </div>
      )}
    </button>
  );

  return showTooltip && !disabled ? (
    <MdTooltip tooltipContent={otherProps['aria-label']} aria-label={otherProps['aria-label']}>
      {button}
    </MdTooltip>
  ) : (
    button
  );
};

export default MdIconButton;

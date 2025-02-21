'use client';

import classnames from 'classnames';
import React from 'react';
import MdCancelIcon from '../icons/MdCancelIcon';
import MdCheckIcon from '../icons/MdCheckIcon';
import MdInfoIcon from '../icons/MdInfoIcon';
import MdWarningIcon from '../icons/MdWarningIcon';

export interface MdInfoTagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success';
  keepOpen?: boolean;
  label?: string;
  icon?: 'none' | 'info' | 'warning' | 'error' | 'check' | 'custom';
  customIcon?: React.ReactNode;
  outline?: boolean;
  onClick?(_e: React.MouseEvent): void;
}

const MdInfoTag: React.FC<MdInfoTagProps> = ({
  theme = 'primary',
  keepOpen = false,
  icon = 'none',
  customIcon = null,
  label,
  outline = false,
  onClick = undefined,
  ...otherProps
}: MdInfoTagProps) => {
  const classNames = classnames(
    'md-info-tag',
    {
      'md-info-tag--secondary': theme === 'secondary',
      'md-info-tag--warning': theme === 'warning',
      'md-info-tag--danger': theme === 'danger',
      'md-info-tag--success': theme === 'success',
      'md-info-tag--outline': outline,
      'md-info-tag--button': onClick,
    },
    otherProps.className,
  );

  const labelClassNames = classnames('md-info-tag__label', {
    'md-info-tag__label--show': keepOpen,
  });

  const renderIcon = () => {
    if (icon === 'custom' && customIcon && customIcon !== '') {
      return customIcon;
    } else {
      if (icon === 'info') {
        return <MdInfoIcon aria-label="Info" />;
      } else if (icon === 'warning') {
        return <MdWarningIcon aria-label="Advarsel" />;
      } else if (icon === 'error') {
        return <MdCancelIcon aria-label="Feil" />;
      } else if (icon === 'check') {
        return <MdCheckIcon aria-label="OK" />;
      } else {
        return null;
      }
    }
  };
  return onClick ? (
    <button type="button" onClick={onClick} {...otherProps} className={classNames}>
      <div className={labelClassNames}>{label}</div>

      <div className="md-info-tag__icon">{renderIcon()}</div>
    </button>
  ) : (
    <div className={classNames}>
      <div className={labelClassNames}>{label}</div>

      <div className="md-info-tag__icon">{renderIcon()}</div>
    </div>
  );
};

export default MdInfoTag;

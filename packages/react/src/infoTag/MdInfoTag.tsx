import classnames from 'classnames';
import React from 'react';

import MdCancelIcon from '../icons/MdCancelIcon';
import MdCheckIcon from '../icons/MdCheckIcon';
import MdInfoIcon from '../icons/MdInfoIcon';
import MdWarningIcon from '../icons/MdWarningIcon';

type ThemeTypes = null | undefined | '' | 'primary' | 'secondary' | 'warning' | 'danger' | 'success';
type IconTypes = null | undefined | '' | 'none' | 'info' | 'warning' | 'error' | 'check' | 'custom';

export interface MdInfoTagProps {
  theme?: ThemeTypes;
  keepOpen?: boolean;
  label?: string;
  icon?: IconTypes;
  customIcon?: React.ReactNode;
  outline?: boolean;
  onClick?(_e: React.MouseEvent): void;
}

const MdInfoTag: React.FC<MdInfoTagProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  theme = 'primary',
  keepOpen = false,
  icon = 'none',
  customIcon = null,
  label,
  outline = false,
  onClick = undefined,
}: MdInfoTagProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classNames = classnames('md-info-tag', {
    'md-info-tag--secondary': theme === 'secondary',
    'md-info-tag--warning': theme === 'warning',
    'md-info-tag--danger': theme === 'danger',
    'md-info-tag--success': theme === 'success',
    'md-info-tag--outline': outline,
    'md-info-tag--button': onClick,
  });

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
    <button type="button" onClick={onClick} className={classNames}>
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

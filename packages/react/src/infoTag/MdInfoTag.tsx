'use client';

import classnames from 'classnames';
import React from 'react';
import MdIconCancel from '../icons-material/MdIconCancel';
import MdIconCheck from '../icons-material/MdIconCheck';
import MdIconInfo from '../icons-material/MdIconInfo';
import MdIconWarning from '../icons-material/MdIconWarning';

interface Labels {
  info?: string;
  warning?: string;
  error?: string;
  ok?: string;
}

export interface MdInfoTagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success';
  keepOpen?: boolean;
  label?: string;
  labels?: Labels;
  icon?: 'none' | 'info' | 'warning' | 'error' | 'check' | 'custom';
  customIcon?: React.ReactNode;
  outline?: boolean;
  onClick?(_e: React.MouseEvent): void;
}

export const MdInfoTag: React.FC<MdInfoTagProps> = ({
  theme = 'primary',
  keepOpen = false,
  icon = 'none',
  customIcon = null,
  label,
  labels = {},
  outline = false,
  onClick = undefined,
  ...otherProps
}: MdInfoTagProps) => {

    // eslint-disable-next-line no-console
    console.warn(
      'MdInfoTag is deprecated and will be removed in a future release. Use MdTag instead.',
    );

  const defaultLabels: Required<Labels> = {
    info: 'Informasjon',
    warning: 'Advarsel',
    error: 'Feil',
    ok: 'Ok',
  };
  const mergedLabels: Required<Labels> = { ...defaultLabels, ...labels };    

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
        return <MdIconInfo aria-label={mergedLabels.info} />;
      } else if (icon === 'warning') {
        return <MdIconWarning aria-label={mergedLabels.warning} />;
      } else if (icon === 'error') {
        return <MdIconCancel aria-label={mergedLabels.error} />;
      } else if (icon === 'check') {
        return <MdIconCheck aria-label={mergedLabels.ok} />;
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

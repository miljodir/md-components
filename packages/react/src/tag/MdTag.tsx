'use client';

import classnames from 'classnames';
import React from 'react';
import MdIconCheckCircle from '../icons-material/MdIconCheckCircle';
import MdIconInfo from '../icons-material/MdIconInfo';
import MdIconReport from '../icons-material/MdIconReport';
import MdIconWarning from '../icons-material/MdIconWarning';
import { MdTooltip } from '../tooltip/MdTooltip';

export type MdTagThemePrimary = 'primary' | 'secondary';
export type MdTagThemeOther = 'success' | 'warning' | 'info' | 'error';

interface MdTagCommon extends React.HTMLAttributes<HTMLBaseElement> {
  type?: 'base' | 'light' | 'outlined';
  label?: string;
  labels?: string[];
  showIcon?: boolean;
  customIcon?: React.ReactNode;
  tooltipOnly?: boolean;
}

// When `theme` is explicitly set to `primary` or `secondary`, `customIcon` is required.
export type MdTagProps =
  | (MdTagCommon & { theme: MdTagThemePrimary; customIcon: React.ReactNode })
  | (MdTagCommon & { theme?: MdTagThemeOther | undefined; customIcon?: React.ReactNode });

export const MdTag: React.FC<MdTagProps> = ({
  theme = 'primary',
  type = 'base',
  label,
  showIcon = false,
  customIcon,
  tooltipOnly = false,
  ...otherProps
}: MdTagProps) => {
  const classNames = classnames(
    'md-tag',
    {
      'md-tag-theme--primary': theme === 'primary',
      'md-tag-theme--secondary': theme === 'secondary',
      'md-tag-theme--success': theme === 'success',
      'md-tag-theme--warning': theme === 'warning',
      'md-tag-theme--info': theme === 'info',
      'md-tag-theme--error': theme === 'error',
      'md-tag-type--outline': type === 'outlined',
      'md-tag-type--light': type === 'light',
      'md-tag--nolabel': !label,
    },
    otherProps.className,
  );

  const renderIcon = () => {
    let icon = (<></>) as React.ReactNode;

    if (theme === 'primary' || theme === 'secondary') {
      icon = customIcon;
      return icon;
    }

    if (theme === 'success') {
      icon = <MdIconCheckCircle className="md-tag__icon" width="24" height="24" />;
    } else if (theme === 'warning') {
      icon = <MdIconWarning className="md-tag__icon" width="24" height="24" />;
    } else if (theme === 'info') {
      icon = <MdIconInfo className="md-tag__icon" width="24" height="24" />;
    } else if (theme === 'error') {
      icon = <MdIconReport className="md-tag__icon" width="24" height="24" />;
    }

    return icon;
  };

  return (
    <div className={classNames}>
      {showIcon && !tooltipOnly && <div className="md-tag-icon">{renderIcon()}</div>}

      {tooltipOnly && showIcon && (
        <MdTooltip mode="medium" position="bottom" timeout={100} tooltipContent={label || ''}>
          {renderIcon()}
        </MdTooltip>
      )}

      {!tooltipOnly && <div>{label}</div>}
    </div>
  );
};

export default MdTag;

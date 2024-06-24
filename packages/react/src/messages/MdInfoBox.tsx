import classnames from 'classnames';
import React from 'react';
import MdInfoIcon from '../icons/MdInfoIcon';

export interface MdInfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  hideIcon?: boolean;
  fullWidth?: boolean;
  customIcon?: React.ReactNode | string;
}

const MdInfoBox: React.FC<MdInfoBoxProps> = ({
  label,
  hideIcon = false,
  fullWidth = false,
  customIcon,
  className,
  ...otherProps
}: MdInfoBoxProps) => {
  const classNames = classnames(
    'md-info-box',
    {
      'md-info-box--fullWidth': !!fullWidth,
    },
    className,
  );

  const renderIcon = () => {
    let icon = (<MdInfoIcon aria-label="Info" width="20" height="20" />) as React.ReactNode;
    if (customIcon) {
      icon = customIcon;
    }
    return icon;
  };

  return (
    <div className={classNames} {...otherProps}>
      {!hideIcon && renderIcon()}
      {label}
    </div>
  );
};

export default MdInfoBox;

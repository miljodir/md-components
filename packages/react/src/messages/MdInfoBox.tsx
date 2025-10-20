import React from 'react';
import MdAlertMessage from './MdAlertMessage';

export interface MdInfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  hideIcon?: boolean;
  fullWidth?: boolean;
  customIcon?: React.ReactNode | string;
}

export const MdInfoBox: React.FC<MdInfoBoxProps> = ({
  label,
  hideIcon = false,
  fullWidth = false,
  customIcon,
  className,
  ...otherProps
}: MdInfoBoxProps) => {
  // eslint-disable-next-line no-console
  console.warn(
    'MdInfoBox is deprecated and will be removed in a future release. Use MdAlertMessage with theme="info-box" instead.',
  );

  return (
    <MdAlertMessage
      theme="info-box"
      label={label}
      hideIcon={hideIcon}
      fullWidth={fullWidth}
      customIcon={customIcon}
      className={className}
      {...otherProps}
    />
  );
};

export default MdInfoBox;

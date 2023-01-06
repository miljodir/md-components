import React from 'react';
import MdIconProps from './icon.model';

const MdConfirmIcon: React.FunctionComponent<MdIconProps> = ({
  className,
  ...otherProps
}: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <polygon points="12.91 6.36 10 9.28 7.09 6.36 6.38 7.07 9.29 9.98 6.38 12.9 7.09 13.6 10 10.69 12.91 13.6 13.62 12.9 10.71 9.98 13.62 7.07 12.91 6.36" fill="currentColor" />
      <path d="M2.17,17.81H17.83V2.16H2.17Zm1-14.65H16.83V16.81H3.17Z" fill="currentColor"/>
    </svg>
  );
};

export default MdConfirmIcon;

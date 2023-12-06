import React from 'react';
import type MdIconProps from './icon.model';

const MdPinIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <g>
        <rect x="3.5" y="15.16" width="12.99" height="1" fill="currentColor" />
        <path
          d="M6.89,10.06,10,14.56l3.12-4.45a3.34,3.34,0,0,0,.37-.53A3.8,3.8,0,0,0,14,7.71a3.91,3.91,0,0,0-3.9-3.87H10a3.91,3.91,0,0,0-3.9,3.82,3.88,3.88,0,0,0,.49,1.88A4.28,4.28,0,0,0,6.89,10.06ZM10,6.42A1.61,1.61,0,1,1,8.39,8,1.61,1.61,0,0,1,10,6.42Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdPinIcon;

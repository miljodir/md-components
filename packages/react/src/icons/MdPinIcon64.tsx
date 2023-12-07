import React from 'react';
import type MdIconProps from './icon.model';

const MdPinIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <g>
        <rect x="11.21" y="50.1" width="41.58" height="2" fill="currentColor" />
        <path
          d="M32.17,11.9h-.09A12.6,12.6,0,0,0,19.29,24.23a12.12,12.12,0,0,0,1.56,6A12.82,12.82,0,0,0,22,31.94l9.84,14.52L41.89,32.11a12.63,12.63,0,0,0,1.19-1.7,11.93,11.93,0,0,0,1.63-6A12.58,12.58,0,0,0,32.17,11.9ZM32,30.57a5.16,5.16,0,1,1,5.15-5.16A5.15,5.15,0,0,1,32,30.57Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdPinIcon64;

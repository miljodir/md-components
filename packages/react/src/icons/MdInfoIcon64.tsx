import React from 'react';
import type MdIconProps from './icon.model';

const MdInfoIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
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
        <path
          d="M32,7.75A24.48,24.48,0,1,0,56.47,32.23,24.5,24.5,0,0,0,32,7.75Zm0,47A22.48,22.48,0,1,1,54.47,32.23,22.5,22.5,0,0,1,32,54.7Z"
          fill="currentColor"
        />
        <rect x="30.2" y="27.32" width="3.6" height="19.33" fill="currentColor" />
        <path d="M32,17.8a2.41,2.41,0,1,0,2.57,2.4A2.46,2.46,0,0,0,32,17.8Z" fill="currentColor" />
      </g>
    </svg>
  );
};

export default MdInfoIcon64;

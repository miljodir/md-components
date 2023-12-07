import React from 'react';
import type MdIconProps from './icon.model';

const MdZoomIconMinus64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
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
          d="M53.41,48.31,40.93,35.56,38.45,38,34.28,33.7a15.26,15.26,0,0,0,4.25-10.62A14.86,14.86,0,0,0,23.92,8,14.86,14.86,0,0,0,9.31,23.08,14.87,14.87,0,0,0,23.92,38.16a14.3,14.3,0,0,0,9-3.23l4.22,4.39.65-.63-3,3.05,12.48,13a4.29,4.29,0,0,0,6.07.06l.1-.1A4.58,4.58,0,0,0,53.41,48.31ZM11.14,23.08A13,13,0,0,1,23.92,9.83,13,13,0,0,1,36.71,23.08,13,13,0,0,1,23.92,36.33,13,13,0,0,1,11.14,23.08Z"
          fill="currentColor"
        />
        <polygon
          points="24.84 16.05 23.01 16.05 23.01 22.23 16.82 22.23 16.82 24.06 23.01 24.06 23.01 30.24 24.84 30.24 24.84 24.06 31.02 24.06 31.02 22.23 24.84 22.23 24.84 16.05"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdZoomIconMinus64;

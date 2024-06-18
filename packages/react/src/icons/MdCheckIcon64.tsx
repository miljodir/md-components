import React from 'react';
import type MdIconProps from './icon.model';

const MdCheckIcon64: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path
        d="M23.325 52.586L8 31.896L9.655 30.67L23.397 49.236L54.407 11L56 12.3L23.325 52.586Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdCheckIcon64;

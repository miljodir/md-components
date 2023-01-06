import React from 'react';
import MdIconProps from './icon.model';

const MdSubmenuIcon64: React.FunctionComponent<MdIconProps> = ({
  className,
  ...otherProps
}: MdIconProps) => {
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
        <path d="M32,22.12a6.44,6.44,0,1,1,6.44-6.44A6.45,6.45,0,0,1,32,22.12Zm0-10.88a4.44,4.44,0,1,0,4.44,4.44A4.44,4.44,0,0,0,32,11.24Z" fill="currentColor" />
        <path d="M32,38.44A6.44,6.44,0,1,1,38.44,32,6.45,6.45,0,0,1,32,38.44Zm0-10.88A4.44,4.44,0,1,0,36.44,32,4.44,4.44,0,0,0,32,27.56Z" fill="currentColor" />
        <path d="M32,54.76a6.44,6.44,0,1,1,6.44-6.44A6.45,6.45,0,0,1,32,54.76Zm0-10.88a4.44,4.44,0,1,0,4.44,4.44A4.44,4.44,0,0,0,32,43.88Z" fill="currentColor" />
      </g>
    </svg>
  );
};

export default MdSubmenuIcon64;

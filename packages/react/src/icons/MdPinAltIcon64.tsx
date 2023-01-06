import React from 'react';
import MdIconProps from './icon.model';

const MdPinAltIcon64: React.FunctionComponent<MdIconProps> = ({
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
      <path d="M32.22,9H32.1a16.77,16.77,0,0,0-17,16.4,16.36,16.36,0,0,0,2.07,8.05,18.48,18.48,0,0,0,1.52,2.23L31.78,55,45.16,35.9a16.48,16.48,0,0,0,1.59-2.27,15.87,15.87,0,0,0,2.17-8A16.75,16.75,0,0,0,32.22,9ZM32,33.84A6.86,6.86,0,1,1,38.86,27,6.86,6.86,0,0,1,32,33.84Z" fill='currentColor' />
    </svg>
  );
};

export default MdPinAltIcon64;

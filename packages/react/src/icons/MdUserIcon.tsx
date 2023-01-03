import React from 'react';

export interface MdUserIconProps {
  className?: string;
  [otherProps: string]: unknown;
};

const MdUserIcon: React.FunctionComponent<MdUserIconProps> = ({
  className = '',
  ...otherProps
}: MdUserIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      {...otherProps}
    >
      <g>
        <path d="M32,19.21a8.37,8.37,0,1,0,8.41,8.37A8.39,8.39,0,0,0,32,19.21ZM32,34a6.37,6.37,0,1,1,6.41-6.37A6.4,6.4,0,0,1,32,34Z" fill="currentColor"></path>
        <path d="M32,7.86A24.14,24.14,0,1,0,56.14,32,24.17,24.17,0,0,0,32,7.86ZM17.87,49a1,1,0,0,0,.32-.51A13.78,13.78,0,0,1,32,38.53c11.3,0,13.71,9.58,13.81,10a1,1,0,0,0,.32.51,22.09,22.09,0,0,1-28.26,0Zm29.77-1.38a16.41,16.41,0,0,0-2.87-5.37c-2.1-2.62-6-5.75-12.77-5.75A15.76,15.76,0,0,0,16.36,47.66a22.15,22.15,0,1,1,31.28,0Z" fill="currentColor"></path>
      </g>
    </svg>
  );
};

export default MdUserIcon;

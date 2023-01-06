import React from 'react';
import MdIconProps from './icon.model';

const MdCheckCircleIcon64: React.FunctionComponent<MdIconProps> = ({
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
        <polygon points="27.72 45.49 19.82 34.83 21.43 33.64 27.79 42.23 42.6 23.97 44.15 25.23 27.72 45.49" fill="currentColor" />
        <path d="M32,56.47A24.47,24.47,0,1,1,56.47,32,24.49,24.49,0,0,1,32,56.47ZM32,9.53A22.47,22.47,0,1,0,54.47,32,22.5,22.5,0,0,0,32,9.53Z" fill="currentColor"/>
      </g>
    </svg>
  );
};

export default MdCheckCircleIcon64;

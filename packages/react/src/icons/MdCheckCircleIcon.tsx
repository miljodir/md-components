import React from 'react';
import MdIconProps from './icon.model';

const MdCheckCircleIcon: React.FunctionComponent<MdIconProps> = ({
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
      <g>
        <polygon points="8.69 11.94 6.85 9.45 6.04 10.05 8.66 13.57 13.94 7.05 13.17 6.42 8.69 11.94" fill="currentColor" />
        <path d="M10,2.16A7.84,7.84,0,1,0,17.84,10,7.85,7.85,0,0,0,10,2.16Zm0,14.68A6.84,6.84,0,1,1,16.84,10,6.85,6.85,0,0,1,10,16.84Z" fill="currentColor"/>
      </g>
    </svg>
  );
};

export default MdCheckCircleIcon;

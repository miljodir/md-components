import React from 'react';
import type MdIconProps from './icon.model';

const MdConfirmIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      className={className}
      {...otherProps}
    >
      <g>
        <g>
          <polygon points="13.9,22.9 9,16.3 9.9,15.7 13.9,21.2 23.3,9.6 24.1,10.2" fill="currentColor" />
        </g>
        <g>
          <path d="M31.2,31.2H0.8V0.7h30.5V31.2z M1.8,30.2h28.5V1.7H1.8V30.2z" fill="currentColor" />
        </g>
      </g>
    </svg>
  );
};

export default MdConfirmIcon;

import React from 'react';
import type MdIconProps from './icon.model';

const MdPersonIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdPersonIcon is deprecated and will be removed in a future release. Use MdIconPerson instead.');

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
          d="M32,25.77a8.65,8.65,0,1,1,8.65-8.65A8.66,8.66,0,0,1,32,25.77Zm0-15.29a6.65,6.65,0,1,0,6.65,6.64A6.65,6.65,0,0,0,32,10.48Z"
          fill="currentColor"
        />
        <path
          d="M45.91,55.52H18.09l.11-13.85A13.64,13.64,0,0,1,32,28.25,13.68,13.68,0,0,1,45.91,41.67Zm-25.81-2H43.91V41.67A11.68,11.68,0,0,0,32,30.25,11.64,11.64,0,0,0,20.2,41.67Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdPersonIcon64;

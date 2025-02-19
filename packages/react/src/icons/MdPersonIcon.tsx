import React from 'react';
import type MdIconProps from './icon.model';

const MdPersonIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdPersonIcon is deprecated and will be removed in a future release. Use MdIconPerson instead.');

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
        <path
          d="M10,8.24a2.89,2.89,0,1,1,2.89-2.89A2.9,2.9,0,0,1,10,8.24Zm0-4.78a1.89,1.89,0,1,0,1.89,1.89A1.89,1.89,0,0,0,10,3.46Z"
          fill="currenColor"
        />
        <path
          d="M14.54,17.54H5.46L5.5,13A4.45,4.45,0,0,1,10,8.64,4.46,4.46,0,0,1,14.54,13Zm-8.07-1h7.07V13A3.47,3.47,0,0,0,10,9.64,3.45,3.45,0,0,0,6.5,13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdPersonIcon;

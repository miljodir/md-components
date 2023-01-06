import React from 'react';
import MdIconProps from './icon.model';

const MdZoomIconPlus: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M16.8,15.2l-3.9-4-.63.62L11.1,10.62a4.93,4.93,0,0,0,1.26-3.3A4.86,4.86,0,0,0,7.58,2.39,4.86,4.86,0,0,0,2.8,7.32a4.86,4.86,0,0,0,4.78,4.92,4.62,4.62,0,0,0,2.79-.94l1.19,1.24.38-.37-1,1,3.9,4.06a1.35,1.35,0,0,0,1.9,0l0,0A1.44,1.44,0,0,0,16.8,15.2ZM3.8,7.32A3.86,3.86,0,0,1,7.58,3.39a3.86,3.86,0,0,1,3.78,3.93,3.85,3.85,0,0,1-3.78,3.92A3.86,3.86,0,0,1,3.8,7.32Z" fill='currentColor' />
        <polygon points="8.08 5.12 7.08 5.12 7.08 6.84 5.37 6.84 5.37 7.84 7.08 7.84 7.08 9.56 8.08 9.56 8.08 7.84 9.8 7.84 9.8 6.84 8.08 6.84 8.08 5.12" fill='currentColor' />
      </g>
    </svg>
  );
};

export default MdZoomIconPlus;

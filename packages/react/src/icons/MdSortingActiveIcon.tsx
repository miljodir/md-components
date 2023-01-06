import React from 'react';
import MdIconProps from './icon.model';

const MdSortingIconActive: React.FunctionComponent<MdIconProps> = ({
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
      <path d="M14.15,12.14l-3.79,4.07L6.29,12.14h7.86m.69-1H5.56a.7.7,0,0,0-.49,1.19l4.81,4.81a.7.7,0,0,0,.49.2.67.67,0,0,0,.51-.22l4.47-4.81a.69.69,0,0,0-.51-1.17Z" fill='currentColor' />
      <g>
        <path d="M5.05,7.69,9.52,2.88a.69.69,0,0,1,1,0l4.81,4.81a.7.7,0,0,1-.49,1.19H5.56A.69.69,0,0,1,5.05,7.69Z" fill='currentColor' />
        <path d="M10,3.79l4.07,4.07H6.25L10,3.79m0-1.13a.67.67,0,0,0-.51.22L5.05,7.69a.69.69,0,0,0,.51,1.17h9.28a.7.7,0,0,0,.49-1.19L10.52,2.86a.7.7,0,0,0-.49-.2Z" fill='currentColor' />
      </g>
    </g>
    </svg>
  );
};

export default MdSortingIconActive;

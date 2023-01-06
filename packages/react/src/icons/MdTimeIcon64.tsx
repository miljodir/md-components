import React from 'react';
import MdIconProps from './icon.model';

const MdTimeIcon64: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M32,7.53A24.47,24.47,0,1,0,56.47,32,24.49,24.49,0,0,0,32,7.53Zm0,46.94A22.47,22.47,0,1,1,54.47,32,22.5,22.5,0,0,1,32,54.47Z" fill='currentColor' />
        <polygon points="30.21 20.57 28.21 20.57 28.21 37.21 44.42 37.21 44.42 35.21 30.21 35.21 30.21 20.57" fill='currentColor' />
      </g>
    </svg>

  );
};

export default MdTimeIcon64;

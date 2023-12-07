import React from 'react';
import type MdIconProps from './icon.model';

const MdCloseIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
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
        <polygon
          points="22.25 43.16 32 33.41 41.75 43.16 43.16 41.75 33.41 32 43.16 22.25 41.75 20.84 32 30.59 22.25 20.84 20.84 22.25 30.59 32 20.84 41.75 22.25 43.16"
          fill="currentColor"
        />
        <path d="M7.56,7.56V56.44H56.44V7.56ZM54.44,54.44H9.56V9.56H54.44Z" fill="currentColor" />
      </g>
    </svg>
  );
};

export default MdCloseIcon64;

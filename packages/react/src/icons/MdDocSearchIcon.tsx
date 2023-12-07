import React from 'react';
import type MdIconProps from './icon.model';

const MdDocSearchIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
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
        <rect x="6.5" y="12.87" width="6.64" height="1" fill="currentColor" />
        <path
          d="M15.54,10.8V2.4H3.87V17.57H15.54V13.49l.63.65a.91.91,0,0,0,1.29,0l0,0a1,1,0,0,0,0-1.35Zm-1-.42-.7-.73a3.42,3.42,0,0,0,.72-1.48v2.19Zm-5.72-3a2.42,2.42,0,1,1,4.83,0,2.42,2.42,0,1,1-4.83,0Zm2.77,3.47a3.28,3.28,0,0,0,1.53-.55l.71.74.35-.34-.64.65,1,1.06v4.12H4.87V3.4h9.67V6.67a3.4,3.4,0,0,0-6.74.75,3.54,3.54,0,0,0,.34,1.49H6.39v1H8.82a3.34,3.34,0,0,0,2,1Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdDocSearchIcon;

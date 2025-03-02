import React from 'react';
import type MdIconProps from './icon.model';

const MdPanIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdPanIcon is deprecated and will be removed in a future release.');

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
          d="M35,43.52H33a6.78,6.78,0,0,0-1.68-5,5.63,5.63,0,0,0-3.52-1.46h-.58l-.3-.5-5-8.62,1.72-1,4.78,8.16a7.28,7.28,0,0,1,4.32,2A8.62,8.62,0,0,1,35,43.52Z"
          fill="currentColor"
        />
        <path
          d="M34.84,54a11.84,11.84,0,0,1-10.49-6.76L17.47,30.06a3.81,3.81,0,0,1,0-2.76,3.34,3.34,0,0,1,1.9-2,3.46,3.46,0,0,1,3.59.71V16.61a3.85,3.85,0,0,1,3.7-4,3.54,3.54,0,0,1,1.86.54,3.66,3.66,0,0,1,7.17-.4,3.44,3.44,0,0,1,1.94-.59,3.85,3.85,0,0,1,3.72,4v1.64a3.45,3.45,0,0,1,1.77-.48,3.85,3.85,0,0,1,3.72,4L46.7,41.46C46.48,48.5,41.27,54,34.84,54ZM20.54,27.11a1.27,1.27,0,0,0-.47.09,1.38,1.38,0,0,0-.77.8,1.88,1.88,0,0,0,0,1.32l6.84,17.09A9.84,9.84,0,0,0,34.84,52c5.35,0,9.68-4.64,9.86-10.57l.11-20.15a1.73,1.73,0,1,0-3.42,0V31.33l-2,0-.06-2.1V16.15a1.73,1.73,0,1,0-3.42,0V30.22h-2l-.06-1V14a1.73,1.73,0,1,0-3.42,0V30.22h-2l-.06-1V16.61a1.86,1.86,0,0,0-1.71-2,1.85,1.85,0,0,0-1.7,2l0,12.38.76,1.47-1.75,1-1.85-3.18A1.72,1.72,0,0,0,20.54,27.11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdPanIcon64;

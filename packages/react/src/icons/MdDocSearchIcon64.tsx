import React from 'react';
import type MdIconProps from './icon.model';

const MdDocSearchIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn(
    'MdDocSearchIcon is deprecated and will be removed in a future release. Use MdIconQuickReference instead.',
  );

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
        <rect x="17.49" y="41.84" width="21.25" height="2" fill="currentColor" />
        <rect x="17.49" y="35.5" width="21.25" height="2" fill="currentColor" />
        <path
          d="M53,41l-6.81-7V8.32H10.05V55.68H46.19V42.6l2.61,2.71a2.92,2.92,0,0,0,4.13,0l.07-.07A3.12,3.12,0,0,0,53,41ZM44.19,53.68H12.05V10.32H44.19V32.6l-1.1,1.1L40.5,31a10.79,10.79,0,0,0,2.75-7.21A10.49,10.49,0,0,0,32.94,13.15,10.49,10.49,0,0,0,22.62,23.79a10.86,10.86,0,0,0,1.43,5.38H17.49v2h8a10.16,10.16,0,0,0,7.42,3.25A10,10,0,0,0,39,32.35l2.63,2.75.71-.68-2.06,2.07,3.88,4ZM24.62,23.79a8.5,8.5,0,0,1,8.32-8.64,8.49,8.49,0,0,1,8.31,8.64,8.48,8.48,0,0,1-8.31,8.63A8.49,8.49,0,0,1,24.62,23.79Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdDocSearchIcon64;

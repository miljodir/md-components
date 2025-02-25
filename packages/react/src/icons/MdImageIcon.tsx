import React from 'react';
import type MdIconProps from './icon.model';

const MdImageIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdImageIcon is deprecated and will be removed in a future release. Use MdIconImage instead.');

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
        <rect
          x="2.84"
          y="4.03"
          width="14.33"
          height="11.94"
          rx="0.55"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1px"
        />
        <path
          d="M4.49,13.1H8.82a.37.37,0,0,0,.31-.58L7,9.27a.37.37,0,0,0-.62,0L4.18,12.52A.37.37,0,0,0,4.49,13.1Z"
          fill="currentColor"
        />
        <path
          d="M8.72,13.1h6.92a.38.38,0,0,0,.32-.58L12.49,7.33a.36.36,0,0,0-.62,0L8.4,12.52A.38.38,0,0,0,8.72,13.1Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdImageIcon;

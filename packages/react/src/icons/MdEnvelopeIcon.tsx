import React from 'react';
import type MdIconProps from './icon.model';

const MdEnvelopeIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdEnvelopeIcon is deprecated and will be removed in a future release. Use MdIconMail instead.');

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
          d="M16.87,17.18V8.79L10,2.82l-6.89,6v8.35Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.87,17l-6.85-6-6.89,6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="7.42"
          y1="13.16"
          x2="3.13"
          y2="8.83"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="12.38"
          y1="13.16"
          x2="16.67"
          y2="8.83"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default MdEnvelopeIcon;

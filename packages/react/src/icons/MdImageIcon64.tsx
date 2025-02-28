import React from 'react';
import type MdIconProps from './icon.model';

const MdImageIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdImageIcon is deprecated and will be removed in a future release. Use MdIconImage instead.');

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
          d="M53.16,52.13H10.84a2.79,2.79,0,0,1-2.79-2.8V14.67a2.79,2.79,0,0,1,2.79-2.8H53.16A2.79,2.79,0,0,1,56,14.67V49.33A2.79,2.79,0,0,1,53.16,52.13ZM10.84,13.93a.74.74,0,0,0-.73.74V49.33a.74.74,0,0,0,.73.74H53.16a.74.74,0,0,0,.73-.74V14.67a.74.74,0,0,0-.73-.74Z"
          fill="currentColor"
        />
        <path
          d="M51.06,40.07,40,23.44a1.2,1.2,0,0,0-2,0L28.06,38.32,22.3,29.67a1.2,1.2,0,0,0-2,0l-6.93,10.4a1.19,1.19,0,0,0,1,1.86H50.06A1.2,1.2,0,0,0,51.06,40.07Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdImageIcon64;

import React from 'react';
import type MdIconProps from './icon.model';

const MdExpandIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdExpandIcon is deprecated and will be removed in a future release. Use MdIconExpandContent instead.');

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
          points="39.28 9.67 39.28 11.67 50.91 11.67 34 28.59 35.41 30 52.33 13.09 52.33 24.72 54.33 24.72 54.33 9.67 39.28 9.67"
          fill="currentColor"
        />
        <polygon
          points="28.59 34 11.67 50.91 11.67 39.28 9.67 39.28 9.67 54.33 24.72 54.33 24.72 52.33 13.09 52.33 30 35.41 28.59 34"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MdExpandIcon64;

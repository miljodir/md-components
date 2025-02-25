import React from 'react';
import type MdIconProps from './icon.model';

const MdCalendarDayIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn(
    'MdCalendarDayIcon is deprecated and will be removed in a future release. Use MdIconCalendarMonth instead.',
  );

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
          d="M17.54,4.31H15.42V3.45h-1v.86H5.58V3.45h-1v.86H2.41V16.55H17.59V4.31ZM3.41,15.55V7.33H16.59v8.22Z"
          fill="currentColor"
        />
        <polygon points="9.01 12.44 7.7 10.67 6.9 11.27 8.98 14.07 13.09 9 12.31 8.37 9.01 12.44" fill="currentColor" />
      </g>
    </svg>
  );
};

export default MdCalendarDayIcon;

import React from 'react';
import type MdIconProps from './icon.model';

const MdCalendarDay64Icon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn(
    'MdCalendarDay64Icon is deprecated and will be removed in a future release. Use MdIconCalendarMonthLarge instead.',
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
      <path
        d="M48.966 14.405V11H46.939V14.405H17.061V11H15.034V14.405H8V52.92H56V14.405H48.966ZM10.027 50.892V22.98H53.973V50.861L10.027 50.892Z"
        fill="currentColor"
      />
      <path
        d="M28.8096 41.1183L24.1596 34.8383L22.5596 36.0283L28.7396 44.3783L41.4096 28.7483L39.8596 27.4883L28.8096 41.1183Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdCalendarDay64Icon;

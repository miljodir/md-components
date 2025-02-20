import React from 'react';
import type MdIconProps from './icon.model';

const MdSubmenuIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdSubmenuIcon is deprecated and will be removed in a future release. Use MdIconMore instead.');

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
        <circle cx="10" cy="4.9" r="1.7" fill="none" stroke="currentColor" strokeMiterlimit="10" />
        <circle cx="10" cy="10" r="1.7" fill="none" stroke="currentColor" strokeMiterlimit="10" />
        <circle cx="10" cy="15.1" r="1.7" fill="none" stroke="currentColor" strokeMiterlimit="10" />
      </g>
    </svg>
  );
};

export default MdSubmenuIcon;

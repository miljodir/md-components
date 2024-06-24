import React from 'react';
import type MdIconProps from './icon.model';

const MdCheckIcon: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path
        d="M27.3748 4.79883L12.5268 23.1028L6.07883 14.3828L4.79883 15.3428L12.4788 25.7268L28.6228 5.80683L27.3748 4.79883Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdCheckIcon;

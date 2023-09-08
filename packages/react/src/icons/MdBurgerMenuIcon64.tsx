import React from 'react';
import MdIconProps from './icon.model';

const MdBurgerMenu64Icon: React.FunctionComponent<MdIconProps> = ({
  className,
  ...otherProps
}: MdIconProps) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      className={className}
      {...otherProps}
    >
      <path d="M6.4 16H57.6" stroke-width="2" stroke="currentColor" />
      <path d="M6.4 33.6H57.6" stroke-width="2" stroke="currentColor" />
      <path d="M6.4 51.2H57.6" stroke-width="2" stroke="currentColor" />
    </svg>
  );
};

export default MdBurgerMenu64Icon;

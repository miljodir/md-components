import React from 'react';
import type MdIconProps from './icon.model';

const MdBurgerMenuIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      className={className}
      {...otherProps}
    >
      <path d="M2 5H18" strokeWidth="2" stroke="currentColor" />
      <path d="M2 10.5H18" strokeWidth="2" stroke="currentColor" />
      <path d="M2 16H18" strokeWidth="2" stroke="currentColor" />
    </svg>
  );
};

export default MdBurgerMenuIcon;

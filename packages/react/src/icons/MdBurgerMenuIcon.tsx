import React from 'react';
import type MdIconProps from './icon.model';

const MdBurgerMenuIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none" className={className} {...otherProps} />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor" />
    </svg>
  );
};

export default MdBurgerMenuIcon;

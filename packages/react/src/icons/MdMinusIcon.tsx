import React from 'react';
import type MdIconProps from './icon.model';

const MdMinusIcon: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdMinusIcon is deprecated and will be removed in a future release. Use MdIconRemove instead.');

  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path d="M24.592 16H8V17.6H24.592V16Z" fill="currentColor" />
    </svg>
  );
};

export default MdMinusIcon;

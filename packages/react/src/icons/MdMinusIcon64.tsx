import React from 'react';
import type MdIconProps from './icon.model';

const MdMinusIcon64: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdMinusIcon is deprecated and will be removed in a future release. Use MdIconRemove instead.');

  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path d="M47 31H15V33H47V31Z" fill="currentColor" />
    </svg>
  );
};

export default MdMinusIcon64;

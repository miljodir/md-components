import React from 'react';
import type MdIconProps from './icon.model';

const MdPlusIcon64: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdPlusIcon is deprecated and will be removed in a future release. Use MdIconAdd instead.');

  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path d="M48 31.036H32.964V16H31.036V31.036H16V32.964H31.036V48H32.964V32.964H48V31.036Z" fill="currentColor" />
    </svg>
  );
};

export default MdPlusIcon64;

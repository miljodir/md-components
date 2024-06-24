import React from 'react';
import type MdIconProps from './icon.model';

const MdXIcon64: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path
        d="M55.02 8.38902L53.58 6.99902L31.01 30.419L8.44 6.99902L7 8.38902L29.62 31.859L7 55.329L8.44 56.709L31.01 33.299L53.58 56.709L55.02 55.329L32.4 31.859L55.02 8.38902Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdXIcon64;

import React from 'react';
import type MdIconProps from './icon.model';

const MdPlusIcon: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdPlusIcon is deprecated and will be removed in a future release. Use MdIconAdd instead.');

  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path
        fill="currentColor"
        d="M24.608 15.504H17.104V8H15.504V15.504H8V17.104H15.504V24.608H17.104V17.104H24.608V15.504Z"
      />
    </svg>
  );
};

export default MdPlusIcon;

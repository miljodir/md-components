import React from 'react';
import type MdIconProps from './icon.model';

const MdDocIcon64: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdDocIcon is deprecated and will be removed in a future release. Use MdIconDescription instead.');

  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path
        d="M38.061 8H14V56H50.628V20.334L38.061 8ZM16.027 53.973V10.027H36.703V21.936H48.603V53.973H16.027Z"
        fill="currentColor"
      />
      <path d="M32.132 29.1445H21.582V31.1445H32.132V29.1445Z" fill="currentColor" />
      <path d="M43.1784 35.5645H21.4404V37.5645H43.1784V35.5645Z" fill="currentColor" />
      <path d="M43.1784 41.9932H21.4404V43.9932H43.1784V41.9932Z" fill="currentColor" />
    </svg>
  );
};

export default MdDocIcon64;

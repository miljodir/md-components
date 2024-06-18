import React from 'react';
import type MdIconProps from './icon.model';

const MdDocIcon: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path
        d="M6.40039 3.2002V27.4882H25.0564V9.4562L18.6564 3.2002H6.40039ZM8.00039 25.8882V4.8002H17.7124V10.5442H23.4564V25.8722L8.00039 25.8882Z"
        fill="currentColor"
      />
      <path d="M21.04 19.1523H10.416V20.7523H21.04V19.1523Z" fill="currentColor" />
      <path d="M15.68 14.416H10.416V16.016H15.68V14.416Z" fill="currentColor" />
    </svg>
  );
};

export default MdDocIcon;

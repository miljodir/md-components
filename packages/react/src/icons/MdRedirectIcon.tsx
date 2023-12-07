import React from 'react';
import type MdIconProps from './icon.model';

const MdRedirectIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path
        d="M26.7202 25.6637H4.8002V4.86367H16.4802V3.26367H3.2002V27.2637H28.3202V15.0077H26.7202V25.6637Z"
        fill="currentColor"
      />
      <path
        d="M20.5601 4.8002H25.6961L17.1201 13.3762L18.2561 14.5122L26.7201 6.0482V10.9762H28.3201V3.2002H20.5601V4.8002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdRedirectIcon;

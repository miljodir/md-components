import React from 'react';
import type MdIconProps from './icon.model';

const MdTableIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdTableIcon is deprecated and will be removed in a future release. Use MdIconTable instead.');

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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.921 4H24.5692H22.9881H9.01186H7.43083H4V26H28V4H27.921ZM25.9336 10H16.9336V16H25.9336V10ZM16.9336 18H25.9336V24H16.9336V18ZM15 10H6V16H15V10ZM6 18H15V24H6V18Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdTableIcon;

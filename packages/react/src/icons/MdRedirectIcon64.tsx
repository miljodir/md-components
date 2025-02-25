import React from 'react';
import type MdIconProps from './icon.model';

const MdRedirectIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdRedirectIcon is deprecated and will be removed in a future release. Use MdIconOpenInNew instead.');

  return (
    <svg
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path d="M56 54.808H8V9H33.409V10.958H9.958V52.85H54.042V31.424H56V54.808Z" fill="currentColor" />
      <path d="M56.0001 23.93H54.0001V11H41.0801V9H56.0001V23.93Z" fill="currentColor" />
      <path d="M54.2501 9.56822L34.6279 29.1904L36.0421 30.6046L55.6644 10.9824L54.2501 9.56822Z" fill="currentColor" />
    </svg>
  );
};

export default MdRedirectIcon64;

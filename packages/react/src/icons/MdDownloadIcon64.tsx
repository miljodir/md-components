import React from 'react';
import type MdIconProps from './icon.model';

const MdDownloadIcon64: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdDownloadIcon is deprecated and will be removed in a future release. Use MdIconDownload instead.');

  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path
        d="M25.2797 14.6078L24.1597 13.4718L17.4877 20.1438V4.7998H15.8877V20.1438L9.2157 13.4718L8.0957 14.6078L16.6877 23.1998L25.2797 14.6078Z"
        fill="currentColor"
      />
      <path d="M28.5758 24.5742H4.7998V26.1742H28.5758V24.5742Z" fill="currentColor" />
    </svg>
  );
};

export default MdDownloadIcon64;

import React from 'react';
import type MdIconProps from './icon.model';

const MdUploadIcon64: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdUploadIcon is deprecated and will be removed in a future release. Use MdIconUpload instead.');

  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path
        d="M31.0438 13.83V47.29H32.9648V13.83L47.3558 28.8L48.7098 27.39L32.0048 10L15.2998 27.39L16.6538 28.8L31.0438 13.83Z"
        fill="currentColor"
      />
      <path d="M56 51.9072H8V53.9072H56V51.9072Z" fill="currentColor" />
    </svg>
  );
};

export default MdUploadIcon64;

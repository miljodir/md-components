import React from 'react';
import type MdIconProps from './icon.model';

const MdCalendarIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path d="M23.6284 29.3779H16.0684V31.3779H23.6284V29.3779Z" fill="currentColor" />
      <path d="M35.7797 29.3779H28.2197V31.3779H35.7797V29.3779Z" fill="currentColor" />
      <path d="M47.9321 29.3779H40.3721V31.3779H47.9321V29.3779Z" fill="currentColor" />
      <path d="M23.6284 37.1367H16.0684V39.1367H23.6284V37.1367Z" fill="currentColor" />
      <path d="M35.7797 37.1367H28.2197V39.1367H35.7797V37.1367Z" fill="currentColor" />
      <path d="M47.9321 37.1367H40.3721V39.1367H47.9321V37.1367Z" fill="currentColor" />
      <path d="M23.6284 44.9893H16.0684V46.9893H23.6284V44.9893Z" fill="currentColor" />
      <path d="M35.7797 44.9893H28.2197V46.9893H35.7797V44.9893Z" fill="currentColor" />
      <path d="M47.9321 44.9893H40.3721V46.9893H47.9321V44.9893Z" fill="currentColor" />
      <path
        d="M48.966 14.405V11H46.939V14.405H17.061V11H15.034V14.405H8V52.92H56V14.405H48.966ZM10.027 50.892V22.98H53.973V50.861L10.027 50.892Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdCalendarIcon64;

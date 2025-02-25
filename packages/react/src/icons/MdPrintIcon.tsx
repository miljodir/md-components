import React from 'react';
import type MdIconProps from './icon.model';

const MdPrintIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdPrintIcon is deprecated and will be removed in a future release. Use MdIconPrint instead.');

  return (
    <svg
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <g>
        <g>
          <g>
            <polygon
              points="15.5 10.25 15.5 12.75 15.99 12.75 16 12.74 16 7.76 4.01 7.75 4 12.74 4.5 12.74 4.5 10.25 15.5 10.25"
              fill="none"
            />
            <path
              d="M16,6.75H4a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H4.5v3.5h11v-3.5H16a1,1,0,0,0,1-1v-5A1,1,0,0,0,16,6.75Zm-1.49,6v3.5h-9v-5h9Zm1.5,0h-.5v-2.5H4.5v2.49H4v-5H16Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M14.42,2.75H5.58A.58.58,0,0,0,5,3.33V7.17a.58.58,0,0,0,.58.58h8.84A.58.58,0,0,0,15,7.17V3.33A.58.58,0,0,0,14.42,2.75Zm-.42,4H6v-3h8Z"
            fill="currentColor"
          />
        </g>
        <rect x="7.36" y="11.86" width="5.64" height="1" fill="currentColor" />
        <rect x="7.36" y="13.86" width="5.64" height="1" fill="currentColor" />
      </g>
    </svg>
  );
};

export default MdPrintIcon;

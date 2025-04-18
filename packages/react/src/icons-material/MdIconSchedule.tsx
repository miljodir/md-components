import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconSchedule: React.FunctionComponent<MdIconProps> = ({
  className,
  large = false,
  ...otherProps
}: MdIconProps) => {
  if (large) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className={className}
        {...otherProps}
      >
        <path d="m630.08-295.46 33.84-33.85-159-160.01v-200.22h-45.38v218.85l170.54 175.23ZM480.07-100q-78.22 0-147.4-29.92t-120.99-81.71q-51.81-51.79-81.75-120.94Q100-401.71 100-479.93q0-78.22 29.92-147.4t81.71-120.99q51.79-51.81 120.94-81.75Q401.71-860 479.93-860q78.22 0 147.4 29.92t120.99 81.71q51.81 51.79 81.75 120.94Q860-558.29 860-480.07q0 78.22-29.92 147.4t-81.71 120.99q-51.79 51.81-120.94 81.75Q558.29-100 480.07-100ZM480-480Zm0 334.61q138.08 0 236.35-98.26 98.26-98.27 98.26-236.35 0-138.08-98.26-236.35-98.27-98.26-236.35-98.26-138.08 0-236.35 98.26-98.26 98.27-98.26 236.35 0 138.08 98.26 236.35 98.27 98.26 236.35 98.26Z" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      className={className}
      {...otherProps}
    >
      <path d="m620.92-316.92 37.16-37.16L506-506.16V-720h-52v236.15l166.92 166.93ZM480.07-116q-75.21 0-141.4-28.42-66.18-28.42-115.99-78.21-49.81-49.79-78.25-116.09Q116-405.01 116-480.39q0-75.38 28.42-141.75t78.21-115.68q49.79-49.31 116.09-77.75Q405.01-844 480.39-844q75.38 0 141.75 28.66 66.38 28.66 115.48 77.79 49.1 49.13 77.74 115.55Q844-555.58 844-480.07q0 75.21-28.42 141.4-28.42 66.18-77.71 115.99-49.29 49.81-115.76 78.25Q555.64-116 480.07-116ZM480-480Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" />
    </svg>
  );
};

export default MdIconSchedule;

import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconExpandContent: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M220-220v-220h45.39v174.61H440V-220H220Zm474.61-300v-174.61H520V-740h220v220h-45.39Z" />
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
      <path d="M260-260v-220h52v168h168v52H260Zm388-220v-168H480v-52h220v220h-52Z" />
    </svg>
  );
};

export default MdIconExpandContent;

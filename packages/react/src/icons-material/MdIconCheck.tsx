import React from 'react';
import type MdIconProps from './icon.model';

const MdIconCheck: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M379.15-258.31 168.62-468.85l32.61-32.23 177.92 177.93 379-379.39 32.62 32.62-411.62 411.61Z" />
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
      <path d="M389-280.85 209.62-459.23 246.38-497 389-354.38 713.62-678l36.76 36.77L389-280.85Z" />
    </svg>
  );
};

export default MdIconCheck;

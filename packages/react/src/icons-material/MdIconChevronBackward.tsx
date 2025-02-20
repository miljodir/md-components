import React from 'react';
import type MdIconProps from './icon.model';

const MdIconChevronBackward: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M560.62-253.85 333.85-480.62l226.77-227.15 32.61 32.62-194.15 194.53 194.15 194.16-32.61 32.61Z" />
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
      <path d="M576-253.85 349.85-480 576-706.15 613.15-669l-189 189 189 189L576-253.85Z" />
    </svg>
  );
};

export default MdIconChevronBackward;

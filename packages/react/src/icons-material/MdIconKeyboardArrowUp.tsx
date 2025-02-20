import React from 'react';
import type MdIconProps from './icon.model';

const MdIconKeyboardArrowUp: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M480-560.92 286.46-367.39 253.85-400 480-626.15 706.15-400l-32.61 32.61L480-560.92Z" />
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
      <path d="m480-538.85-189 189L253.85-387 480-613.15 706.15-387 669-349.85l-189-189Z" />
    </svg>
  );
};

export default MdIconKeyboardArrowUp;

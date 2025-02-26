import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconExpandAll: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M480-93.85 253.85-320l33.23-33.23L480-161.08l192.92-192.15L706.15-320 480-93.85ZM287.08-606.77 253.85-640 480-866.15 706.15-640l-33.23 33.23L480-798.92 287.08-606.77Z" />
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
      <path d="M480-109.85 265.85-324l36.77-36.77L480-184.15l177.38-176.62L694.15-324 480-109.85Zm-177.77-489L265.85-636 480-850.15 694.15-636l-36.38 37.15-177.77-177-177.77 177Z" />
    </svg>
  );
};

export default MdIconExpandAll;

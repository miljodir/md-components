import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconContentCopy: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M288-240v-624h528v624H288Zm72-72h384v-480H360v480ZM144-96v-624h72v552h456v72H144Zm216-216v-480 480Z" />
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
      <path d="M240-200v-680h560v680H240Zm60-60h440v-560H300v560ZM120-80v-680h60v620h500v60H120Zm180-180v-560 560Z" />
    </svg>
  );
};

export default MdIconContentCopy;

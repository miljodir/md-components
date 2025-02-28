import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconCollapseAll: React.FunctionComponent<MdIconProps> = ({
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
        <path d="m291.54-97.69-32-31.62L480-349.77l220.46 220.46-32 31.62L480-285.77 291.54-97.69ZM480-610.85 259.54-831.31l32-32L480-674.85l188.46-188.46 32 32L480-610.85Z" />
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
      <path d="M289-108.85 252.85-145 480-373.15 707.15-145 671-108.85l-191-190-191 190Zm191-478L252.85-815 289-851.15l191 190 191-190L707.15-815 480-586.85Z" />
    </svg>
  );
};

export default MdIconCollapseAll;

import React from 'react';
import type MdIconProps from './icon.model';

const MdIconMenu: React.FunctionComponent<MdIconProps> = ({ className, large = false, ...otherProps }: MdIconProps) => {
  if (large) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className={className}
        {...otherProps}
      >
        <path d="M140-254.62V-300h680v45.38H140Zm0-202.69v-45.38h680v45.38H140ZM140-660v-45.38h680V-660H140Z" />
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
      <path d="M164-278.62v-51.99h632v51.99H164ZM164-454v-52h632v52H164Zm0-175.39v-51.99h632v51.99H164Z" />
    </svg>
  );
};

export default MdIconMenu;

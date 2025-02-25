import React from 'react';
import type MdIconProps from './icon.model';

const MdIconImage: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M294-298h375.07L543.54-465.38 443.23-335.23l-62-78.31L294-298ZM164-164v-632h632v632H164Zm52-52h528v-528H216v528Zm0 0v-528 528Z" />
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
      <path d="M294-298h375.07L543.54-465.38 443.23-335.23l-62-78.31L294-298ZM164-164v-632h632v632H164Zm52-52h528v-528H216v528Zm0 0v-528 528Z" />
    </svg>
  );
};

export default MdIconImage;

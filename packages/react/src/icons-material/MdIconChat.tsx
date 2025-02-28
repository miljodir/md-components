import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconChat: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M100-118.46V-860h760v600H241.54L100-118.46Zm121.69-186.93h592.92v-509.22H145.39v589.99l76.3-80.77Zm-76.3 0v-509.22 509.22Zm104.61-104h294.92v-45.38H250v45.38Zm0-127.3h460v-45.39H250v45.39ZM250-664h460v-45.38H250V-664Z" />
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
      <path d="M116-134.46V-844h728v584H241.54L116-134.46ZM220-312h572v-480H168v532.39L220-312Zm-52 0v-480 480Zm82-82h316v-52H250v52Zm0-132h460v-52H250v52Zm0-132h460v-52H250v52Z" />
    </svg>
  );
};

export default MdIconChat;

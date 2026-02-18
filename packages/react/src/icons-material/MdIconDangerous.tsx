import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconDangerous: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M346.92-160 160-346.92v-266.16L346.92-800h266.16L800-613.08v266.16L613.08-160H346.92Zm14.7-180.38L480-458l118.38 117.62 22-21.24L502-480l118.38-118.38-22-22L480-502 361.62-620.38l-21.24 22L458-480 340.38-361.62l21.24 21.24Zm-2 149.61h240.76l168.85-168.85v-240.76L600.38-769.23H359.62L190.77-600.38v240.76l168.85 168.85ZM480-480Z" />
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
      <path d="M346.92-160 160-346.92v-266.16L346.92-800h266.16L800-613.08v266.16L613.08-160H346.92ZM366-337.69l114-114 114 114L622.31-366l-114-114 114-114L594-622.31l-114 114-114-114L337.69-594l114 114-114 114L366-337.69ZM364-200h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z" />
    </svg>
  );
};

export default MdIconDangerous;

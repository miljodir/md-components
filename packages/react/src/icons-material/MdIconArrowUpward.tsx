import React from 'react';
import type MdIconProps from './icon.model';

const MdIconArrowUpward: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M457.31-180v-513.69L212-448.39 180-480l300-300 300 300-32 31.61-245.31-245.3V-180h-45.38Z" />
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
      <path d="M454-212v-436.08L249.15-443.23 212-480l268-268 268 268-37.15 36.77L506-648.08V-212h-52Z" />
    </svg>
  );
};

export default MdIconArrowUpward;

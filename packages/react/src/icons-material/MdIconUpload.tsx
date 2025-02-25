import React from 'react';
import type MdIconProps from './icon.model';

const MdIconUpload: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M457.31-323.39v-368.69l-110.39 110-32.61-32.23L480-780l165.69 165.69-32.61 32.23-110.39-110v368.69h-45.38ZM180-180v-183h45.39v137.61h509.22V-363H780v183H180Z" />
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
      <path d="M454-344.46v-352l-99.61 99.61-37.16-36.38L480-796l162.77 162.77-37.16 36.38L506-696.46v352h-52ZM212-212v-124.77h52V-264h432v-72.77h52V-212H212Z" />
    </svg>
  );
};

export default MdIconUpload;

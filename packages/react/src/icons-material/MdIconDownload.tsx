import React from 'react';
import type MdIconProps from './icon.model';

const MdIconDownload: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M480-323.39 314.31-489.08l32.61-32.23 110.39 110V-780h45.38v368.69l110.39-110 32.61 32.23L480-323.39ZM180-180v-183h45.39v137.61h509.22V-363H780v183H180Z" />
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
      <path d="M480-344.46 317.23-507.23l37.16-36.38L454-444v-352h52v352l99.61-99.61 37.16 36.38L480-344.46ZM212-212v-124.77h52V-264h432v-72.77h52V-212H212Z" />
    </svg>
  );
};

export default MdIconDownload;

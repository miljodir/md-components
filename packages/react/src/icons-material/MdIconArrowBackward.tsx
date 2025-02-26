import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconArrowBackward: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M266.31-457.31 512-212l-32 32-300-300 300-300 32 32-245.69 245.31H780v45.38H266.31Z" />
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
      <path d="m311.92-454 204.85 204.85L480-212 212-480l268-268 36.77 37.15L311.92-506H748v52H311.92Z" />
    </svg>
  );
};

export default MdIconArrowBackward;

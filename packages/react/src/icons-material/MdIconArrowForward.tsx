import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconArrowForward: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M693.69-457.31H180v-45.38h513.69L448.39-748 480-780l300 300-300 300-31.61-32 245.3-245.31Z" />
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
      <path d="M648.08-454H212v-52h436.08L443.23-710.85 480-748l268 268-268 268-36.77-37.15L648.08-454Z" />
    </svg>
  );
};

export default MdIconArrowForward;

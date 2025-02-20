import React from 'react';
import type MdIconProps from './icon.model';

const MdIconAdd: React.FunctionComponent<MdIconProps> = ({ className, large = false, ...otherProps }: MdIconProps) => {
  if (large) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className={className}
        {...otherProps}
      >
        <path d="M457.31-457.31H220v-45.38h237.31V-740h45.38v237.31H740v45.38H502.69V-220h-45.38v-237.31Z" />
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
      <path d="M454-454H260v-52h194v-194h52v194h194v52H506v194h-52v-194Z" />
    </svg>
  );
};

export default MdIconAdd;

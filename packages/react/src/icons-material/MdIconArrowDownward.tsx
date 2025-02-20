import React from 'react';
import type MdIconProps from './icon.model';

const MdIconArrowDownward: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M457.31-780v513.69L212-512l-32 32 300 300 300-300-32-32-245.31 245.69V-780h-45.38Z" />
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
      <path d="M454-748v436.08L249.15-516.77 212-480l268 268 268-268-37.15-36.77L506-311.92V-748h-52Z" />
    </svg>
  );
};

export default MdIconArrowDownward;

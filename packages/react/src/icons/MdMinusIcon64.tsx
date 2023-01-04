import React from 'react';

export interface MdMinusIconProps {
  className?: string;
  [otherProps: string]: unknown;
};

const MdMinusIcon64: React.FunctionComponent<MdMinusIconProps> = ({
  className = '',
  ...otherProps
}: MdMinusIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...otherProps}
    >
      <path d="M47 31H15V33H47V31Z" fill="currentColor"/>
    </svg>

  );
};

export default MdMinusIcon64;

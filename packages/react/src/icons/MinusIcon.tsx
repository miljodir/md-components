import React from 'react';

export interface MinusIconProps {
  className?: string;
};

const MinusIcon: React.FunctionComponent<MinusIconProps> = ({
  className = ''
}: MinusIconProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.592 16H8V17.6H24.592V16Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MinusIcon;

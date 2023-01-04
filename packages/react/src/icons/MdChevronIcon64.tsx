import React from 'react';

interface MdChevronIconProps {
  className?: string;
  [otherProps: string]: unknown;
}

const MdChevronIcon64: React.FunctionComponent<MdChevronIconProps> = ({
  className,
  ...otherProps
}: MdChevronIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path d="M20.382 56L19 54.618L41.608 32L19 9.382L20.382 8L44.382 32L20.382 56Z" fill="currentColor"/>
    </svg>

  );
};

export default MdChevronIcon64;

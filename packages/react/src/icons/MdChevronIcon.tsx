import React from 'react';

interface MdChevronIconProps {
  className?: string;
  [otherProps: string]: unknown;
}

const MdChevronIcon: React.FunctionComponent<MdChevronIconProps> = ({
  className,
  ...otherProps
}: MdChevronIconProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      className={className}
      {...otherProps}
    >
      <path d="M9.59961 4.3362L20.9276 15.6642L9.59961 26.9922L10.7356 28.1282L23.1996 15.6642L10.7356 3.2002L9.59961 4.3362Z" fill="currentColor"/>
    </svg>

  );
};

export default MdChevronIcon;

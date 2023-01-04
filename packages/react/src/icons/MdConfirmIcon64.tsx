import React from 'react';

interface MdConfirmIconProps {
  className?: string;
  [otherProps: string]: unknown;
}

const MdConfirmIcon64: React.FunctionComponent<MdConfirmIconProps> = ({
  className,
  ...otherProps
}: MdConfirmIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path d="M28.7852 43.1696L20.9922 32.6406L22.5822 31.4756L28.8542 39.9496L43.4542 21.9346L44.9952 23.1786L28.7852 43.1696Z" fill="currentColor"/>
      <path d="M56 56H8V8H56V56ZM9.964 54.04H54.04V9.964H9.964V54.04Z" fill="currentColor"/>
    </svg>
  );
};

export default MdConfirmIcon64;

import React from 'react';

export interface CheckIconProps {
  className?: string;
};

const CheckIcon: React.FunctionComponent<CheckIconProps> = ({
  className = ''
}: CheckIconProps) => {
  return (
    <svg
      viewBox="0 0 25 22"
      fill="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <path
        fill="currentColor"
        d="M23.3748 0.798828L8.52683 19.1028L2.07883 10.3828L0.798828 11.3428L8.47883 21.7268L24.6228 1.80683L23.3748 0.798828Z"
      />
    </svg>

  );
};

export default CheckIcon;

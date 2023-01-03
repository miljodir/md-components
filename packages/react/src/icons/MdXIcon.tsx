import React from 'react';

export interface MdXIconProps {
  className?: string;
  [otherProps: string]: unknown;
};

const MdXIcon: React.FunctionComponent<MdXIconProps> = ({
  className = '',
  ...otherProps
}: MdXIconProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 25 25"
      className={className}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M24.7678 1.9198L23.6318 0.799805L12.7838 11.6478L1.9358 0.799805L0.799805 1.9198L11.6478 12.7838L0.799805 23.6478L1.9358 24.7678L12.7838 13.9198L23.6318 24.7678L24.7678 23.6478L13.9198 12.7838L24.7678 1.9198Z"
      />
    </svg>
  );
};

export default MdXIcon;

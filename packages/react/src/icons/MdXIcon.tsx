import React from 'react';

export interface MdXIconProps {
  className?: string;
  [otherProps: string]: unknown;
}

const MdXIcon: React.FunctionComponent<MdXIconProps> = ({ className = '', ...otherProps }: MdXIconProps) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path
        d="M28.7678 5.9198L27.6318 4.7998L16.7838 15.6478L5.9358 4.7998L4.7998 5.9198L15.6478 16.7838L4.7998 27.6478L5.9358 28.7678L16.7838 17.9198L27.6318 28.7678L28.7678 27.6478L17.9198 16.7838L28.7678 5.9198Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdXIcon;

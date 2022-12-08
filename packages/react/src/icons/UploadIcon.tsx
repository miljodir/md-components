import React from 'react';

export interface UploadIconProps {
  className?: string;
};

const UploadIcon: React.FunctionComponent<UploadIconProps> = ({
  className = ''
}: UploadIconProps) => {
  return (
    <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    >
      <path d="M15.237 7.85605V23.872H16.837V7.85605L23.813 14.832L24.949 13.696L16.037 4.80005L7.125 13.696L8.261 14.832L15.237 7.85605Z" fill="currentColor"/>
      <path d="M28.3872 24.5743H3.69922V26.1743H28.3872V24.5743Z" fill="currentColor"/>
    </svg>
  );
};

export default UploadIcon;

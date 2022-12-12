import React from 'react';

export interface DocIconProps {
  className?: string;
};

const DocIcon: React.FunctionComponent<DocIconProps> = ({
  className = ''
}: DocIconProps) => {
  return (
    <svg
      viewBox="0 0 37 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M24.061 0H0V48H36.628V12.334L24.061 0ZM2.027 45.973V2.027H22.703V13.936H34.603V45.973H2.027Z" fill="currenColor"/>
      <path d="M18.132 21.1445H7.58203V23.1445H18.132V21.1445Z" fill="currenColor"/>
      <path d="M29.1784 27.5645H7.44043V29.5645H29.1784V27.5645Z" fill="currenColor"/>
      <path d="M29.1784 33.9932H7.44043V35.9932H29.1784V33.9932Z" fill="currenColor"/>
    </svg>
  );
};

export default DocIcon;

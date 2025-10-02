import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconReport: React.FunctionComponent<MdIconProps> = ({
  className,
  large = false,
  ...otherProps
}: MdIconProps) => {
  if (large) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className={className}
        {...otherProps}
      >
        <path d="M480-281q14 0 24.5-10.5T515-316q0-14-10.5-24.5T480-351q-14 0-24.5 10.5T445-316q0 14 10.5 24.5T480-281Zm-30-144h60v-263h-60v263ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm25-60h250l175-175v-250L605-780H355L180-605v250l175 175Zm125-300Z"/>
       </svg>    
       );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      className={className}
      {...otherProps}
    >
      <path d="M480-300q15 0 25.5-10.5T516-336q0-15-10.5-25.5T480-372q-15 0-25.5 10.5T444-336q0 15 10.5 25.5T480-300Zm-36-132h72v-240h-72v240ZM341-144 144-342v-277l197-197h278l197 197v278L618-144H341Zm30-72h218l155-155v-218L588-744H371L216-589v218l155 155Zm109-264Z"/>
      </svg>
  );
};

export default MdIconReport;

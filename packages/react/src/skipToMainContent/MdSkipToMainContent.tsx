'use client';

import React from 'react';

export interface MdSkipToMainContentProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode | string;
}

export const MdSkipToMainContent: React.FC<MdSkipToMainContentProps> = ({
  href,
  children = 'Hopp til hovedinnhold',
  ...otherProps
}) => {
  return (
    <a className="md-skip-to-main-content" href={href} {...otherProps}>
      {children}
    </a>
  );
};

export default MdSkipToMainContent;

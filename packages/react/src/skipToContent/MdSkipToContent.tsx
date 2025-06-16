'use client';

import * as React from 'react';

export type MdSkipToContentProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

export const MdSkipToContent: React.FC<MdSkipToContentProps> = ({
  children = 'Skip to content',
  href = '#content',
  ...otherProps
}) => {
  return (
    <a className="md-skip-to-content" href={href} {...otherProps}>
      {children}
    </a>
  );
};

MdSkipToContent.displayName = 'MdSkipToContent';
export default MdSkipToContent;

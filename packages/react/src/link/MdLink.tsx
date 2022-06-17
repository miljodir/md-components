import React from 'react';

interface MdLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const MdLink = ({ children, ...otherProps }: MdLinkProps) => (
  <a className="md-link" {...otherProps}>
    {children}
  </a>
);

export default MdLink;

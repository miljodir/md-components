import React from 'react';

interface MdLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const MdLink: React.FunctionComponent<MdLinkProps> = ({
  children,
  ...otherProps
}: MdLinkProps) => (
  <a className="md-link" {...otherProps}>
    {children}
  </a>
);

export default MdLink;

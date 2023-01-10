import React from 'react';

interface MdLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: string | React.ReactNode;
  href?: string;
  onClick?(e: React.MouseEvent): void;
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

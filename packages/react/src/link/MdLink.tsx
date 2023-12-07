import classnames from 'classnames';
import React from 'react';

export interface MdLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: string | React.ReactNode;
  href?: string;
  onClick?(_e: React.MouseEvent): void;
}

const MdLink: React.FunctionComponent<MdLinkProps> = ({ children, ...otherProps }: MdLinkProps) => {
  const classNames = classnames('md-link', otherProps.className);
  return (
    <a {...otherProps} className={classNames}>
      {children}
    </a>
  );
};

export default MdLink;

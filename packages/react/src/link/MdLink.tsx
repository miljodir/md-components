import classnames from 'classnames';
import React from 'react';

export interface MdLinkProps {
  children?: string | React.ReactNode;
  href?: string;
  onClick?(_e: React.MouseEvent): void;
}

const MdLink: React.FunctionComponent<
  MdLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  href,
  children,
  onClick,
  ...otherProps
}: MdLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classNames = classnames('md-link', otherProps.className);
  return href ? (
    <a href={href} {...otherProps} className={classNames}>
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} {...otherProps} className={classNames}>
      {children}
    </button>
  );
};

export default MdLink;

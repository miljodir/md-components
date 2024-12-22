import classnames from 'classnames';
import React from 'react';

export type MdLinkProps = {
  children?: string | React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLAnchorElement | HTMLButtonElement>;
  onClick?(_e: React.MouseEvent): void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const MdLink: React.FunctionComponent<MdLinkProps> = ({ href, children, icon, onClick, ref, ...otherProps }) => {
  const classNames = classnames('md-link', otherProps.className);
  return href ? (
    <a href={href} {...otherProps} className={classNames} ref={ref as React.Ref<HTMLAnchorElement>}>
      {children}
      {icon && <div className="md-link__icon">{icon}</div>}
    </a>
  ) : (
    <button
      type="button"
      onClick={onClick}
      {...otherProps}
      className={classNames}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      {children}
      {icon && <div className="md-link__icon">{icon}</div>}
    </button>
  );
};

export default MdLink;

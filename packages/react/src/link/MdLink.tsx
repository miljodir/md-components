import classnames from 'classnames';
import React, { forwardRef } from 'react';

export type MdLinkProps = {
  children?: string | React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  onClick?(_e: React.MouseEvent): void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const MdLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, MdLinkProps>(
  ({ href, children, icon, onClick, ...otherProps }, ref) => {
    const classNames = classnames('md-link', otherProps.className);
    return href ? (
      <a href={href} {...otherProps} className={classNames} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
        {children}
        {icon && <div className="md-link__icon">{icon}</div>}
      </a>
    ) : (
      <button
        type="button"
        onClick={onClick}
        {...otherProps}
        className={classNames}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
      >
        {children}
        {icon && <div className="md-link__icon">{icon}</div>}
      </button>
    );
  },
);

MdLink.displayName = 'MdLink';
export default MdLink;

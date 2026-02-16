'use client';

import classnames from 'classnames';
import React, { forwardRef } from 'react';

export type MdLinkProps = {
  children?: string | React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  asChild?: boolean;
  asChildContent?: React.ReactNode;
  onClick?(_e: React.MouseEvent): void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MdLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, MdLinkProps>(
  ({ href, children, icon, asChild, asChildContent, onClick, ...otherProps }, ref) => {
    const classNames = classnames('md-link', otherProps.className);

    const content = (
      <>
        {children}
        {icon && <div className="md-link__icon">{icon}</div>}
      </>
    );

    if (asChild && asChildContent) {
      const childElement = asChildContent as React.ReactElement;
      const childClassName = childElement.props?.className || '';
      return React.cloneElement(
        childElement,
        {
          ...otherProps,
          className: classnames(classNames, childClassName),
        },
        content,
      );
    }

    return href ? (
      <a href={href} {...otherProps} className={classNames} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
        {content}
      </a>
    ) : (
      <button
        type="button"
        onClick={onClick}
        {...otherProps}
        className={classNames}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
      >
        {content}
      </button>
    );
  },
);

MdLink.displayName = 'MdLink';
export default MdLink;

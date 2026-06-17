'use client';

import classnames from 'classnames';
import React from 'react';

export interface MdBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: string | React.ReactNode | null;
  className?: string;
  theme?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  size: 'small' | 'medium' | 'large';
}

export const MdBadge: React.FunctionComponent<MdBadgeProps> = ({
  children,
  className = '',
  theme,
  size,
  ...otherProps
}: MdBadgeProps) => {

  const badgeClassNames = classnames('md-badge', className, {
    [`md-badge--${theme}`]: !!theme,
    [`md-badge--${size}`]: !!size,
    'md-badge--dot': children == null || children === '', // if empty or missing children, render as dot badge
  });

  return (
    <span
        className={badgeClassNames}
        {...otherProps}
    >
        {children}
    </span>
  );
};

export default MdBadge;

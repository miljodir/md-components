'use client';

import classnames from 'classnames';
import React from 'react';

export interface MdBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  count?: number | null;
  maxCount?: number | null;
  className?: string;
  theme?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  size: 'small' | 'medium' | 'large';
}

export const MdBadge: React.FunctionComponent<MdBadgeProps> = ({
  count,
  maxCount,
  className = '',
  theme,
  size,
  ...otherProps
}: MdBadgeProps) => {

  const badgeClassNames = classnames('md-badge', className, {
    [`md-badge--${theme}`]: !!theme,
    [`md-badge--${size}`]: !!size,
    'md-badge--dot': count == null, // if empty or missing count, render as dot badge
  });

  return (
    <span
        className={badgeClassNames}
        {...otherProps}
    >
        {count != null && (maxCount != null && count > maxCount ? `${maxCount}+` : count)}
    </span>
  );
};

export default MdBadge;

'use client';

import { Tab } from '@ariakit/react';
import classnames from 'classnames';
import React from 'react';

import type { ReactNode } from 'react';

export interface MdTabTitleProps {
  title?: string;
  index: number;
  iconOnly?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  badge?: ReactNode;
  chips?: boolean;
  chipsPrefixIcon?: ReactNode;
}

export const MdTabTitle: React.FunctionComponent<MdTabTitleProps> = ({
  title,
  index,
  iconOnly = false,
  disabled = false,
  leftIcon,
  rightIcon,
  badge,
  chips,
  chipsPrefixIcon,
}: MdTabTitleProps) => {
  const classNames = classnames({
    [chips ? 'md-chip' : 'md-tabs-button']: true,
    'md-tabs-button--disabled': !!disabled && !chips,
    'md-chip--disabled': !!disabled && chips,
  });

  return (
    <Tab aria-label={title || undefined} className={classNames} disabled={disabled} id={`md-tab-${index}`}>
      {chips && chipsPrefixIcon ? <div className="md-chip__left-icon">{chipsPrefixIcon}</div> : null}
      {leftIcon ? (
        <span aria-hidden="true" className="md-tabs-button__left-icon">
          {leftIcon}
        </span>
      ) : null}
      {title && !iconOnly ? <span className="md-tabs-button__label">{title}</span> : null}
      {title && !iconOnly && badge ? <span className="md-tabs-button__badge">{badge}</span> : null}
      {title && !iconOnly && !badge && rightIcon ? (
        <span aria-hidden="true" className="md-tabs-button__right-icon">
          {rightIcon}
        </span>
      ) : null}
    </Tab>
  );
};

export default MdTabTitle;

'use client';

import { Tab } from '@ariakit/react';
import classnames from 'classnames';
import React from 'react';

import type { ReactNode } from 'react';

export interface MdTabTitleProps {
  title: string;
  index: number;
  disabled?: boolean;
  chips?: boolean;
  chipsPrefixIcon?: ReactNode;
}

export const MdTabTitle: React.FunctionComponent<MdTabTitleProps> = ({
  title,
  index,
  disabled = false,
  chips,
  chipsPrefixIcon,
}: MdTabTitleProps) => {
  const classNames = classnames({
    [chips ? 'md-chip' : 'md-tabs-button']: true,
    'md-tabs-button--disabled': !!disabled && !chips,
    'md-chip--disabled': !!disabled && chips,
  });

  return (
    <Tab className={classNames} disabled={disabled} id={`md-tab-${index}`}>
      {chips && chipsPrefixIcon ? <div className="md-chip__left-icon">{chipsPrefixIcon}</div> : null}
      {title}
    </Tab>
  );
};

export default MdTabTitle;

'use client';

import classnames from 'classnames';
import React from 'react';
import MdInputChip from '../chips/MdInputChip';
import type { ReactNode } from 'react';

export interface MdTabTitleProps {
  title: string;
  index: number;
  disabled?: boolean;
  selectedTab: number;
  setSelectedTab: (_index: number) => void;
  chips?: boolean;
  chipsPrefixIcon?: ReactNode;
}

const MdTabTitle: React.FunctionComponent<MdTabTitleProps> = ({
  title,
  index,
  disabled = false,
  selectedTab,
  setSelectedTab,
  chips,
  chipsPrefixIcon,
}: MdTabTitleProps) => {
  const classNames = classnames('md-tabs-button', {
    'md-tabs-button--selected': selectedTab === index,
    'md-tabs-button--disabled': !!disabled,
  });

  if (chips) {
    return (
      <li>
        <MdInputChip
          hideCloseIcon
          label={title}
          disabled={disabled}
          active={selectedTab === index}
          onClick={() => {
            return !disabled && setSelectedTab(index);
          }}
          prefixIcon={selectedTab === index && chipsPrefixIcon}
        />
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        className={classNames}
        onClick={() => {
          return !disabled && setSelectedTab(index);
        }}
        tabIndex={disabled ? -1 : 0}
        data-text={title}
      >
        {title}
      </button>
    </li>
  );
};

export default MdTabTitle;

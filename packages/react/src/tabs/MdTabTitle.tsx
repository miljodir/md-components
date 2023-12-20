import classnames from 'classnames';
import React from 'react';

export interface MdTabTitleProps {
  title: string;
  index: number;
  disabled?: boolean;
  selectedTab: number;
  setSelectedTab: (_index: number) => void;
}

const MdTabTitle: React.FunctionComponent<MdTabTitleProps> = ({
  title,
  index,
  disabled = false,
  selectedTab,
  setSelectedTab,
}: MdTabTitleProps) => {
  const classNames = classnames('md-tabs-button', {
    'md-tabs-button--selected': selectedTab === index,
    'md-tabs-button--disabled': !!disabled,
  });

  return (
    <li>
      <button
        type="button"
        className={classNames}
        onClick={() => {
          return !disabled && setSelectedTab(index);
        }}
        tabIndex={disabled ? -1 : 0}
      >
        {title}
      </button>
    </li>
  );
};

export default MdTabTitle;

'use client';

import React, { useState } from 'react';
import MdTabTitle from './MdTabTitle';
import type { MdTabProps } from './MdTab';
import type { ReactElement, ReactNode } from 'react';

export interface MdTabsProps {
  children: ReactElement<MdTabProps>[];
  initialTab?: number;
  chips?: boolean;
  chipsPrefixIcon?: ReactNode;
}

const MdTabs: React.FunctionComponent<MdTabsProps> = ({
  children,
  initialTab = 0,
  chips = false,
  chipsPrefixIcon = false,
}: MdTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const tabs = children instanceof Array ? children : [children];

  return (
    <div className="md-tabs-container">
      <ul>
        {tabs.map((item, index) => {
          return (
            <MdTabTitle
              key={`md-tab-${index}`}
              title={item.props.title}
              index={index}
              disabled={item.props.disabled}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              chips={chips}
              chipsPrefixIcon={chipsPrefixIcon}
            />
          );
        })}
      </ul>
      {tabs[selectedTab]}
    </div>
  );
};

export default MdTabs;

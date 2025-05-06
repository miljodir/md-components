'use client';

import React, { useState } from 'react';
import MdTabTitle from './MdTabTitle';
import type { ReactElement, ReactNode } from 'react';

export interface MdTabsProps {
  children: ReactElement[];
  initialTab?: number;
  chips?: boolean;
  chipsPrefixIcon?: ReactNode;
  compact?: boolean;
}

export const MdTabs: React.FunctionComponent<MdTabsProps> = ({
  children,
  initialTab = 0,
  chips = false,
  chipsPrefixIcon = false,
  compact = false,
}: MdTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const tabs = children instanceof Array ? children : [children];

  return (
    <div className={`md-tabs-container${compact ? ' md-tabs__compact' : ''}`}>
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

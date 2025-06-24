'use client';

import * as Ariakit from '@ariakit/react';
import React from 'react';
import MdTabTitle from './MdTabTitle';
import type { MdTabProps } from './MdTab';
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
  const tabs: ReactElement<MdTabProps>[] = children instanceof Array ? children : [children];
  const selectedTab = initialTab > tabs.length - 1 || initialTab < 0 ? 0 : initialTab;

  return (
    <div className={`md-tabs-container${compact ? ' md-tabs__compact' : ''}`}>
      <Ariakit.TabProvider defaultSelectedId={`md-tab-${selectedTab}`} selectOnMove={false}>
        <Ariakit.TabList className="md-tabs-list">
          {tabs.map((item, index) => {
            return (
              <MdTabTitle
                key={`md-tab-${index}`}
                title={item.props.title}
                index={index}
                disabled={item.props.disabled}
                chips={chips}
                chipsPrefixIcon={chipsPrefixIcon}
              />
            );
          })}
        </Ariakit.TabList>
        <div className="md-tabs-panels">
          {tabs.map((item, index) => {
            return (
              <Ariakit.TabPanel key={`md-tab-panel-${index}`} tabId={`md-tab-${index}`} className="md-tab-panel">
                {item.props.children}
              </Ariakit.TabPanel>
            );
          })}
        </div>
      </Ariakit.TabProvider>
    </div>
  );
};

export default MdTabs;

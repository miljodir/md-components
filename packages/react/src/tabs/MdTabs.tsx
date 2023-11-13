import React, { ReactElement, useState } from 'react';
import MdTabTitle from './MdTabTitle';

export interface MdTabsProps {
  children: ReactElement[];
  initialTab?: number;
}

const MdTabs: React.FunctionComponent<MdTabsProps> = ({
  children,
  initialTab = 0,
}: MdTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const tabs = children instanceof Array ? children : [children];

  return (
    <div className="md-tabs-container">
      <ul>
        {tabs.map((item: any, index: any) => (
          <MdTabTitle
            key={`md-tab-${index}`}
            title={item.props.title}
            index={index}
            disabled={item.props.disabled}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {tabs[selectedTab]}
    </div>
  );
};

export default MdTabs;

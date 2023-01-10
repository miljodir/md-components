import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MdAccordionItem from '../../packages/react/src/accordion/MdAccordionItem';

export default {
  title: 'Components/Accordion',
  // component: MdAccordionItem,
  parameters: {
    docs: {
      description: {
        component: "Example use for handling accordion items.<br/><br/>`import { MdAccordionItem } from '@md-components/md-react'`",
      },
    },
  },
};

const Template: ComponentStory<typeof MdAccordionItem> = (args) => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (e: React.MouseEvent, item: any) => {
    setExpanded(item === expanded ? null : item);
  }

  return (
    <div>
      <MdAccordionItem
        label="Første element"
        expanded={expanded === '1'}
        onToggle={(e: React.MouseEvent) => handleExpand(e, '1')}
      >
          Dette er første element i accordion
      </MdAccordionItem>

      <MdAccordionItem
        label="Andre element"
        expanded={expanded === '2'}
        onToggle={(e: React.MouseEvent) => handleExpand(e, '2')}
      >
          Dette er andre element i accordion
      </MdAccordionItem>
    </div>
  );
};

export const AccordionExample = Template.bind({});
AccordionExample.parameters = {
  controls: { hideNoControlsWarning: true },
};
